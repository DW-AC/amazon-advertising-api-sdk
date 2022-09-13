import { Operation } from '../operation';
import { RequestId, CreateAccount } from './types';
export declare class TestAccountOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves one or more testAccounts associated with the authorization passed in the request header.
     *
     * @returns
     */
    listTestAccounts(): Promise<{
        countryCode: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCountryCode;
        asins: string[];
        accountType: "AUTHOR" | "VENDOR";
        id: string;
        status: "IN_PROGRESS" | "COMPLETED" | "FAILED";
    }[]>;
    /**
     * Retrieves a single account specified by identifier.
     *
     * @param requestId -
     * @returns
     */
    getTestAccount(requestId: RequestId): Promise<{
        countryCode: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCountryCode;
        asins: string[];
        accountType: "AUTHOR" | "VENDOR";
        id: string;
        status: "IN_PROGRESS" | "COMPLETED" | "FAILED";
    }>;
    /**
     * Create a test account
     * @param createAccount
     * @returns
     */
    createTestAccount(createAccount: CreateAccount): Promise<{
        requestId: string;
    }>;
}
