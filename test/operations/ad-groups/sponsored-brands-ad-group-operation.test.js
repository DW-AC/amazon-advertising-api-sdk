"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_brands_ad_group_operation_1 = require("../../../src/operations/ad-groups/sponsored-brands-ad-group-operation");
const http_client_factory_1 = require("../../http-client-factory");
describe('SponsoredBrandsAdGroupOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const adGroupOperation = operationProvider.create(sponsored_brands_ad_group_operation_1.SponsoredBrandsAdGroupOperation);
    const CAMPAIGN_ID = 31299234922913;
    const ARCHIVED_AD_GROUP_ID = 138818764235694;
    // Skip: SponsoredBrands Ad Group list is empty
    describe.skip('getAdGroup', () => {
        it(`should return a single adgroup`, async () => {
            const res = await adGroupOperation.getAdGroup(ARCHIVED_AD_GROUP_ID);
            expect(res.adGroupId).toBe(ARCHIVED_AD_GROUP_ID);
            expect(res).toHaveProperty('name');
            expect(res).toHaveProperty('campaignId');
            expect(res).toHaveProperty('defaultBid');
            expect(res.defaultBid).toBeGreaterThan(0.02);
            expect(res.state).toBe('archived');
        });
    });
    describe('listAdGroups', () => {
        it('should return a list of ad groups', async () => {
            const res = await adGroupOperation.listAdGroups();
            expect(Array.isArray(res)).toBeTruthy();
        });
        // Skip: SponsoredBrands Ad Group list is empty
        it.skip('should accept params', async () => {
            const res = await adGroupOperation.listAdGroups({
                adGroupIdFilter: [ARCHIVED_AD_GROUP_ID],
                campaignIdFilter: [CAMPAIGN_ID],
                count: 1,
                stateFilter: ['archived'],
            });
            expect(res).toHaveLength(1);
            expect(res[0].adGroupId).toBe(ARCHIVED_AD_GROUP_ID);
            expect(res[0].campaignId).toBe(CAMPAIGN_ID);
        });
    });
});
//# sourceMappingURL=sponsored-brands-ad-group-operation.test.js.map