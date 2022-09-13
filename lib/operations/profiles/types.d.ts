import * as t from 'io-ts';
export declare const ProfileId: t.NumberC;
export declare type ProfileId = t.TypeOf<typeof ProfileId>;
export declare const ProfileResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the profile that was updated, if successful.
     */
    profileId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.StringC;
}>, t.PartialC<{
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.StringC;
}>]>;
export declare type ProfileResponse = t.TypeOf<typeof ProfileResponse>;
/**
 * The type of account being called
 */
export declare const AccountInfoType: t.UnionC<[t.LiteralC<"seller">, t.LiteralC<"vendor">, t.LiteralC<"agency">]>;
export declare type AccountInfoType = t.TypeOf<typeof AccountInfoType>;
/**
 * The account subtype.
 */
export declare const AccountInfoSubType: t.UnionC<[t.LiteralC<"KDP_AUTHOR">, t.LiteralC<"AMAZON_ATTRIBUTION">]>;
export declare type AccountInfoSubType = t.TypeOf<typeof AccountInfoSubType>;
export declare const AccountInfo: t.IntersectionC<[t.TypeC<{
    /**
     * The string identifier for the marketplace associated with this profile.
     * This is the same identifier used by MWS
     */
    marketplaceStringId: t.StringC;
    /**
     * The string identifier for the ID associated with this account.
     */
    id: t.StringC;
    /**
     * The type of account being called.
     */
    type: t.UnionC<[t.LiteralC<"seller">, t.LiteralC<"vendor">, t.LiteralC<"agency">]>;
}>, t.PartialC<{
    /**
     * The string identifier for the account name.
     */
    name: t.StringC;
    /**
     * The account subtype.
     */
    subType: t.UnionC<[t.LiteralC<"KDP_AUTHOR">, t.LiteralC<"AMAZON_ATTRIBUTION">]>;
}>]>;
export declare type AccountInfo = t.TypeOf<typeof AccountInfo>;
export declare const Profile: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the profile.
     */
    profileId: t.NumberC;
    /**
     * The country code identifying the publisher(s) on which ads will run.
     */
    countryCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCountryCode>;
    /**
     * The currency used for all monetary values for entities under this profile.
     */
    currencyCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCurrency>;
    /**
     * The tz database time zone used for all date-based campaign management and reporting.
     */
    timezone: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingTimeZone>;
    /**
     * Account info.
     */
    accountInfo: t.IntersectionC<[t.TypeC<{
        /**
         * The string identifier for the marketplace associated with this profile.
         * This is the same identifier used by MWS
         */
        marketplaceStringId: t.StringC;
        /**
         * The string identifier for the ID associated with this account.
         */
        id: t.StringC;
        /**
         * The type of account being called.
         */
        type: t.UnionC<[t.LiteralC<"seller">, t.LiteralC<"vendor">, t.LiteralC<"agency">]>;
    }>, t.PartialC<{
        /**
         * The string identifier for the account name.
         */
        name: t.StringC;
        /**
         * The account subtype.
         */
        subType: t.UnionC<[t.LiteralC<"KDP_AUTHOR">, t.LiteralC<"AMAZON_ATTRIBUTION">]>;
    }>]>;
}>, t.PartialC<{
    /**
     * The optional budget shared by all entities created under this profile.
     * TODO: setup a check for minimums.
     */
    dailyBudget: t.NumberC;
}>]>;
export declare type Profile = t.TypeOf<typeof Profile>;
/**
 * Registers a brand in sandbox. If this call is made to a production endpoint you will receive an error.
 */
export declare const RegisterBrand: t.ExactC<t.TypeC<{
    /**
     * The country in which you wish to register the profile. Can be one of: US, CA, UK, DE, FR, IT, ES, JP, AU
     */
    countryCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCountryCode>;
    /**
     * REQUIRED. Brand name.
     */
    brand: t.StringC;
}>>;
export declare type RegisterBrand = t.TypeOf<typeof RegisterBrand>;
/**
 * TODO: The docs don't mention them. Need check on API
 */
export declare const ProfileRegistrationResponse: t.ExactC<t.TypeC<{
    profileId: t.NumberC;
    code: t.StringC;
    description: t.StringC;
}>>;
export declare type ProfileRegistrationResponse = t.TypeOf<typeof ProfileRegistrationResponse>;
export declare const RegisterProfileResponseStatus: t.UnionC<[t.LiteralC<"IN_PROGRESS">, t.LiteralC<"SUCCESS">]>;
export declare type RegisterProfileResponseStatus = t.TypeOf<typeof RegisterProfileResponseStatus>;
export declare const RegisterProfileResponse: t.IntersectionC<[t.TypeC<{
    status: t.UnionC<[t.LiteralC<"IN_PROGRESS">, t.LiteralC<"SUCCESS">]>;
    statusDetails: t.StringC;
}>, t.PartialC<{
    profileId: t.NumberC;
}>]>;
export declare type RegisterProfileResponse = t.TypeOf<typeof RegisterProfileResponse>;
export declare const Brand: t.ExactC<t.TypeC<{
    /**
     * The Brand identifier.
     */
    brandId: t.StringC;
    /**
     * The Brand entity identifier.
     */
    brandEntityId: t.StringC;
    /**
     * The Brand name.
     */
    brandRegistryName: t.StringC;
}>>;
export declare type Brand = t.TypeOf<typeof Brand>;
