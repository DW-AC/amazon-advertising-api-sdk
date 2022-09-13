"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const o_auth_client_1 = require("../src/o-auth-client");
const client_oauth2_1 = require("client-oauth2");
const config_1 = require("./config");
const querystring_1 = require("querystring");
const jest_polly_1 = require("@scaleleap/jest-polly");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const test_utils_1 = require("./test-utils");
const URI = 'https://example.com';
const PLACEHOLDER = 'x';
describe(o_auth_client_1.OAuthClient.name, () => {
    let client;
    let marketplaceUS;
    beforeEach(() => {
        marketplaceUS = (0, test_utils_1.getAdvertising)(amazon_marketplaces_1.amazonMarketplaces.US);
        client = new o_auth_client_1.OAuthClient({
            clientId: 'foo',
            clientSecret: 'foo',
            redirectUri: URI,
        }, marketplaceUS);
        jest_polly_1.jestPollyContext.polly.server
            .post('https://api.amazon.com/auth/o2/token')
            .on('beforeResponse', (req, res) => {
            /* eslint-disable @typescript-eslint/camelcase */
            req.body = (0, querystring_1.stringify)(Object.assign((0, querystring_1.parse)(req.body), {
                refresh_token: PLACEHOLDER,
            }));
            req.setHeader('authorization', `Basic ${PLACEHOLDER}`);
            res.body = JSON.stringify(Object.assign(JSON.parse(res.body), {
                access_token: PLACEHOLDER,
                refresh_token: PLACEHOLDER,
            }));
            /* eslint-enable @typescript-eslint/camelcase */
        });
    });
    it('should provide a correct uri', () => {
        const uri = client.getUri();
        expect(uri).toContain('https://www.amazon.com/');
    });
    it('should have required methods', () => {
        expect(client).toHaveProperty('getUri');
        expect(client).toHaveProperty('getToken');
        expect(client).toHaveProperty('createToken');
    });
    it('createToken returns a token object', () => {
        const token = client.createToken(PLACEHOLDER, PLACEHOLDER);
        expect(token).toBeInstanceOf(client_oauth2_1.Token);
    });
    it(`refresh an existing token`, async () => {
        client = new o_auth_client_1.OAuthClient({
            clientId: config_1.config.TEST_CLIENT_ID,
            clientSecret: config_1.config.TEST_CLIENT_SECRET,
            redirectUri: URI,
        }, marketplaceUS);
        const token = client.createToken('x', 'x');
        const res = await token.refresh();
        expect(res.accessToken).toBe(PLACEHOLDER);
        expect(res.refreshToken).toBe(PLACEHOLDER);
        expect(res.tokenType).toBe('bearer');
    });
    it(`should provide a correct uri for FE region`, () => {
        const clientFE = new o_auth_client_1.OAuthClient({
            clientId: 'foo',
            clientSecret: 'foo',
            redirectUri: URI,
        }, (0, test_utils_1.getAdvertising)(amazon_marketplaces_1.amazonMarketplaces.JP));
        const uri = clientFE.getUri();
        expect(uri).toContain('https://apac.account.amazon.com/');
    });
});
//# sourceMappingURL=o-auth-client.test.js.map