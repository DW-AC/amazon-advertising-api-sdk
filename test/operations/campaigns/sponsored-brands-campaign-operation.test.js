"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_brands_campaign_operation_1 = require("../../../src/operations/campaigns/sponsored-brands-campaign-operation");
const http_client_factory_1 = require("../../http-client-factory");
describe('SponsoredBrandsCampaignOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const campaignOperation = operationProvider.create(sponsored_brands_campaign_operation_1.SponsoredBrandsCampaignOperation);
    const CAMPAIGN_ID = 31299234922913;
    describe('listCampaigns', () => {
        it(`should return an array of campaigns`, async () => {
            const res = await campaignOperation.listCampaigns();
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    // Skip: Sponsored brand campaign list is empty
    describe.skip('getCampaign', () => {
        it(`should return a single campaign`, async () => {
            const res = await campaignOperation.getCampaign(CAMPAIGN_ID);
            expect(res).toBeTruthy();
        });
    });
    // Return an error: No resource method found for POST, return 405 with Allow header
    describe.skip('createCampaigns', () => {
        it(`should create a campaign`, async () => {
            const res = await campaignOperation.createCampaigns([
                {
                    name: 'test campaign 4',
                    targetingType: 'manual',
                    state: 'enabled',
                    dailyBudget: 1,
                    startDate: '20190301',
                },
            ]);
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    // Skip: Sponsored brand campaign list is empty
    describe.skip('archiveCampaign', () => {
        it(`should set the campaign to archived state`, async () => {
            const ARCHIVED_CAMPAIGN_ID = 60376914769424;
            const res = await campaignOperation.archiveCampaign(ARCHIVED_CAMPAIGN_ID);
            expect(res.code).toBe('SUCCESS');
            const campaign = await campaignOperation.getCampaign(ARCHIVED_CAMPAIGN_ID);
            expect(campaign.state).toBe('archived');
        });
    });
});
//# sourceMappingURL=sponsored-brands-campaign-operation.test.js.map