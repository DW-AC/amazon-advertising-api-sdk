"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const testAccountOperation = auth_1.amazonAdvertising.testAccount;
const REQUEST_ID = 'VMTZD2V14R745AHA5C4S';
// Retrieves a single testAccount specified by identifier.
testAccountOperation.getTestAccount(REQUEST_ID);
// Retrieves one or more testAccounts associated with the authorization passed in the request header.
testAccountOperation.listTestAccounts();
// Registers a brand in the sandbox environment.
const createTestAccount = {
    countryCode: amazon_marketplaces_1.AmazonMarketplaceAdvertisingCountryCode.IT,
    accountType: 'VENDOR',
    accountMetaData: {
        vendorCode: 'ABCDE',
    },
};
testAccountOperation.createTestAccount(createTestAccount);
//# sourceMappingURL=crud-test-account.js.map