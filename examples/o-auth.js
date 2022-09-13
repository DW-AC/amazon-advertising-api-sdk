"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const REDIRECT_URI = 'https://www.example.com/success';
(0, amazon_marketplaces_1.assertMarketplaceHasAdvertising)(amazon_marketplaces_1.amazonMarketplaces.CA);
const client = new src_1.OAuthClient({
    clientId: 'amzn1.application-oa2-client.***',
    clientSecret: '...',
    redirectUri: REDIRECT_URI,
}, amazon_marketplaces_1.amazonMarketplaces.CA);
// eslint-disable-next-line no-console
console.info('Visit %s to start authentication.', client.getUri());
//# sourceMappingURL=o-auth.js.map