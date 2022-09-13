"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const http_client_factory_1 = require("../../http-client-factory");
const sponsored_brands_stores_info_operation_1 = require("../../../src/operations/stores/sponsored-brands-stores-info-operation");
jest.setTimeout(15000);
describe('SponsoredBrandsStoresInfoOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_brands_stores_info_operation_1.SponsoredBrandsStoresInfoOperation);
    describe('listStores', () => {
        it(`should retrieve a list of stores for a given advertiser`, async () => {
            const res = await operation.listStores();
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    /**
     * TODO: Need check again on Production API. Sandbox API return an error:
     * ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v1/stores/ENTITY6SICSOL71XVX
     */
    describe.skip('getStore', () => {
        it(`should retrieve a store by brandEntityId`, async () => {
            const BRAND_ENTITY_ID = 'ENTITY6SICSOL71XVX';
            const res = await operation.getStore(BRAND_ENTITY_ID);
            expect(res.code).toBe('SUCCESS');
            expect(res.brandEntityId).toBe(BRAND_ENTITY_ID);
        });
    });
});
//# sourceMappingURL=sponsored-brands-stores-info-operation.test.js.map