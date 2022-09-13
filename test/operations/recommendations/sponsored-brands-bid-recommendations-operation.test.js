"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_brands_bid_recommendations_operation_1 = require("../../../src/operations/recommendations/sponsored-brands-bid-recommendations-operation");
const http_client_factory_1 = require("../../http-client-factory");
/**
 * TODO: Need check again on Production API. Sandbox API returns an error:
 * Could not find resource for full path: https://advertising-api-test.amazon.com/v1/hsa/recommendations/bids
 */
describe.skip('SponsoredBrandsBidRecommendationsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_bid_recommendations_operation_1.SponsoredBrandsBidRecommendationsOperation);
    describe('getBidRecommendations', () => {
        it(`should return a list of bid recommendation for keywords or products`, async () => {
            const params = {
                campaignId: 0,
                targets: [
                    {
                        type: 'asinCategorySameAs',
                        value: 'string',
                    },
                ],
                keywords: [
                    {
                        matchType: 'broad',
                        keywordText: 'string',
                    },
                ],
            };
            const res = await operation.getBidRecommendations(params);
            expect(res).toHaveProperty('keywordsBidsRecommendationSuccessResults');
            expect(res).toHaveProperty('keywordsBidsRecommendationErrorResults');
            expect(res).toHaveProperty('targetsBidsRecommendationSuccessResults');
            expect(res).toHaveProperty('targetsBidsRecommendationErrorResults');
        });
    });
});
//# sourceMappingURL=sponsored-brands-bid-recommendations-operation.test.js.map