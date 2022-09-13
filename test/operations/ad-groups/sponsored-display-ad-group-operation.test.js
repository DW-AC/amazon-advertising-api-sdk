"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_display_ad_group_operation_1 = require("../../../src/operations/ad-groups/sponsored-display-ad-group-operation");
const src_1 = require("../../../src");
const http_client_factory_1 = require("../../http-client-factory");
describe('SponsoredDisplayAdGroupOperation', () => {
    const client = new src_1.HttpClient(http_client_factory_1.SANDBOX_URI, { ...http_client_factory_1.auth, scope: 2973802954634317 }, true);
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_display_ad_group_operation_1.SponsoredDisplayAdGroupOperation);
    const CAMPAIGN_ID = 169989740510339;
    const AD_GROUP_ID = 83691965128172;
    const DEFAULT_BID = 1;
    const STATE = 'paused';
    describe('getAdGroup', () => {
        it(`should return a single adgroup`, async () => {
            const res = await operation.getAdGroup(AD_GROUP_ID);
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
        });
    });
    describe('getAdGroupExtended', () => {
        it('should get an extended ad group', async () => {
            const res = await operation.getAdGroupExtended(AD_GROUP_ID);
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
        });
    });
    describe('createAdGroups', () => {
        it('should create an ad group', async () => {
            const [res] = await operation.createAdGroups([
                {
                    name: 'test sd ad group 2020/08/18 22:22',
                    state: STATE,
                    defaultBid: DEFAULT_BID,
                    campaignId: CAMPAIGN_ID,
                },
            ]);
            expect(res.code).toBe('SUCCESS');
        });
    });
    describe('updateAdGroups', () => {
        it('should update a list of ad groups', async () => {
            const [res] = await operation.updateAdGroups([
                {
                    adGroupId: AD_GROUP_ID,
                    name: 'test sd ad group 2020/08/17 21:00',
                    state: STATE,
                    defaultBid: DEFAULT_BID,
                },
            ]);
            expect(res.code).toBe('SUCCESS');
            expect(res.adGroupId).toBe(AD_GROUP_ID);
        });
    });
    describe('listAdGroups', () => {
        it('should return a list of ad groups', async () => {
            const [res] = await operation.listAdGroups();
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
            expect(res.defaultBid).toEqual(DEFAULT_BID);
            expect(res.state).toBe(STATE);
        });
        it('should accept params', async () => {
            const [res] = await operation.listAdGroups({
                adGroupIdFilter: [AD_GROUP_ID],
                campaignIdFilter: [CAMPAIGN_ID],
                count: 1,
                stateFilter: [STATE],
            });
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
            expect(res.defaultBid).toEqual(DEFAULT_BID);
            expect(res.state).toBe(STATE);
        });
    });
    describe('listAdGroupsExtended', () => {
        it('should return a list of extended ad groups', async () => {
            const [res] = await operation.listAdGroupsExtended();
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
            expect(res.defaultBid).toEqual(DEFAULT_BID);
            expect(res.state).toBe(STATE);
        });
        it('should accept params', async () => {
            const [res] = await operation.listAdGroupsExtended({
                adGroupIdFilter: [AD_GROUP_ID],
                campaignIdFilter: [CAMPAIGN_ID],
                count: 1,
                stateFilter: [STATE],
            });
            expect(res.campaignId).toBe(CAMPAIGN_ID);
            expect(res.adGroupId).toBe(AD_GROUP_ID);
            expect(res.defaultBid).toEqual(DEFAULT_BID);
            expect(res.state).toBe(STATE);
        });
    });
    describe('archiveAdGroup', () => {
        it('should archive the ad group', async () => {
            const res = await operation.archiveAdGroup(AD_GROUP_ID);
            expect(res.code).toBe('SUCCESS');
            expect(res.adGroupId).toBe(AD_GROUP_ID);
        });
    });
});
//# sourceMappingURL=sponsored-display-ad-group-operation.test.js.map