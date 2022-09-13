"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientFactory = exports.auth = exports.SANDBOX_URI = void 0;
const http_client_1 = require("../src/http-client");
const config_1 = require("./config");
const SANDBOX = true;
exports.SANDBOX_URI = 'https://advertising-api-test.amazon.com';
exports.auth = {
    accessToken: config_1.config.TEST_ACCESS_TOKEN || '',
    clientId: config_1.config.TEST_CLIENT_ID || '',
    scope: config_1.config.TEST_SCOPE || -1,
};
function httpClientFactory() {
    return new http_client_1.HttpClient(exports.SANDBOX_URI, exports.auth, SANDBOX);
}
exports.httpClientFactory = httpClientFactory;
//# sourceMappingURL=http-client-factory.js.map