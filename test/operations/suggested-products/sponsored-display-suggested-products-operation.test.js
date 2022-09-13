"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const http_client_factory_1 = require("../../http-client-factory");
const sponsored_display_suggested_products_operation_1 = require("../../../src/operations/suggested-products/sponsored-display-suggested-products-operation");
const src_1 = require("../../../src");
describe('SponsoredDisplaySuggestedProductsOperation', () => {
    const client = new src_1.HttpClient(http_client_factory_1.SANDBOX_URI, { ...http_client_factory_1.auth, scope: 2973802954634317 }, true);
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_display_suggested_products_operation_1.SponsoredDisplaySuggestedProductsOperation);
    describe('listSuggestedProducts', () => {
        /**
         * Sandbox API returns empty response. Need check again on Production API.
         */
        it(`should retrieve a list of products filtered by tactic`, async () => {
            const params = {
                tacticFilter: 'remarketing',
            };
            const res = await operation.listSuggestedProducts(params);
            expect(Array.isArray(res)).toBeTruthy();
        });
        /**
         * Sandbox API return error: "Unrecognized readiness status: LOW"
         * Need check again on Production API.
         */
        it.skip(`should retrieve a list of products filtered by tactic and readiness status`, async () => {
            const readinessStatus = 'LOW';
            const params = {
                tacticFilter: 'T00010',
                readinessFilter: readinessStatus,
            };
            const [res] = await operation.listSuggestedProducts(params);
            expect(res.readinessStatus).toBe(readinessStatus);
        });
    });
    describe('getProductReadiness', () => {
        it(`should retrieve the readiness status for a specified list`, async () => {
            const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'];
            const params = {
                asins: ASINS,
                tactic: 'remarketing',
            };
            const [res] = await operation.getProductReadiness(params);
            expect(ASINS).toContain(res.asin);
        });
    });
});
//# sourceMappingURL=sponsored-display-suggested-products-operation.test.js.map