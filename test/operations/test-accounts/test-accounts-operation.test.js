"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_provider_1 = require("../../../src/operations/operation-provider");
const test_account_operation_1 = require("../../../src/operations/test-accounts/test-account-operation");
const http_client_factory_1 = require("../../http-client-factory");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const test_utils_1 = require("../../test-utils");
jest.setTimeout(15000);
describe.skip('TestAccountOperation', () => {
    const client = (0, http_client_factory_1.httpClientFactory)();
    const operationProvider = new operation_provider_1.OperationProvider(client);
    const accountOperation = operationProvider.create(test_account_operation_1.TestAccountOperation);
    const REQUEST_ID = 'VMTZD2V14R745AHA5C4S';
    describe('listAccounts', () => {
        it(`should return an array of accounts`, async () => {
            const res = await accountOperation.listTestAccounts();
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    describe('getAccount', () => {
        it(`should return a account object`, async () => {
            const account = await accountOperation.getTestAccount(REQUEST_ID);
            expect(account).toBeTruthy();
        });
    });
    describe('createTestAccount', () => {
        it(`should create the test account`, async () => {
            const res = await accountOperation.createTestAccount({
                countryCode: amazon_marketplaces_1.AmazonMarketplaceAdvertisingCountryCode.IT,
                accountType: 'VENDOR',
                accountMetaData: {
                    vendorCode: 'ABCDE',
                },
            });
            expect(res).toBeTruthy();
            expect(res).toHaveLength(1);
            await (0, test_utils_1.delay)();
            const account = await accountOperation.getTestAccount(REQUEST_ID);
            expect(account).toBeTruthy();
        });
    });
});
//# sourceMappingURL=test-accounts-operation.test.js.map