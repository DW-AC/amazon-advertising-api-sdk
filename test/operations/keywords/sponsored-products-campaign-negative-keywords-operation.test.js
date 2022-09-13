"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsored_products_campaign_negative_keywords_operation_1 = require("../../../src/operations/keywords/sponsored-products-campaign-negative-keywords-operation");
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
describe('SponsoredProductsCampaignNegativeKeywordsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_products_campaign_negative_keywords_operation_1.SponsoredProductsCampaignNegativeKeywordsOperation);
    const MANUAL_CAMPAIGN_ID = 164069484151709;
    const KEYWORD_ID = 271800073719731;
    const KEYWORD_TEXT = 'banana';
    describe('createCampaignNegativeKeywords', () => {
        it(`should create a negative keyword for campaign`, async () => {
            const params = [
                {
                    campaignId: MANUAL_CAMPAIGN_ID,
                    keywordText: KEYWORD_TEXT,
                    matchType: 'negativeExact',
                    state: 'enabled',
                },
            ];
            const [res] = await operation.createCampaignNegativeKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('getCampaignNegativeKeyword', () => {
        it(`should return a campaign negative keyword`, async () => {
            const res = await operation.getCampaignNegativeKeyword(KEYWORD_ID);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe('getCampaignNegativeKeywordExtended', () => {
        it(`should return a campaign negative keyword extended`, async () => {
            const res = await operation.getCampaignNegativeKeywordExtended(KEYWORD_ID);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe('updateCampaignNegativeKeywords', () => {
        it(`should update a campaign negative keyword`, async () => {
            const params = [
                {
                    keywordId: KEYWORD_ID,
                    state: 'enabled',
                },
            ];
            const [res] = await operation.updateCampaignNegativeKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe('listCampaignNegativeKeywords', () => {
        it(`should return an array of campaign negative keywords`, async () => {
            const res = await operation.listCampaignNegativeKeywords();
            expect(Array.isArray(res)).toBeTruthy();
        });
        it(`should return an array of campaign negative keywords when filter additional properties`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                matchTypeFilter: 'negativeExact',
                keywordText: KEYWORD_TEXT,
                campaignIdFilter: [MANUAL_CAMPAIGN_ID],
            };
            const [res] = await operation.listCampaignNegativeKeywords(params);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe('listCampaignNegativeKeywordsExtended', () => {
        it(`should return an array of campaign negative keywords extendeds`, async () => {
            const res = await operation.listCampaignNegativeKeywordsExtended();
            expect(Array.isArray(res)).toBeTruthy();
        });
        it(`should return an array of campaign negative keywords extendeds when filter additional properties`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                matchTypeFilter: 'negativeExact',
                keywordText: KEYWORD_TEXT,
                campaignIdFilter: [MANUAL_CAMPAIGN_ID],
            };
            const [res] = await operation.listCampaignNegativeKeywordsExtended(params);
            expect(res.campaignId).toBe(MANUAL_CAMPAIGN_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('negativeExact');
        });
    });
    describe('archiveCampaignNegativeKeyword', () => {
        it(`should archive a campaign negative keyword`, async () => {
            const res = await operation.archiveCampaignNegativeKeyword(KEYWORD_ID);
            expect(res.code).toEqual('SUCCESS');
        });
    });
});
//# sourceMappingURL=sponsored-products-campaign-negative-keywords-operation.test.js.map