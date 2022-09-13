"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.Config = void 0;
const config_1 = require("@scaleleap/config");
class Config extends config_1.BaseConfig {
    constructor() {
        super(...arguments);
        this.TEST_CLIENT_ID = this.get('TEST_CLIENT_ID').asString();
        this.TEST_CLIENT_SECRET = this.get('TEST_CLIENT_SECRET').asString();
        this.TEST_SCOPE = this.get('TEST_SCOPE').asIntPositive();
        this.TEST_ACCESS_TOKEN = this.get('TEST_ACCESS_TOKEN').asString();
        this.TEST_REFRESH_TOKEN = this.get('TEST_REFRESH_TOKEN').asString();
        this.TEST_OAUTH_REDIRECT_PORT = this.get('TEST_OAUTH_REDIRECT_PORT')
            .default(3000)
            .asIntPositive();
    }
}
exports.Config = Config;
exports.config = new Config();
//# sourceMappingURL=config.js.map