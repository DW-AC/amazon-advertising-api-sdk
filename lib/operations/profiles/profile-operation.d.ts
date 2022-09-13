import { Operation } from '../operation';
import { Profile, ProfileId, RegisterBrand } from './types';
import { AmazonMarketplaceAdvertisingCountryCodeType } from '../commons/types';
import { AmazonMarketplaceAdvertisingCountryCode } from '@scaleleap/amazon-marketplaces';
export declare class ProfileOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves one or more profiles associated with the authorization passed in the request header.
     *
     * @returns
     */
    listProfiles(): Promise<({
        profileId: number;
        countryCode: AmazonMarketplaceAdvertisingCountryCode;
        currencyCode: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency;
        timezone: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingTimeZone;
        accountInfo: {
            marketplaceStringId: string;
            id: string;
            type: "seller" | "vendor" | "agency";
        } & {
            name?: string | undefined;
            subType?: "KDP_AUTHOR" | "AMAZON_ATTRIBUTION" | undefined;
        };
    } & {
        dailyBudget?: number | undefined;
    })[]>;
    /**
     * Retrieves a single profile specified by identifier.
     *
     * @param profileId -
     * @returns
     */
    getProfile(profileId: ProfileId): Promise<{
        profileId: number;
        countryCode: AmazonMarketplaceAdvertisingCountryCode;
        currencyCode: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency;
        timezone: import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingTimeZone;
        accountInfo: {
            marketplaceStringId: string;
            id: string;
            type: "seller" | "vendor" | "agency";
        } & {
            name?: string | undefined;
            subType?: "KDP_AUTHOR" | "AMAZON_ATTRIBUTION" | undefined;
        };
    } & {
        dailyBudget?: number | undefined;
    }>;
    /**
     * Updates one or more profiles.
     *
     * @param profiles -
     * @returns
     */
    updateProfiles(profiles: Partial<Profile>[]): Promise<({
        profileId: number;
        code: string;
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Registers a profile in the sandbox environment.
     * If this call is made to a production endpoint an error is returned.
     *
     * @param countryCode -
     * @returns
     */
    registerProfile(countryCode?: AmazonMarketplaceAdvertisingCountryCodeType): Promise<{
        status: "SUCCESS" | "IN_PROGRESS";
        statusDetails: string;
    } & {
        profileId?: number | undefined;
    }>;
    /**
     * Registers a brand in the sandbox environment. If this call is made to a production endpoint an error is returned.
     *
     * @param registerBrand -
     * @returns
     */
    registerBrand(registerBrand: RegisterBrand): Promise<{
        profileId: number;
        code: string;
        description: string;
    }>;
    /**
     * Gets an array of Brand data objects for the Brand associated with the profile ID passed in the header.
     * For more information about Brands, see Brand Services.
     *
     * @returns
     */
    getBrands(): Promise<{
        brandId: string;
        brandEntityId: string;
        brandRegistryName: string;
    }[]>;
}
