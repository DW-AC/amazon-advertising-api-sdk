"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = require("./axios");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const constants_1 = require("./constants");
const errors_1 = require("./errors");
const gunzip_1 = __importDefault(require("./gunzip"));
const util_1 = require("util");
const get_1 = __importDefault(require("lodash/get"));
class HttpClient {
    constructor(uri, auth, sandbox = false) {
        this.uri = uri;
        this.auth = auth;
        this.sandbox = sandbox;
        this.httpStatus = http_status_codes_1.default;
    }
    get headers() {
        const headers = {
            'Content-Type': constants_1.JSON_CONTENT_TYPE,
            Authorization: `Bearer ${this.auth.accessToken}`,
            'Amazon-Advertising-API-ClientId': this.auth.clientId,
        };
        if (this.auth.scope) {
            headers['Amazon-Advertising-API-Scope'] = this.auth.scope.toString();
        }
        // https://advertising.amazon.com/API/docs/v2/reference/bidding/bid_controls
        if (this.sandbox) {
            headers['BIDDING_CONTROLS_ON'] = 'true';
            // prevent gzip in sandbox/dev for nock to catch uncompressed response
            headers['Accept-Encoding'] = constants_1.JSON_CONTENT_TYPE;
        }
        return headers;
    }
    async request(params) {
        return axios_1.axios.request({
            responseType: 'json',
            url: params.uri,
            method: params.method,
            headers: params.headers,
            data: params.body,
            maxRedirects: 0,
            validateStatus: () => true,
        });
    }
    handleApiResponse(res) {
        const { status, headers, data, config } = res;
        if (status === this.httpStatus.OK && !data) {
            throw new errors_1.NullError(config.url || '');
        }
        const badRequest = status >= this.httpStatus.BAD_REQUEST;
        // Documented API Error
        // https://advertising.amazon.com/API/docs/v2/guides/developer_notes#Error-response
        if (badRequest && data && (0, get_1.default)(data, 'code')) {
            throw (0, errors_1.apiErrorFactory)(data, headers);
        }
        if (badRequest && typeof data === 'object' && !(0, get_1.default)(data, 'code')) {
            throw (0, errors_1.apiErrorFactory)({
                code: status.toString(),
                details: (0, util_1.inspect)(data),
            }, headers);
        }
        if (badRequest && typeof data === 'string') {
            throw (0, errors_1.apiErrorFactory)({
                code: status.toString(),
                details: data,
            }, headers);
        }
        // We don't have a body, so it's an unpredictable error, but let's try to structure it
        // anyways for completeness sake
        if (badRequest && !data) {
            throw (0, errors_1.apiErrorFactory)({
                code: status.toString(),
                details: res.statusText,
            }, headers);
        }
        // should not happen, but a catch all just in case
        if (badRequest) {
            throw new errors_1.InvalidProgramStateError(data);
        }
        if (status < this.httpStatus.MULTIPLE_CHOICES && data) {
            return data;
        }
        if (status >= this.httpStatus.MULTIPLE_CHOICES && status < this.httpStatus.BAD_REQUEST) {
            return JSON.parse('null');
        }
        throw new errors_1.InvalidProgramStateError(res.statusText);
    }
    apiUri(resource) {
        return `${this.uri}/${resource}`;
    }
    async apiRequest(params) {
        return this.handleApiResponse(await this.request({
            ...params,
            uri: this.apiUri(params.uri),
            headers: { ...this.headers, ...params.headers },
        }));
    }
    async get(resource, extraHeaders = {}) {
        return this.apiRequest({
            method: 'GET',
            uri: resource,
            headers: extraHeaders,
        });
    }
    async put(resource, body, extraHeaders = {}) {
        return this.apiRequest({
            method: 'PUT',
            uri: resource,
            body: JSON.stringify(body),
            headers: extraHeaders,
        });
    }
    async post(resource, body, extraHeaders = {}) {
        return this.apiRequest({
            method: 'POST',
            uri: resource,
            body: JSON.stringify(body),
            headers: extraHeaders,
        });
    }
    async delete(resource, extraHeaders = {}) {
        return this.apiRequest({
            method: 'DELETE',
            uri: resource,
            headers: extraHeaders,
        });
    }
    async download(resource, headers = {}) {
        const res = await this.request({
            method: 'GET',
            uri: this.apiUri(resource),
            headers: { ...this.headers, ...headers },
        });
        // checks for common errors, we don't care about the result, as we expect it to throw
        // if any failures are detected
        this.handleApiResponse(res);
        const location = res.headers['location'];
        if (res.status !== this.httpStatus.TEMPORARY_REDIRECT || !location) {
            throw new errors_1.InvalidProgramStateError(['Expected a signed URL.', res.statusText].join(' '));
        }
        const download = await axios_1.axios.get(location, {
            responseType: 'arraybuffer',
        });
        if (download.status !== this.httpStatus.OK) {
            throw new errors_1.InvalidProgramStateError(`Expected OK HTTP status, but got: ${res.statusText}`);
        }
        const buffer = Buffer.from(download.data);
        const contentType = download.headers['content-type'];
        const bufferToJson = (buf) => {
            return JSON.parse(buf.toString());
        };
        switch (contentType) {
            case constants_1.JSON_CONTENT_TYPE:
                return bufferToJson(buffer);
            case 'application/x-gzip':
            case 'application/octet-stream':
                return (0, gunzip_1.default)(buffer)
                    .then(bufferToJson)
                    .catch(() => {
                    const bufferHex = Buffer.from(buffer.toString(), 'hex');
                    return (0, gunzip_1.default)(bufferHex).then(bufferToJson);
                });
            default:
                throw new errors_1.InvalidProgramStateError(`Unknown Content-Type: ${contentType}`);
        }
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=http-client.js.map