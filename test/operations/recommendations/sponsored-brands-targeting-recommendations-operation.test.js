"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_brands_targeting_recommendations_operation_1 = require("../../../src/operations/recommendations/sponsored-brands-targeting-recommendations-operation");
const http_client_factory_1 = require("../../http-client-factory");
/**
 * TODO: Need check again on Production API. Sandbox API returns an error:
 * Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/recommendations/targets/product/list
 */
describe.skip('SponsoredBrandsTargetingRecommendationsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_targeting_recommendations_operation_1.SponsoredBrandsTargetingRecommendationsOperation);
    const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'];
    describe('getProductRecommendations', () => {
        it(`should return a list of recommended products for targeting`, async () => {
            const MAX_RESULT = 1;
            const params = {
                nextToken: '',
                maxResults: MAX_RESULT,
                filters: [
                    {
                        filterType: 'ASINS',
                        values: ASINS,
                    },
                ],
            };
            const res = await operation.getProductRecommendations(params);
            expect(res.recommendedProducts).toHaveLength(MAX_RESULT);
        });
    });
    describe('getCategoryRecommendations', () => {
        it(`should return a list of recommended categories for targeting`, async () => {
            const params = {
                asins: ASINS,
            };
            const res = await operation.getCategoryRecommendations(params);
            expect(res).toHaveProperty('categoryRecommendationResults');
        });
    });
    describe('getBrandRecommendations', () => {
        it(`should return a list of brand suggestions base on category id`, async () => {
            const CATEGORY_ID = 123;
            const params = {
                categoryId: CATEGORY_ID,
            };
            const res = await operation.getBrandRecommendations(params);
            expect(res).toHaveProperty('brandRecommendationResults');
        });
        it(`should return a list of brand suggestions base on keyword`, async () => {
            const KEYWORD = 'Apple';
            const params = {
                keyword: KEYWORD,
            };
            const res = await operation.getBrandRecommendations(params);
            expect(res).toHaveProperty('brandRecommendationResults');
        });
    });
});
//# sourceMappingURL=sponsored-brands-targeting-recommendations-operation.test.js.map