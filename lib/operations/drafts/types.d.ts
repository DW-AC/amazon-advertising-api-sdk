import * as t from 'io-ts';
export declare const SponsoredBrandsDraftCampaignId: t.NumberC;
export declare type SponsoredBrandsDraftCampaignId = t.TypeOf<typeof SponsoredBrandsDraftCampaignId>;
export declare const SponsoredBrandsDraftCampaignName: t.StringC;
export declare type SponsoredBrandsDraftCampaignName = t.TypeOf<typeof SponsoredBrandsDraftCampaignName>;
export declare const BudgetType: t.UnionC<[t.LiteralC<"lifetime">, t.LiteralC<"daily">]>;
export declare type BudgetType = t.TypeOf<typeof BudgetType>;
export declare const SponsoredBrandsListDraftCampaignRequest: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * The returned array only includes draft campaigns with the specified name.
     */
    name: t.StringC;
    /**
     * The returned array includes only draft campaigns with identifiers matching those specified in the comma-delimited string.
     */
    draftCampaignIdFilter: t.NumberC;
    /**
     * The returned array includes only campaigns associated with Portfolio identifiers matching those specified in the comma-delimited string.
     */
    portfolioIdFilter: t.NumberC;
}>]>;
export declare type SponsoredBrandsListDraftCampaignRequest = t.TypeOf<typeof SponsoredBrandsListDraftCampaignRequest>;
export declare const SponsoredBrandsListDraftCampaignResponse: t.IntersectionC<[t.PartialC<{
    /**
     * The brand entity identifier.
     * Note that this field is required for sellers.
     * For more information, see the Stores reference or Brands reference.
     */
    brandEntityId: t.StringC;
    /**
     * The identifier of the draft campaign.
     */
    draftCampaignId: t.NumberC;
}>, t.ExactC<t.TypeC<{
    /**
     * The name of the draft campaign. Maximum 128 characters. Duplicate campaign names are not allowed.
     */
    name: t.StringC;
    /**
     * The budget associated with the draft campaign.
     */
    budget: t.NumberC;
    /**
     * Note that for the lifetime budget type, startDate and endDate must be specified.
     * The lifetime budget range is from 100 to 20,000,000 and daily budget range is 1 to 1,000,000 by default for most marketplaces.
     * For the JP marketplace, the lifetime budget range is fromt 10,000 to 2,000,000,000, and the daily budget range is 100 to 21,000,000.
     */
    budgetType: t.UnionC<[t.LiteralC<"lifetime">, t.LiteralC<"daily">]>;
    /**
     * The YYYYMMDD start date for the campaign.
     * If this field is not set to a value, the current date is used.
     */
    startDate: t.StringC;
    /**
     * The YYYYMMDD end date for the campaign.
     * Must be greater than the value for startDate.
     * If not specified, the campaign has no end date and runs continuously.
     */
    endDate: t.StringC;
    /**
     * Set to true to allow Amazon to automatically optimize bids for placements below top of search.
     */
    bidOptimization: t.BooleanC;
    /**
     * A bid multiplier. Note that this field can only be set when 'bidOptimization' is set to false.
     * Value is a percentage to two decimal places.
     * Example: If set to -30.00 for a $5.00 bid, the resulting bid is $3.00.
     */
    bidMultiplier: t.NumberC;
    /**
     * The identifier of the Portfolio to which the draft campaign is associated.
     */
    portfolioId: t.NumberC;
    creative: t.ExactC<t.TypeC<{
        /**
         * A brand name. Maximum length is 30 characters.
         */
        brandName: t.StringC;
        /**
         * The identifier of the brand logo image from the Store assets library.
         * See listAssets for more information.
         * Note that for campaigns created in the Amazon Advertising console prior to release of the Store assets library, responses will not include a value for the brandLogoAssetID field.
         */
        brandLogoAssetID: t.StringC;
        /**
         * The address of the hosted image.
         */
        brandLogoUrl: t.StringC;
        /**
         * The headline text.
         * Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
         */
        headline: t.StringC;
        /**
         * An array of ASINs associated with the creative.
         */
        asins: t.ArrayC<t.StringC>;
        /**
         * Note that this field is supported only in the US and UK marketplaces.
         * Set to true to have Amazon show other products from your landing page in the advertisement if they are more relevant to the shopper's search.
         * Set to false to use the ASINs specified in the asins field. Do not specify in unsupported marketplaces.
         */
        shouldOptimizeAsins: t.BooleanC;
    }>>;
    landingPage: t.IntersectionC<[t.PartialC<{
        /**
         * An array of ASINs used to generate a simple landing page.
         * The response includes the URL of the generated simple landing page.
         * Do not include this property in the request if the url property is also included, these properties are mutually exclusive.
         */
        asins: t.ArrayC<t.StringC>;
    }>, t.ExactC<t.TypeC<{
        /**
         * URL of a Store page.
         * Vendors may also specify the URL of a custom landing page.
         * If a custom URL is specified, the landing page must include include the ASINs of at least three products that are advertised as part of the campaign.
         * Do not include this property in the request if the asins property is also included, these properties are mutually exclusive.
         */
        url: t.StringC;
    }>>]>;
}>>]>;
export declare type SponsoredBrandsListDraftCampaignResponse = t.TypeOf<typeof SponsoredBrandsListDraftCampaignResponse>;
export declare const SponsoredBrandsDraftCampaign: t.IntersectionC<[t.IntersectionC<[t.PartialC<{
    /**
     * The brand entity identifier.
     * Note that this field is required for sellers.
     * For more information, see the Stores reference or Brands reference.
     */
    brandEntityId: t.StringC;
    /**
     * The identifier of the draft campaign.
     */
    draftCampaignId: t.NumberC;
}>, t.ExactC<t.TypeC<{
    /**
     * The name of the draft campaign. Maximum 128 characters. Duplicate campaign names are not allowed.
     */
    name: t.StringC;
    /**
     * The budget associated with the draft campaign.
     */
    budget: t.NumberC;
    /**
     * Note that for the lifetime budget type, startDate and endDate must be specified.
     * The lifetime budget range is from 100 to 20,000,000 and daily budget range is 1 to 1,000,000 by default for most marketplaces.
     * For the JP marketplace, the lifetime budget range is fromt 10,000 to 2,000,000,000, and the daily budget range is 100 to 21,000,000.
     */
    budgetType: t.UnionC<[t.LiteralC<"lifetime">, t.LiteralC<"daily">]>;
    /**
     * The YYYYMMDD start date for the campaign.
     * If this field is not set to a value, the current date is used.
     */
    startDate: t.StringC;
    /**
     * The YYYYMMDD end date for the campaign.
     * Must be greater than the value for startDate.
     * If not specified, the campaign has no end date and runs continuously.
     */
    endDate: t.StringC;
    /**
     * Set to true to allow Amazon to automatically optimize bids for placements below top of search.
     */
    bidOptimization: t.BooleanC;
    /**
     * A bid multiplier. Note that this field can only be set when 'bidOptimization' is set to false.
     * Value is a percentage to two decimal places.
     * Example: If set to -30.00 for a $5.00 bid, the resulting bid is $3.00.
     */
    bidMultiplier: t.NumberC;
    /**
     * The identifier of the Portfolio to which the draft campaign is associated.
     */
    portfolioId: t.NumberC;
    creative: t.ExactC<t.TypeC<{
        /**
         * A brand name. Maximum length is 30 characters.
         */
        brandName: t.StringC;
        /**
         * The identifier of the brand logo image from the Store assets library.
         * See listAssets for more information.
         * Note that for campaigns created in the Amazon Advertising console prior to release of the Store assets library, responses will not include a value for the brandLogoAssetID field.
         */
        brandLogoAssetID: t.StringC;
        /**
         * The address of the hosted image.
         */
        brandLogoUrl: t.StringC;
        /**
         * The headline text.
         * Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
         */
        headline: t.StringC;
        /**
         * An array of ASINs associated with the creative.
         */
        asins: t.ArrayC<t.StringC>;
        /**
         * Note that this field is supported only in the US and UK marketplaces.
         * Set to true to have Amazon show other products from your landing page in the advertisement if they are more relevant to the shopper's search.
         * Set to false to use the ASINs specified in the asins field. Do not specify in unsupported marketplaces.
         */
        shouldOptimizeAsins: t.BooleanC;
    }>>;
    landingPage: t.IntersectionC<[t.PartialC<{
        /**
         * An array of ASINs used to generate a simple landing page.
         * The response includes the URL of the generated simple landing page.
         * Do not include this property in the request if the url property is also included, these properties are mutually exclusive.
         */
        asins: t.ArrayC<t.StringC>;
    }>, t.ExactC<t.TypeC<{
        /**
         * URL of a Store page.
         * Vendors may also specify the URL of a custom landing page.
         * If a custom URL is specified, the landing page must include include the ASINs of at least three products that are advertised as part of the campaign.
         * Do not include this property in the request if the asins property is also included, these properties are mutually exclusive.
         */
        url: t.StringC;
    }>>]>;
}>>]>, t.ExactC<t.TypeC<{
    /**
     * An array of keywords associated with the draft campaign.
     */
    keywords: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The keyword text. Maximum length is ten words.
         */
        keywordText: t.StringC;
        /**
         * The match type. For more information, see match types in the Amazon Advertising support center.
         */
        matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
        /**
         * The bid associated with the keyword.
         * For information on the maximum allowable bid, see the 'keyword bid constraints by marketplace' section of the 'supported features' document in the 'guides' section. Note that the bid cannot not be larger than the budget associated with the campaign.
         */
        bid: t.NumberC;
    }>>>;
    /**
     * An array of negative keywords associated with the draft campaign.
     * This list must be the complete list of negative keywords for the campaign. If set to null, deletes all existing negative keywords on the draft campaign.
     * If this property is not included in the request, negative keywords are not updated.
     */
    negativeKeywords: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The keyword text. Maximum length is ten words.
         */
        keywordText: t.StringC;
        /**
         * The negative match type.
         * For more information, see negative keyword match types in the Amazon Advertising support center.
         */
        matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
    }>>>;
}>>]>;
export declare type SponsoredBrandsDraftCampaign = t.TypeOf<typeof SponsoredBrandsDraftCampaign>;
export declare const SponsoredBrandsDraftCampaignResponse: t.PartialC<{
    /**
     * The identifier of the draft campaign.
     */
    draftCampaignId: t.NumberC;
    keywordResponses: t.ArrayC<t.IntersectionC<[t.TypeC<{
        keywordId: t.NumberC;
        code: t.StringC;
    }>, t.PartialC<{
        details: t.StringC;
    }>]>>;
    /**
     * The draft campaign response code.
     */
    code: t.StringC;
    /**
     * A human-readable description of the 'code' field value.
     */
    details: t.StringC;
}>;
export declare type SponsoredBrandsDraftCampaignResponse = t.TypeOf<typeof SponsoredBrandsDraftCampaignResponse>;
