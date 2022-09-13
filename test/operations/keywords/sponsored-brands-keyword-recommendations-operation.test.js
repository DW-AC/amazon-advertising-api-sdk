"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsored_brands_keyword_recommendations_operation_1 = require("../../../src/operations/keywords/sponsored-brands-keyword-recommendations-operation");
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
/**
 * TODO: Sandbox API returns an error. Need check again on Production API
 * Error message: 'ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v1/hsa/recommendations/keyword'
 */
describe.skip('SponsoredBrandsKeywordRecommendationsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_keyword_recommendations_operation_1.SponsoredBrandsKeywordRecommendationsOperation);
    const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'];
    const STORE_PAGE_URL = 'https://www.amazon.com/Amazon-Renewed/b/ref=bl_dp_s_web_12653393011?ie=UTF8&node=12653393011&field-lbr_brands_browse-bin=Amazon+Renewed&nocache=1581845842261';
    describe('getKeywordRecommendations', () => {
        it(`should return an array of keyword recommendations for a set of ASINs`, async () => {
            const params = {
                asins: ASINS,
            };
            const res = await operation.getKeywordRecommendations(params);
            expect(Array.isArray(res)).toBeTruthy();
        });
        it(`should return an array of keyword recommendations for a Store page`, async () => {
            const params = {
                url: STORE_PAGE_URL,
            };
            const res = await operation.getKeywordRecommendations(params);
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=sponsored-brands-keyword-recommendations-operation.test.js.map