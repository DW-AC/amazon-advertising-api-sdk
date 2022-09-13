"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const http_client_factory_1 = require("../../http-client-factory");
const sponsored_products_bid_recommendation_operation_1 = require("../../../src/operations/bidding/sponsored-products-bid-recommendation-operation");
describe('SponsoredProductsBidRecommendationOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_products_bid_recommendation_operation_1.SponsoredProductsBidRecommendationOperation);
    const AUTO_AD_GROUP_ID = 164621261612363;
    const MANUAL_AD_GROUP_ID = 149522344269714;
    describe('getAdGroupBidRecommendations', () => {
        it(`should retrieve bid recommendation data for the specified adGroup id`, async () => {
            const res = await operation.getAdGroupBidRecommendations(AUTO_AD_GROUP_ID);
            expect(res.adGroupId).toBe(AUTO_AD_GROUP_ID);
        });
    });
    describe('getKeywordBidRecommendations', () => {
        it(`should retrieve bid recommendation data for the specified keyword id`, async () => {
            const KEYWORD_ID = 16577721726418;
            const res = await operation.getKeywordBidRecommendations(KEYWORD_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
        });
    });
    describe('createKeywordBidRecommendations', () => {
        it(`should retrieve keyword bid recommendation data for one or more keywords`, async () => {
            expect.assertions(3);
            const params = {
                adGroupId: MANUAL_AD_GROUP_ID,
                keywords: [
                    {
                        keyword: 'Apple1',
                        matchType: 'broad',
                    },
                    {
                        keyword: 'Apple2',
                        matchType: 'exact',
                    },
                    {
                        keyword: 'Apple3',
                        matchType: 'phrase',
                    },
                ],
            };
            const res = await operation.createKeywordBidRecommendations(params);
            const [recommendation] = res.recommendations;
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            if (recommendation.code == 'SUCCESS') {
                expect(recommendation.keyword).toBe('Apple1');
                expect(recommendation.matchType).toBe('broad');
            }
        });
    });
    /**
     * TODO: Need check again on Production API
     * Sandbox API retuns an error:
     * UnprocessableEntityError: The server understood your request but was unable to process one or more parameters.
     */
    describe.skip('getBidRecommendations', () => {
        it(`should retrieve a list of bid recommendations for keyword, product or auto targeting expressions by adGroupId`, async () => {
            expect.assertions(3);
            const EXPRESSION_VALUE = 'Apple';
            const EXPRESSION_TYPE = 'queryBroadRelMatches';
            const params = {
                adGroupId: AUTO_AD_GROUP_ID,
                expressions: [
                    {
                        value: EXPRESSION_VALUE,
                        type: EXPRESSION_TYPE,
                    },
                ],
            };
            const res = await operation.getBidRecommendations(params);
            const [recommendation] = res.recommendations;
            expect(res.adGroupId).toBe(AUTO_AD_GROUP_ID);
            if (recommendation.code == 'SUCCESS') {
                expect(recommendation.expression.value).toBe(EXPRESSION_VALUE);
                expect(recommendation.expression.type).toBe(EXPRESSION_TYPE);
            }
        });
    });
});
//# sourceMappingURL=sponsored-products-bid-recommendation-operation.test.js.map