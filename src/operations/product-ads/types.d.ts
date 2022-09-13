import * as t from 'io-ts';
export declare const AdId: t.NumberC;
export declare type AdId = t.TypeOf<typeof AdId>;
export declare const AdIds: t.ArrayC<t.NumberC>;
export declare type AdIds = t.TypeOf<typeof AdIds>;
export declare const ProductAdState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type ProductAdState = t.TypeOf<typeof ProductAdState>;
export declare const ProductAdServingStatus: t.UnionC<[t.LiteralC<"AD_ARCHIVED">, t.LiteralC<"AD_PAUSED">, t.LiteralC<"AD_STATUS_LIVE">, t.LiteralC<"AD_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"MISSING_DECORATION">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"NOT_BUYABLE">]>;
export declare type ProductAdServingStatus = t.TypeOf<typeof ProductAdServingStatus>;
export declare const ProductAd: t.UnionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the product ad
     */
    adId: t.NumberC;
    /**
     * The ID of the campaign to which this product ad belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this product ad belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the product ad.
     * Value of state for asin can only be enabled or paused, archived state not available.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    /**
     * The SKU for the listed product to be advertised.
     * Either this or the asin must be present. Used by sellers.
     */
    sku: t.StringC;
}>>]>, t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the product ad
     */
    adId: t.NumberC;
    /**
     * The ID of the campaign to which this product ad belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this product ad belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the product ad.
     * Value of state for asin can only be enabled or paused, archived state not available.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    /**
     * The ASIN for the listed product to be advertised.
     * Either this or the sku must be present. Used by vendors.
     */
    asin: t.StringC;
}>>]>]>;
export declare type ProductAd = t.TypeOf<typeof ProductAd>;
export declare const ProductAdExtended: t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the product ad
     */
    adId: t.NumberC;
    /**
     * The ID of the campaign to which this product ad belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this product ad belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the product ad.
     * Value of state for asin can only be enabled or paused, archived state not available.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    /**
     * The SKU for the listed product to be advertised.
     * Either this or the asin must be present. Used by sellers.
     */
    sku: t.StringC;
}>>]>, t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the product ad
     */
    adId: t.NumberC;
    /**
     * The ID of the campaign to which this product ad belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this product ad belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the product ad.
     * Value of state for asin can only be enabled or paused, archived state not available.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    /**
     * The ASIN for the listed product to be advertised.
     * Either this or the sku must be present. Used by vendors.
     */
    asin: t.StringC;
}>>]>]>, t.ExactC<t.TypeC<{
    /**
     * The date the ad group was created as epoch time in milliseconds.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the ad group was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: t.UnionC<[t.LiteralC<"AD_ARCHIVED">, t.LiteralC<"AD_PAUSED">, t.LiteralC<"AD_STATUS_LIVE">, t.LiteralC<"AD_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"MISSING_DECORATION">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"NOT_BUYABLE">]>;
}>>]>;
export declare type ProductAdExtended = t.TypeOf<typeof ProductAdExtended>;
export declare const AdResponse: t.PartialC<{
    /**
     * The ID of the ad that was created/updated, if successful
     */
    adId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.StringC;
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.StringC;
}>;
export declare type AdResponse = t.TypeOf<typeof AdResponse>;
export declare const CreateProductAdsParamsSeller: t.IntersectionC<[t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    sku: t.StringC;
}>>]>;
export declare type CreateProductAdsParamsSeller = t.TypeOf<typeof CreateProductAdsParamsSeller>;
export declare const CreateProductAdsParamsVendor: t.IntersectionC<[t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    asin: t.StringC;
}>>]>;
export declare type CreateProductAdsParamsVendor = t.TypeOf<typeof CreateProductAdsParamsVendor>;
export declare type CreateProductAdsParams = CreateProductAdsParamsVendor | CreateProductAdsParamsSeller;
export declare const UpdateProductAdsParams: t.ExactC<t.TypeC<{
    adId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>;
export declare type UpdateProductAdsParams = t.TypeOf<typeof UpdateProductAdsParams>;
export declare const ListProductAdsParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Optional. Restricts results to ads within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to ads within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to ads with the specified product ad Id specified in comma-separated list.
     */
    adIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to ads with state within the specified comma-separated list.
     * Must be one of: enabled, paused, archived. Default behavior is to include all.
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>]>;
export declare type ListProductAdsParams = t.TypeOf<typeof ListProductAdsParams>;
