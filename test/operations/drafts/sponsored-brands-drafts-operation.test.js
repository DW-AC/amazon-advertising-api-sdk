"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
const sponsored_brands_drafts_operation_1 = require("../../../src/operations/drafts/sponsored-brands-drafts-operation");
/**
 * TODO: Need check on Production API again. Sandbox API return error:
 * Could not find resource for full path: https://advertising-api-test.amazon.com/v1/hsa/drafts/campaigns
 */
describe.skip('SponsoredBrandsDraftsOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_drafts_operation_1.SponsoredBrandsDraftsOperation);
    const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'];
    const URL = 'https://www.google.com';
    const DRAFT_CAMPAIGN_ID = 123;
    const DRAFT_CAMPAIGN_NAME = 'Draft Campaign 1';
    describe('listDraftCampaigns', () => {
        it(`should return an array draft campaigns filtered by specified criteria`, async () => {
            const params = {
                startIndex: 1,
                count: 10,
                name: DRAFT_CAMPAIGN_NAME,
            };
            const [res] = await operation.listDraftCampaigns(params);
            expect(res.name).toEqual(DRAFT_CAMPAIGN_NAME);
        });
    });
    describe('createDraftCampaigns', () => {
        it(`should create one or more draft campaigns`, async () => {
            const params = [
                {
                    name: DRAFT_CAMPAIGN_NAME,
                    budget: 1,
                    budgetType: 'lifetime',
                    startDate: '20201001',
                    endDate: '20201031',
                    bidOptimization: true,
                    bidMultiplier: 0,
                    portfolioId: 0,
                    creative: {
                        brandName: 'string',
                        brandLogoAssetID: 'string',
                        brandLogoUrl: URL,
                        headline: 'string',
                        asins: ASINS,
                        shouldOptimizeAsins: false,
                    },
                    landingPage: {
                        asins: ASINS,
                        url: URL,
                    },
                    keywords: [
                        {
                            keywordText: 'string1',
                            matchType: 'broad',
                            bid: 1,
                        },
                    ],
                    negativeKeywords: [
                        {
                            keywordText: 'string2',
                            matchType: 'negativeExact',
                        },
                    ],
                },
            ];
            const res = await operation.createDraftCampaigns(params);
            expect(res).toHaveProperty('draftCampaignId');
        });
    });
    describe('updateDraftCampaigns', () => {
        it(`should update draft campaigns with updated values`, async () => {
            const params = [
                {
                    draftCampaignId: DRAFT_CAMPAIGN_ID,
                    name: DRAFT_CAMPAIGN_NAME,
                    budget: 1,
                    budgetType: 'lifetime',
                    startDate: '20201001',
                    endDate: '20201031',
                    bidOptimization: true,
                    bidMultiplier: 0,
                    portfolioId: 0,
                    creative: {
                        brandName: 'string',
                        brandLogoAssetID: 'string',
                        brandLogoUrl: URL,
                        headline: 'string',
                        asins: ASINS,
                        shouldOptimizeAsins: false,
                    },
                    landingPage: {
                        asins: ASINS,
                        url: URL,
                    },
                    keywords: [
                        {
                            keywordText: 'string1',
                            matchType: 'broad',
                            bid: 1,
                        },
                    ],
                    negativeKeywords: [
                        {
                            keywordText: 'string2',
                            matchType: 'negativeExact',
                        },
                    ],
                },
            ];
            const [res] = await operation.updateDraftCampaigns(params);
            expect(res).toHaveProperty('draftCampaignId');
            expect(res.draftCampaignId).toEqual(DRAFT_CAMPAIGN_ID);
        });
    });
    describe('getDraftCampaign', () => {
        it(`should return a draft campaign specified by identifier`, async () => {
            const res = await operation.getDraftCampaign(DRAFT_CAMPAIGN_ID);
            expect(res).toHaveProperty('draftCampaignId');
            expect(res.draftCampaignId).toEqual(DRAFT_CAMPAIGN_ID);
        });
    });
    describe('archiveDraftCampaign', () => {
        it(`should archive a draft campaign specified by identifier`, async () => {
            const res = await operation.archiveDraftCampaign(DRAFT_CAMPAIGN_ID);
            expect(res).toHaveProperty('draftCampaignId');
            expect(res.draftCampaignId).toEqual(DRAFT_CAMPAIGN_ID);
        });
    });
    describe('submitDraftCampaigns', () => {
        it(`should submit one or more existing draft campaigns to the moderation approval queue`, async () => {
            const params = [DRAFT_CAMPAIGN_ID];
            const [res] = await operation.submitDraftCampaigns(params);
            expect(res).toHaveProperty('draftCampaignId');
            expect(res.draftCampaignId).toEqual(DRAFT_CAMPAIGN_ID);
        });
    });
});
//# sourceMappingURL=sponsored-brands-drafts-operation.test.js.map