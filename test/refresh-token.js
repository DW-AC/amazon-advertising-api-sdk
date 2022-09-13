"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const o_auth_client_1 = require("../src/o-auth-client");
const config_1 = require("./config");
/**
 * Refresh an access token.
 *
 * Usage:
 *
 * By default, will read and write to `.env` in your current working directory.
 *
 * $> npm run dev:refresh-token
 *
 * But you can also specify a file manually to read & write:
 *
 * $> npm run dev:refresh-token .env.dev
 *
 * You can also write to STDOUT:
 *
 * $> npm run dev:refresh-token -
 */
const DOTENV_PATH = (0, path_1.join)(__dirname, '../.env');
const OUTPUT = process.argv[2] || DOTENV_PATH;
function isOutputStdout(output) {
    return output && output === '-';
}
if (!isOutputStdout(OUTPUT) && !(0, fs_1.existsSync)(OUTPUT)) {
    throw new Error(`The "${OUTPUT}" file does not exist.`);
}
(0, amazon_marketplaces_1.assertMarketplaceHasAdvertising)(amazon_marketplaces_1.amazonMarketplaces.US);
const client = new o_auth_client_1.OAuthClient({
    clientId: config_1.config.TEST_CLIENT_ID,
    clientSecret: config_1.config.TEST_CLIENT_SECRET,
}, amazon_marketplaces_1.amazonMarketplaces.US);
if (!config_1.config.TEST_ACCESS_TOKEN) {
    throw new Error('Missing `TEST_ACCESS_TOKEN` environment variable.');
}
if (!config_1.config.TEST_REFRESH_TOKEN) {
    throw new Error('Missing `TEST_REFRESH_TOKEN` environment variable.');
}
client
    .createToken(config_1.config.TEST_ACCESS_TOKEN, config_1.config.TEST_REFRESH_TOKEN)
    .refresh()
    .then((tokens) => {
    if (isOutputStdout(OUTPUT)) {
        process.stdout.write(tokens.accessToken);
    }
    else {
        const dotenv = (0, fs_1.readFileSync)(OUTPUT, { encoding: 'utf8' });
        const res = dotenv.replace(/TEST_ACCESS_TOKEN=(.+?)\n/, `TEST_ACCESS_TOKEN=${tokens.accessToken}\n`);
        (0, fs_1.writeFileSync)(OUTPUT, res, { encoding: 'utf8' });
    }
})
    .catch((err) => console.error(err));
//# sourceMappingURL=refresh-token.js.map