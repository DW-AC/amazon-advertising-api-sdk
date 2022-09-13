"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
const sponsored_products_negative_targeting_operation_1 = require("../../../src/operations/negative-targeting/sponsored-products-negative-targeting-operation");
describe('SponsoredProductsNegativeTargetingOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_products_negative_targeting_operation_1.SponsoredProductsNegativeTargetingOperation);
    const CAMPAIGN_ID = 164069484151709;
    const AD_GROUP_ID = 202694745498469;
    const NEGATIVE_TARGET_ID = 160145133562783;
    const ASIN = 'B07663Z46Z';
    describe('createNegativeTargetingClauses', () => {
        it(`should create one or more negative targeting clauses at the campaign level`, async () => {
            const params = [
                {
                    campaignId: CAMPAIGN_ID,
                    adGroupId: AD_GROUP_ID,
                    state: 'paused',
                    expression: [
                        {
                            type: 'asinSameAs',
                            value: ASIN,
                        },
                    ],
                    expressionType: 'manual',
                },
            ];
            const [res] = await operation.createNegativeTargetingClauses(params);
            expect(res.code).toBe('SUCCESS');
        });
    });
    describe('getNegativeTargetingClause', () => {
        it(`should retrieve a negative targeting clause with a specific target ID`, async () => {
            const res = await operation.getNegativeTargetingClause(NEGATIVE_TARGET_ID);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.targetId).toEqual(NEGATIVE_TARGET_ID);
        });
    });
    describe('getNegativeTargetingClauseExtended', () => {
        it(`should retrieve a negative targeting clause with additional attributes using a specific target ID`, async () => {
            const res = await operation.getNegativeTargetingClauseExtended(NEGATIVE_TARGET_ID);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.targetId).toEqual(NEGATIVE_TARGET_ID);
        });
    });
    describe('listNegativeTargetingClauses', () => {
        it(`should retrieve a list of negative targeting clauses`, async () => {
            const [res] = await operation.listNegativeTargetingClauses();
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
        });
        it(`should retrieve a list of negative targeting clauses satisfying optional criteria`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                campaignIdFilter: [CAMPAIGN_ID],
                adGroupIdFilter: [AD_GROUP_ID],
                targetIdFilter: [NEGATIVE_TARGET_ID],
            };
            const [res] = await operation.listNegativeTargetingClauses(params);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.targetId).toEqual(NEGATIVE_TARGET_ID);
        });
    });
    describe('listNegativeTargetingClausesExtended', () => {
        it(`should retrieve a list of negative targeting clauses with additional attributes`, async () => {
            const [res] = await operation.listNegativeTargetingClausesExtended();
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
        });
        it(`should retrieve a list of negative targeting clauses with additional attributes satisfying optional criteria`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                campaignIdFilter: [CAMPAIGN_ID],
                adGroupIdFilter: [AD_GROUP_ID],
                targetIdFilter: [NEGATIVE_TARGET_ID],
            };
            const [res] = await operation.listNegativeTargetingClausesExtended(params);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.targetId).toEqual(NEGATIVE_TARGET_ID);
        });
    });
    describe('updateNegativeTargetingClauses', () => {
        it(`should updates one or more negative targeting clauses`, async () => {
            const params = [
                {
                    campaignId: CAMPAIGN_ID,
                    adGroupId: AD_GROUP_ID,
                    targetId: NEGATIVE_TARGET_ID,
                    state: 'archived',
                    expression: [
                        {
                            type: 'asinSameAs',
                            value: ASIN,
                        },
                    ],
                    expressionType: 'manual',
                },
            ];
            const [res] = await operation.updateNegativeTargetingClauses(params);
            expect(res.code).toBe('SUCCESS');
            expect(res.targetId).toBe(NEGATIVE_TARGET_ID);
        });
    });
    describe('archiveNegativeTargetingClause', () => {
        it(`should archive negative targeting clauses`, async () => {
            const res = await operation.archiveNegativeTargetingClause(NEGATIVE_TARGET_ID);
            expect(res.code).toBe('SUCCESS');
            expect(res.targetId).toBe(NEGATIVE_TARGET_ID);
        });
    });
});
//# sourceMappingURL=sponsored-products-negative-targeting-operation.test.js.map