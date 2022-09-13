"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const http_client_factory_1 = require("../../http-client-factory");
const sponsored_display_campaign_operation_1 = require("../../../src/operations/campaigns/sponsored-display-campaign-operation");
const src_1 = require("../../../src");
describe('SponsoredDisplayCampaignOperation', () => {
    const client = new src_1.HttpClient(http_client_factory_1.SANDBOX_URI, { ...http_client_factory_1.auth, scope: 2973802954634317 }, true);
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_display_campaign_operation_1.SponsoredDisplayCampaignOperation);
    const startDate = '20201210';
    const budget = 1;
    const campaignIds = [169989740510339, 108235017529238];
    describe('listCampaigns', () => {
        it(`should return an array of campaigns`, async () => {
            const [res] = await operation.listCampaigns();
            expect(campaignIds).toContain(res.campaignId);
        });
        it(`should return a filtered list of campaigns`, async () => {
            const params = {
                campaignIdFilter: campaignIds,
            };
            const [res] = await operation.listCampaigns(params);
            expect(campaignIds).toContain(res.campaignId);
        });
    });
    describe('listCampaignsExtended', () => {
        it(`should return an array of extended campaigns`, async () => {
            const [res] = await operation.listCampaignsExtended();
            expect(campaignIds).toContain(res.campaignId);
        });
        it(`should return a filtered list of extended campaigns`, async () => {
            const params = {
                campaignIdFilter: campaignIds,
            };
            const [res] = await operation.listCampaignsExtended(params);
            expect(campaignIds).toContain(res.campaignId);
        });
    });
    describe('updateCampaigns', () => {
        const name = 'new name';
        const state = 'paused';
        it(`should update a campaign`, async () => {
            const [res] = await operation.updateCampaigns([
                {
                    campaignId: campaignIds[0],
                    name,
                    state,
                    budget,
                    startDate,
                    endDate: '20201212',
                },
            ]);
            expect(res.campaignId).toBe(campaignIds[0]);
            expect(res.code).toBe('SUCCESS');
        });
    });
    describe('createCampaigns', () => {
        it(`should create a campaign`, async () => {
            const [res] = await operation.createCampaigns([
                {
                    name: 'test sd campaign 2020/08/13 21:42',
                    tactic: 'remarketing',
                    state: 'enabled',
                    budget,
                    budgetType: 'daily',
                    startDate,
                },
            ]);
            expect(res.code).toBe('SUCCESS');
        });
        it(`should create a campaign with optional params`, async () => {
            const [res] = await operation.createCampaigns([
                {
                    name: 'test sd campaign 2020/08/13 21:43',
                    tactic: 'remarketing',
                    state: 'enabled',
                    budget: 1,
                    startDate,
                    budgetType: 'daily',
                    endDate: '20201211',
                },
            ]);
            expect(res.code).toBe('SUCCESS');
        });
    });
    describe('getCampaign', () => {
        it(`should return a single campaign`, async () => {
            const res = await operation.getCampaign(campaignIds[0]);
            expect(res.campaignId).toBe(campaignIds[0]);
        });
    });
    describe('getCampaignExtended', () => {
        it(`should return a single extended campaign`, async () => {
            const res = await operation.getCampaignExtended(campaignIds[0]);
            expect(res.campaignId).toBe(campaignIds[0]);
        });
    });
    describe('archiveCampaign', () => {
        it(`should set the campaign to archived state`, async () => {
            const res = await operation.archiveCampaign(campaignIds[1]);
            expect(res.campaignId).toBe(campaignIds[1]);
            expect(res.code).toBe('SUCCESS');
        });
    });
});
//# sourceMappingURL=sponsored-display-campaign-operation.test.js.map