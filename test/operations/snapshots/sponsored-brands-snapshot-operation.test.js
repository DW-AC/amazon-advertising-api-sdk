"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const sponsored_brands_snapshot_operation_1 = require("../../../src/operations/snapshots/sponsored-brands-snapshot-operation");
const http_client_factory_1 = require("../../http-client-factory");
const src_1 = require("../../../src");
jest.setTimeout(15000);
describe('SponsoredBrandsSnapshotOperation', () => {
    const client = new src_1.HttpClient(http_client_factory_1.SANDBOX_URI, { ...http_client_factory_1.auth, scope: 2973802954634317 }, true);
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_snapshot_operation_1.SponsoredBrandsSnapshotOperation);
    /**
     * TODO: Need check again on Production API. Sandbox API return xml response
     * Log: https://github.com/ScaleLeap/amazon-advertising-api-sdk/runs/558316956?check_suite_focus=true
     */
    describe.skip('downloadSnapshot', () => {
        it(`should return a snapshot uncompressed`, async () => {
            const param = {
                snapshotId: 'amzn1.clicksAPI.v1.p1.5E82F8C3.b1095870-c8b5-47c2-b4ef-0c404c3e4fc9',
                status: 'SUCCESS',
                statusDetails: 'Snapshot has been successfully generated.',
                location: 'https://advertising-api-test.amazon.com/v1/snapshots/amzn1.clicksAPI.v1.p1.5E82F8C3.b1095870-c8b5-47c2-b4ef-0c404c3e4fc9/download',
                fileSize: 148,
                expiration: new Date(),
            };
            const [res] = await operation.downloadSnapshot(param);
            expect(res).toHaveProperty('campaignId');
        });
    });
    describe('requestSnapshot', () => {
        it(`should return a snapshot report for all entities of a single record type`, async () => {
            const res = await operation.requestSnapshot('campaigns', {});
            expect(res.status).toBe('IN_PROGRESS');
        });
        it(`should return a snapshot report for all entities of a single record type with additional attributes satisfying optional criteria`, async () => {
            const res = await operation.requestSnapshot('keywords', {
                stateFilter: 'archived',
            });
            expect(res.status).toBe('IN_PROGRESS');
        });
    });
    describe('getSnapshot', () => {
        it(`should return a snapshot with a specific snapshot id`, async () => {
            const requestSnapshotResponse = await operation.requestSnapshot('campaigns', {});
            const res = await operation.getSnapshot(requestSnapshotResponse.snapshotId);
            expect(res.snapshotId).toBe(requestSnapshotResponse.snapshotId);
        });
    });
});
//# sourceMappingURL=sponsored-brands-snapshot-operation.test.js.map