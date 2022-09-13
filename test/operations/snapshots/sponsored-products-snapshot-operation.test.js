"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_products_snapshot_operation_1 = require("../../../src/operations/snapshots/sponsored-products-snapshot-operation");
const http_client_factory_1 = require("../../http-client-factory");
describe('SponsoredProductsSnapshotOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_products_snapshot_operation_1.SponsoredProductsSnapshotOperation);
    describe('downloadSnapshot', () => {
        it(`should return a snapshot uncompressed`, async () => {
            const param = {
                snapshotId: 'amzn1.clicksAPI.v1.p1.5E820B56.b56140e7-dae5-4188-b8d6-001bb9845843',
                status: 'SUCCESS',
                statusDetails: 'Snapshot has been successfully generated.',
                location: 'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E820B56.b56140e7-dae5-4188-b8d6-001bb9845843/download',
                fileSize: 148,
                expiration: new Date(),
            };
            const [res] = await operation.downloadSnapshot(param);
            expect(res.adGroupId).toEqual(149522344269714);
            expect(res.campaignId).toEqual(164069484151709);
            expect(res.keywordId).toEqual(239748696088896);
            expect(res.keywordText).toEqual('Apple');
            expect(res.matchType).toEqual('broad');
            expect(res.state).toEqual('paused');
        });
    });
    describe('requestSnapshot', () => {
        it(`should return a snapshot report for all entities of a single record type`, async () => {
            const res = await operation.requestSnapshot('campaigns', {});
            expect(res.status).toEqual('IN_PROGRESS');
        });
        it(`should return a snapshot report for all entities of a single record type with additional attributes satisfying optional criteria`, async () => {
            const res = await operation.requestSnapshot('adGroups', {
                stateFilter: 'archived',
            });
            expect(res.status).toEqual('IN_PROGRESS');
        });
    });
    describe('getSnapshot', () => {
        it(`should return a snapshot with a specific snapshot id`, async () => {
            expect.assertions(4);
            const requestSnapshotResponse = await operation.requestSnapshot('keywords', {});
            const res = await operation.getSnapshot(requestSnapshotResponse.snapshotId);
            expect(res.snapshotId).toBe(requestSnapshotResponse.snapshotId);
            if (res.status == 'SUCCESS') {
                expect(res).toHaveProperty('location');
                expect(res).toHaveProperty('fileSize');
                expect(res).toHaveProperty('statusDetails');
            }
        });
    });
});
//# sourceMappingURL=sponsored-products-snapshot-operation.test.js.map