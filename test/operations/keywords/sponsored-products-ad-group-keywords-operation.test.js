"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsored_products_ad_group_keywords_operation_1 = require("../../../src/operations/keywords/sponsored-products-ad-group-keywords-operation");
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
describe('SponsoredProductsAdGroupKeywordsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_products_ad_group_keywords_operation_1.SponsoredProductsAdGroupKeywordsOperation);
    const MANUAL_CAMPAIGN_ID = 164069484151709;
    const MANUAL_AD_GROUP_ID = 149522344269714;
    const ARCHIVED_KEYWORD_ID = 16577721726418;
    const PAUSED_KEYWORD_ID = 239748696088896;
    describe('getBiddableKeyword', () => {
        it(`should return a Keyword`, async () => {
            const res = await operation.getBiddableKeyword(ARCHIVED_KEYWORD_ID);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            expect(res.keywordId).toBe(ARCHIVED_KEYWORD_ID);
            expect(res).toHaveProperty('keywordText');
            expect(res).toHaveProperty('matchType');
            expect(res).toHaveProperty('state');
        });
    });
    describe('getBiddableKeywordExtended', () => {
        it(`should return a KeywordExtended`, async () => {
            const res = await operation.getBiddableKeywordExtended(ARCHIVED_KEYWORD_ID);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            expect(res.keywordId).toBe(ARCHIVED_KEYWORD_ID);
            expect(res).toHaveProperty('keywordText');
            expect(res).toHaveProperty('matchType');
            expect(res).toHaveProperty('state');
            expect(res).toHaveProperty('creationDate');
            expect(res).toHaveProperty('lastUpdatedDate');
            expect(res).toHaveProperty('servingStatus');
        });
    });
    describe.skip('createKeywords', () => {
        it(`should create a keyword`, async () => {
            const params = [
                {
                    campaignId: MANUAL_CAMPAIGN_ID,
                    adGroupId: MANUAL_AD_GROUP_ID,
                    keywordText: 'Apple',
                    matchType: 'broad',
                    state: 'paused',
                },
            ];
            const [res] = await operation.createKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('updateKeywords', () => {
        it(`should update a keyword`, async () => {
            const params = [
                {
                    keywordId: PAUSED_KEYWORD_ID,
                    state: 'paused',
                    bid: 1,
                },
            ];
            const [res] = await operation.updateKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('archiveBiddableKeyword', () => {
        it(`should archive a keyword`, async () => {
            const res = await operation.archiveBiddableKeyword(ARCHIVED_KEYWORD_ID);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('listBiddableKeywords', () => {
        it(`should return an array of Keywords`, async () => {
            const res = await operation.listBiddableKeywords();
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    describe('listBiddableKeywordsExtended', () => {
        it(`should return an array of KeywordExtendeds`, async () => {
            const res = await operation.listBiddableKeywordsExtended();
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=sponsored-products-ad-group-keywords-operation.test.js.map