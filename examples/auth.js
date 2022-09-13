"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amazonAdvertising = void 0;
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const src_1 = require("../src");
const auth = {
    accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
    clientId: 'amzn1.application-oa2-client.a8358a60...',
    scope: 1234567890,
};
(0, amazon_marketplaces_1.assertMarketplaceHasAdvertising)(amazon_marketplaces_1.amazonMarketplaces.US);
exports.amazonAdvertising = new src_1.AmazonAdvertising(amazon_marketplaces_1.amazonMarketplaces.US, auth);
//# sourceMappingURL=auth.js.map