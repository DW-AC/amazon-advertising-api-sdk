"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthClient = void 0;
const client_oauth2_1 = __importDefault(require("client-oauth2"));
const lodash_1 = require("lodash");
const constants_1 = require("./constants");
const axios_1 = require("./axios");
const request = async (method, url, body, headerRecord) => {
    const headers = {
        'Accept-Encoding': 'application/json',
        'User-Agent': constants_1.USER_AGENT,
        ...headerRecord,
    };
    const { status, data } = await axios_1.axios.request({
        url,
        method: method,
        headers,
        data: body,
    });
    return {
        status,
        body: JSON.stringify(data),
    };
};
class OAuthClient {
    constructor(opts, marketplace) {
        this.opts = opts;
        const amazonOptions = {
            accessTokenUri: marketplace.advertising.region.accessTokenUri,
            authorizationUri: marketplace.advertising.region.authorizationUri,
            scopes: ['cpc_advertising:campaign_management'],
        };
        this.client = new client_oauth2_1.default((0, lodash_1.defaultsDeep)({}, this.opts, amazonOptions), request);
    }
    get getUri() {
        return this.client.code.getUri.bind(this);
    }
    get getToken() {
        return this.client.code.getToken.bind(this);
    }
    createToken(accessToken, refreshToken) {
        return this.client.createToken(accessToken, refreshToken, 'bearer', {});
    }
}
exports.OAuthClient = OAuthClient;
//# sourceMappingURL=o-auth-client.js.map