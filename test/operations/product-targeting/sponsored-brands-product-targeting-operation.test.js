"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
const sponsored_brands_product_targeting_operation_1 = require("../../../src/operations/product-targeting/sponsored-brands-product-targeting-operation");
/**
 * TODO: Sandbox API returns an error. Need check again on Production API
 * Error message: 'ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/targets'
 */
describe.skip('SponsoredBrandsProductTargetingOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_product_targeting_operation_1.SponsoredBrandsProductTargetingOperation);
    const CAMPAIGN_ID = 164069484151709;
    const AD_GROUP_ID = 202694745498469;
    const TARGET_ID = 256247845256441;
    const BID = 1;
    describe('listTargets', () => {
        it(`should return a list of sb targets filtered by specified criteria`, async () => {
            const params = {
                nextToken: 'string',
                maxResults: 1,
                filters: [
                    {
                        filterType: 'STATE',
                        values: ['PAUSED'],
                    },
                    {
                        filterType: 'CAMPAIGN_ID',
                        values: [CAMPAIGN_ID],
                    },
                    {
                        filterType: 'AD_GROUP_ID',
                        values: [AD_GROUP_ID],
                    },
                ],
            };
            const res = await operation.listTargets(params);
            expect(res).toHaveProperty('nextToken');
        });
    });
    describe('updateTargets', () => {
        it(`should update one or more sb targets`, async () => {
            const params = [
                {
                    targetId: TARGET_ID,
                    adGroupId: AD_GROUP_ID,
                    campaignId: CAMPAIGN_ID,
                    state: 'archived',
                    bid: BID,
                },
            ];
            const res = await operation.updateTargets(params);
            expect(Array.isArray(res.updateTargetErrorResults)).toBeTruthy();
            expect(Array.isArray(res.updateTargetSuccessResults)).toBeTruthy();
        });
    });
    describe('createTargets', () => {
        it(`should create one or more sb targets`, async () => {
            const params = {
                targets: [
                    {
                        adGroupId: AD_GROUP_ID,
                        campaignId: CAMPAIGN_ID,
                        expressions: {
                            type: 'asinBrandSameAs',
                            value: 'Apple',
                        },
                        bid: BID,
                    },
                ],
            };
            const res = await operation.createTargets(params);
            expect(Array.isArray(res.createTargetErrorResults)).toBeTruthy();
            expect(Array.isArray(res.createTargetSuccessResults)).toBeTruthy();
        });
    });
    describe('getTarget', () => {
        it(`should return a sb target specified by identifier`, async () => {
            const res = await operation.getTarget(TARGET_ID);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.targetId).toEqual(TARGET_ID);
        });
    });
    describe('archiveTarget', () => {
        it(`should archive a sb target specified by identifier`, async () => {
            const res = await operation.archiveTarget(TARGET_ID);
            expect(res).toHaveProperty('targetId');
        });
    });
    describe('archiveTarget', () => {
        it(`should archive a sb target specified by identifier`, async () => {
            const params = {
                targetIds: [TARGET_ID],
            };
            const res = await operation.batchGetTargets(params);
            expect(Array.isArray(res.batchGetTargetErrorResults)).toBeTruthy();
            expect(Array.isArray(res.batchGetTargetSuccessResults)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=sponsored-brands-product-targeting-operation.test.js.map