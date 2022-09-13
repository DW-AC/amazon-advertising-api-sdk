"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsored_brands_keywords_operation_1 = require("../../../src/operations/keywords/sponsored-brands-keywords-operation");
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
// TODO: Need check operations again because creating sb keyword is not available for test api
describe('SponsoredBrandsKeywordsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_keywords_operation_1.SponsoredBrandsKeywordsOperation);
    const CAMPAIGN_ID = 164069484151709;
    const AD_GROUP_ID = 149522344269714;
    const KEYWORD_ID = 123;
    const KEYWORD_TEXT = 'Pear';
    const BID = 1;
    describe.skip('listKeywords', () => {
        it(`should return an array of sb keywords`, async () => {
            const res = await operation.listKeywords();
            expect(Array.isArray(res)).toBeTruthy();
        });
        it(`should return an array of sb keywords filtered by optional criteria`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                matchTypeFilter: ['phrase'],
                keywordText: KEYWORD_TEXT,
                stateFilter: 'paused',
                campaignIdFilter: [CAMPAIGN_ID],
                adGroupIdFilter: [AD_GROUP_ID],
            };
            const res = await operation.listKeywords(params);
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    describe.skip('updateKeywords', () => {
        it(`should update one or more sb keywords`, async () => {
            const params = [
                {
                    keywordId: KEYWORD_ID,
                    adGroupId: AD_GROUP_ID,
                    campaignId: CAMPAIGN_ID,
                    state: 'paused',
                    bid: BID,
                },
            ];
            const res = await operation.updateKeywords(params);
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    describe.skip('createKeywords', () => {
        it(`should create one or more sb keywords`, async () => {
            const params = [
                {
                    adGroupId: AD_GROUP_ID,
                    campaignId: CAMPAIGN_ID,
                    keywordText: KEYWORD_TEXT,
                    matchType: 'broad',
                    bid: BID,
                },
            ];
            const [res] = await operation.createKeywords(params);
            expect(res.code).toEqual('SUCCESS');
        });
    });
    describe.skip('getKeyword', () => {
        it(`should return a sb keyword by identifier`, async () => {
            const res = await operation.getKeyword(KEYWORD_ID);
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.keywordText).toBe(KEYWORD_TEXT);
            expect(res.matchType).toBe('broad');
            expect(res.bid).toEqual(BID);
        });
    });
    describe.skip('archiveKeyword', () => {
        it(`should archive a sb keyword specified by identifier`, async () => {
            const res = await operation.archiveKeyword(KEYWORD_ID);
            expect(res.keywordId).toBe(KEYWORD_ID);
            expect(res.code).toBe('SUCCESS');
        });
    });
});
//# sourceMappingURL=sponsored-brands-keywords-operation.test.js.map