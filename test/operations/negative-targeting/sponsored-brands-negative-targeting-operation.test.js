"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
const sponsored_brands_negative_targeting_operation_1 = require("../../../src/operations/negative-targeting/sponsored-brands-negative-targeting-operation");
/**
 * TODO: Sandbox API returns an error. Need check again on Production API
 * Error message: 'ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/targets'
 */
describe.skip('SponsoredBrandsNegativeTargetingOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_negative_targeting_operation_1.SponsoredBrandsNegativeTargetingOperation);
    const CAMPAIGN_ID = 164069484151709;
    const AD_GROUP_ID = 202694745498469;
    const NEGATIVE_TARGET_ID = 256247845256441;
    describe('listNegativeTargets', () => {
        it(`should return a list of sb negative targets filtered by specified criteria`, async () => {
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
            const res = await operation.listNegativeTargets(params);
            expect(res).toHaveProperty('nextToken');
        });
    });
    describe('updateNegativeTargets', () => {
        it(`should update one or more sb negative targets`, async () => {
            const params = {
                negativeTargets: [
                    {
                        targetId: NEGATIVE_TARGET_ID,
                        adGroupId: AD_GROUP_ID,
                        state: 'archived',
                    },
                ],
            };
            const res = await operation.updateNegativeTargets(params);
            expect(Array.isArray(res.updateTargetErrorResults)).toBeTruthy();
            expect(Array.isArray(res.updateTargetSuccessResults)).toBeTruthy();
        });
    });
    describe('createNegativeTargets', () => {
        it(`should create one or more sb negative targets`, async () => {
            const params = {
                negativeTargets: [
                    {
                        adGroupId: AD_GROUP_ID,
                        campaignId: CAMPAIGN_ID,
                        expressions: {
                            type: 'asinBrandSameAs',
                            value: 'Apple',
                        },
                    },
                ],
            };
            const res = await operation.createNegativeTargets(params);
            expect(Array.isArray(res.createTargetErrorResults)).toBeTruthy();
            expect(Array.isArray(res.createTargetSuccessResults)).toBeTruthy();
        });
    });
    describe('getNegativeTarget', () => {
        it(`should return a sb negative target specified by identifier`, async () => {
            const res = await operation.getNegativeTarget(NEGATIVE_TARGET_ID);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.targetId).toEqual(NEGATIVE_TARGET_ID);
        });
    });
    describe('archiveNegativeTarget', () => {
        it(`should archive a sb negative target specified by identifier`, async () => {
            const res = await operation.archiveNegativeTarget(NEGATIVE_TARGET_ID);
            expect(res).toHaveProperty('targetId');
        });
    });
    describe('archiveNegativeTarget', () => {
        it(`should archive a sb negative target specified by identifier`, async () => {
            const params = {
                targetIds: [NEGATIVE_TARGET_ID],
            };
            const res = await operation.batchGetNegativeTargets(params);
            expect(Array.isArray(res.batchGetNegativeTargetErrorResults)).toBeTruthy();
            expect(Array.isArray(res.batchGetNegativeTargetSuccessResults)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=sponsored-brands-negative-targeting-operation.test.js.map