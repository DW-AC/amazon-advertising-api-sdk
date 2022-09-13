"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsored_products_ad_group_negative_keywords_operation_1 = require("../../../src/operations/keywords/sponsored-products-ad-group-negative-keywords-operation");
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
describe('SponsoredProductsAdGroupNegativeKeywordsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_products_ad_group_negative_keywords_operation_1.SponsoredProductsAdGroupNegativeKeywordsOperation);
    const MANUAL_CAMPAIGN_ID = 164069484151709;
    const MANUAL_AD_GROUP_ID = 149522344269714;
    const KEYWORD_ID = 262433850080632;
    const KEYWORD_TEXT = 'green apple';
    describe('getNegativeKeyword', () => {
        it(`should return a Negative Keyword`, async () => {
            const res = await operation.getNegativeKeyword(KEYWORD_ID);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe('getNegativeKeywordExtended', () => {
        it(`should return a Negative Keyword Extended`, async () => {
            const res = await operation.getNegativeKeywordExtended(KEYWORD_ID);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe.skip('createNegativeKeywords', () => {
        it(`should create a negative keyword`, async () => {
            const params = [
                {
                    campaignId: MANUAL_CAMPAIGN_ID,
                    adGroupId: MANUAL_AD_GROUP_ID,
                    keywordText: KEYWORD_TEXT,
                    matchType: 'negativeExact',
                    state: 'paused',
                },
            ];
            const [res] = await operation.createNegativeKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('updateNegativeKeywords', () => {
        it(`should update a negative keyword`, async () => {
            const params = [
                {
                    keywordId: KEYWORD_ID,
                    state: 'archived',
                },
            ];
            const [res] = await operation.updateNegativeKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('archiveNegativeKeyword', () => {
        it(`should archive a negative keyword`, async () => {
            const res = await operation.archiveNegativeKeyword(KEYWORD_ID);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('listNegativeKeywords', () => {
        it(`should return an array of Negative Keywords`, async () => {
            const res = await operation.listNegativeKeywords();
            expect(Array.isArray(res)).toBeTruthy();
        });
        it(`should return an array of Negative Keywords when filter additional properties`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                matchTypeFilter: 'negativeExact',
                keywordText: KEYWORD_TEXT,
                campaignIdFilter: [MANUAL_CAMPAIGN_ID],
                adGroupIdFilter: [MANUAL_AD_GROUP_ID],
            };
            const [res] = await operation.listNegativeKeywords(params);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe('listNegativeKeywordsExtended', () => {
        it(`should return an array of Negative Keyword Extendeds`, async () => {
            const res = await operation.listNegativeKeywordsExtended();
            expect(Array.isArray(res)).toBeTruthy();
        });
        it(`should return an array of Negative Keyword Extendeds when filter additional properties`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                matchTypeFilter: 'negativeExact',
                keywordText: KEYWORD_TEXT,
                campaignIdFilter: [MANUAL_CAMPAIGN_ID],
                adGroupIdFilter: [MANUAL_AD_GROUP_ID],
            };
            const [res] = await operation.listNegativeKeywordsExtended(params);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
});
//# sourceMappingURL=sponsored-products-ad-group-negative-keywords-operation.test.js.map