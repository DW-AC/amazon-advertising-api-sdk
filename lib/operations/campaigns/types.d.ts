import * as t from 'io-ts';
/**
 * The ID of the campaign.
 */
export declare const CampaignId: t.NumberC;
export declare type CampaignId = t.TypeOf<typeof CampaignId>;
export declare const CampaignIds: t.ArrayC<t.NumberC>;
export declare type CampaignIds = t.TypeOf<typeof CampaignIds>;
/**
 * The name of the campaign.
 */
export declare const CampaignName: t.StringC;
export declare type CampaignName = t.TypeOf<typeof CampaignName>;
/**
 * Specifies the advertising product managed by this campaign.
 */
export declare const CampaignType: t.UnionC<[t.LiteralC<"sponsoredProducts">, t.UndefinedC]>;
export declare type CampaignType = t.TypeOf<typeof CampaignType>;
/**
 * Differentiates between a keyword-targeted and automatically targeted campaign.
 */
export declare const CampaignTargetingType: t.UnionC<[t.LiteralC<"manual">, t.LiteralC<"auto">]>;
export declare type CampaignTargetingType = t.TypeOf<typeof CampaignTargetingType>;
/**
 * Advertiser-specified state of the campaign.
 */
export declare const CampaignState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type CampaignState = t.TypeOf<typeof CampaignState>;
export declare const CampaignBidding: t.IntersectionC<[t.TypeC<{
    adjustments: t.ArrayC<t.IntersectionC<[t.TypeC<{
        predicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
    }>, t.PartialC<{
        percentage: t.NumberC;
    }>]>>;
}>, t.PartialC<{
    strategy: t.UnionC<[t.LiteralC<"legacyForSales">, t.LiteralC<"autoForSales">, t.LiteralC<"manual">]>;
}>]>;
export declare type CampaignBidding = t.TypeOf<typeof CampaignBidding>;
export declare const Campaign: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.NumberC;
    /**
     * The name of the campaign.
     */
    name: t.StringC;
    /**
     * Specifies the advertising product managed by this campaign.
     */
    campaignType: t.UnionC<[t.LiteralC<"sponsoredProducts">, t.UndefinedC]>;
    /**
     * Differentiates between a keyword-targeted and automatically targeted campaign.
     */
    targetingType: t.UnionC<[t.LiteralC<"manual">, t.LiteralC<"auto">]>;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Daily budget for the campaign.
     */
    dailyBudget: t.NumberC;
    /**
     * The date the campaign will go or went live as YYYYMMDD.
     */
    startDate: t.StringC;
}>>, t.PartialC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * The optional date the campaign will stop running as YYYYMMDD.
     */
    endDate: t.StringC;
    /**
     * When enabled, Amazon will increase the default bid for your ads that are eligible to appear in this placement. See developer notes for more information.
     */
    premiumBidAdjustment: t.BooleanC;
    bidding: t.IntersectionC<[t.TypeC<{
        adjustments: t.ArrayC<t.IntersectionC<[t.TypeC<{
            predicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
        }>, t.PartialC<{
            percentage: t.NumberC;
        }>]>>;
    }>, t.PartialC<{
        strategy: t.UnionC<[t.LiteralC<"legacyForSales">, t.LiteralC<"autoForSales">, t.LiteralC<"manual">]>;
    }>]>;
}>]>;
export declare type Campaign = t.TypeOf<typeof Campaign>;
export declare const SponsoredProductsCampaignCreateParams: t.IntersectionC<[t.TypeC<{
    /**
     * Campaign name limit is 128 characters.
     * Duplicate campaign names are not allowed. Campaigns with zero positive keywords are not allowed.
     */
    name: t.StringC;
    campaignType: t.UnionC<[t.LiteralC<"sponsoredProducts">, t.UndefinedC]>;
    /**
     * Differentiates between a keyword-targeted and automatically targeted campaign.
     */
    targetingType: t.UnionC<[t.LiteralC<"manual">, t.LiteralC<"auto">]>;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Daily budget for the campaign.
     */
    dailyBudget: t.NumberC;
    /**
     * The date the campaign will go or went live as YYYYMMDD.
     */
    startDate: t.StringC;
}>, t.PartialC<{
    bidding: t.IntersectionC<[t.TypeC<{
        adjustments: t.ArrayC<t.IntersectionC<[t.TypeC<{
            predicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
        }>, t.PartialC<{
            percentage: t.NumberC;
        }>]>>;
    }>, t.PartialC<{
        strategy: t.UnionC<[t.LiteralC<"legacyForSales">, t.LiteralC<"autoForSales">, t.LiteralC<"manual">]>;
    }>]>;
}>]>;
export declare type SponsoredProductsCampaignCreateParams = t.TypeOf<typeof SponsoredProductsCampaignCreateParams>;
export declare const SponsoredBrandsCampaignCreateParams: t.ExactC<t.TypeC<{
    /**
     * Campaign name limit is 128 characters.
     * Duplicate campaign names are not allowed. Campaigns with zero positive keywords are not allowed.
     */
    name: t.StringC;
    /**
     * Differentiates between a keyword-targeted and automatically targeted campaign.
     */
    targetingType: t.UnionC<[t.LiteralC<"manual">, t.LiteralC<"auto">]>;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Daily budget for the campaign.
     */
    dailyBudget: t.NumberC;
    /**
     * The date the campaign will go or went live as YYYYMMDD.
     */
    startDate: t.StringC;
}>>;
export declare type SponsoredBrandsCampaignCreateParams = t.TypeOf<typeof SponsoredBrandsCampaignCreateParams>;
export declare const SponsoredProductsCampaignUpdateParams: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.NumberC;
}>, t.PartialC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * Campaign name limit is 128 characters.
     * Duplicate campaign names are not allowed. Campaigns with zero positive keywords are not allowed.
     */
    name: t.StringC;
    /**
     * Advertiser-specified state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Daily budget for the campaign.
     */
    dailyBudget: t.NumberC;
    /**
     * startDate must be today or in the future. Format YYYYMMDD. If startDate is not set, it will be the current date by default.
     */
    startDate: t.StringC;
    /**
     * endDate must be greater than startDate. Format YYYYMMDD.
     * If endDate is not set, campaign will run forever. endDate must be used with startDate. endDate is required for lifetime budget option.
     */
    endDate: t.StringC;
    /**
     * When enabled, Amazon will increase the default bid for your ads that are eligible to appear in this placement. See developer notes for more information.
     */
    premiumBidAdjustment: t.BooleanC;
    bidding: t.IntersectionC<[t.TypeC<{
        adjustments: t.ArrayC<t.IntersectionC<[t.TypeC<{
            predicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
        }>, t.PartialC<{
            percentage: t.NumberC;
        }>]>>;
    }>, t.PartialC<{
        strategy: t.UnionC<[t.LiteralC<"legacyForSales">, t.LiteralC<"autoForSales">, t.LiteralC<"manual">]>;
    }>]>;
}>]>;
export declare type SponsoredProductsCampaignUpdateParams = t.TypeOf<typeof SponsoredProductsCampaignUpdateParams>;
export declare const SponsoredBrandsCampaignUpdateParams: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.NumberC;
}>, t.PartialC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * The Budget of the campaign.
     */
    budget: t.NumberC;
    /**
     * endDate must be greater than startDate. Format YYYYMMDD.
     * If endDate is not set, campaign will run forever. endDate must be used with startDate. endDate is required for lifetime budget option.
     */
    endDate: t.StringC;
    /**
     * Advertiser-specified state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Allow Amazon to automatically optimize bids for placements below top of search.
     */
    bidOptimization: t.BooleanC;
    /**
     * Should only be set when 'bidOptimization' is set to false. Value is a percentage with two decimal places and range is -99 to +99.99. Example: A -30.00 decrease on a $5.00 bid will become $3.00.
     */
    bidMultiplier: t.NumberC;
}>]>;
export declare type SponsoredBrandsCampaignUpdateParams = t.TypeOf<typeof SponsoredBrandsCampaignUpdateParams>;
/**
 * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
 */
export declare const CampaignServingStatus: t.UnionC<[t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_STATUS_ENABLED">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"PENDING_START_DATE">, t.LiteralC<"ENDED">]>;
export declare type CampaignServingStatus = t.TypeOf<typeof CampaignServingStatus>;
export declare const CampaignExtended: t.IntersectionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.NumberC;
    /**
     * The name of the campaign.
     */
    name: t.StringC;
    /**
     * Specifies the advertising product managed by this campaign.
     */
    campaignType: t.UnionC<[t.LiteralC<"sponsoredProducts">, t.UndefinedC]>;
    /**
     * Differentiates between a keyword-targeted and automatically targeted campaign.
     */
    targetingType: t.UnionC<[t.LiteralC<"manual">, t.LiteralC<"auto">]>;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Daily budget for the campaign.
     */
    dailyBudget: t.NumberC;
    /**
     * The date the campaign will go or went live as YYYYMMDD.
     */
    startDate: t.StringC;
}>>, t.PartialC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * The optional date the campaign will stop running as YYYYMMDD.
     */
    endDate: t.StringC;
    /**
     * When enabled, Amazon will increase the default bid for your ads that are eligible to appear in this placement. See developer notes for more information.
     */
    premiumBidAdjustment: t.BooleanC;
    bidding: t.IntersectionC<[t.TypeC<{
        adjustments: t.ArrayC<t.IntersectionC<[t.TypeC<{
            predicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
        }>, t.PartialC<{
            percentage: t.NumberC;
        }>]>>;
    }>, t.PartialC<{
        strategy: t.UnionC<[t.LiteralC<"legacyForSales">, t.LiteralC<"autoForSales">, t.LiteralC<"manual">]>;
    }>]>;
}>]>, t.PartialC<{
    /**
     * Ad placement. Only returned when segment is set to placement.
     */
    placement: t.UnionC<[t.LiteralC<"Top of Search on-Amazon">, t.LiteralC<"Other on-Amazon">]>;
    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: t.UnionC<[t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_STATUS_ENABLED">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"PENDING_START_DATE">, t.LiteralC<"ENDED">]>;
}>]>;
export declare type CampaignExtended = t.TypeOf<typeof CampaignExtended>;
export declare const SponsoredBrandsCampaign: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.ReadonlyC<t.NumberC>;
    /**
     * Campaign name limit is 128 characters.
     * Duplicate campaign names are not allowed. Campaigns with zero positive keywords are not allowed.
     */
    name: t.StringC;
    /**
     * The Budget of the campaign.
     */
    budget: t.NumberC;
    /**
     * Lifetime budget type requires startDate and endDate specified.
     * For most marketplaces, lifetime budget range is 100 to 20,000,000, and daily budget range is 1 to 1,000,000 by default.
     * For JP marketplace, lifetime budget range is 10,000 to 2,000,000,000, and daily budget range is 100 to 21,000,000.
     */
    budgetType: t.UnionC<[t.LiteralC<"lifetime">, t.LiteralC<"daily">]>;
    /**
     * startDate must be today or in the future. Format YYYYMMDD. If startDate is not set, it will be the current date by default.
     */
    startDate: t.StringC;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * asinNotBuyable: associated ASIN cannot be purchased due to eligibility or availability.
     * billingError: billing information needs correction.
     * ended: specified endDate in campaign object has passed.
     * landingPageNotAvailable: associated landing page is not available (e.g. page path no longer exists) or valid (must have 3 valid ASINs on landing page).
     * outOfBudget: campaign has run out of budget.
     * paused: campaign state set to paused by the user.
     * pendingReview: default status after campaign creation, cleared once moderation review has occurred, which completes within 72 hours.
     * ready: the campaign is scheduled for a future date.
     * rejected: moderation denied campaign approval.
     * running: campaign is enabled and serving.
     * scheduled: a transitive state between ready and running, where serving has not begun as child entities move to running state.
     * terminated: campaign is deleted.
     */
    servingStatus: t.ReadonlyC<t.UnionC<[t.LiteralC<"asinNotBuyable">, t.LiteralC<"billingError">, t.LiteralC<"ended">, t.LiteralC<"landingPageNotAvailable">, t.LiteralC<"outOfBudget">, t.LiteralC<"paused">, t.LiteralC<"pendingReview">, t.LiteralC<"ready">, t.LiteralC<"rejected">, t.LiteralC<"running">, t.LiteralC<"scheduled">, t.LiteralC<"terminated">, t.LiteralC<"portfolioEnded">]>>;
    /**
     * Landing page type is required. The presence of other fields depends on the landing page type. This property may not be modified after campaign creation.
     */
    landingPage: t.UnionC<[t.ExactC<t.TypeC<{
        pageType: t.UnionC<[t.LiteralC<"store">, t.LiteralC<"detailPage">]>;
        url: t.StringC;
    }>>, t.UndefinedC]>;
}>, t.PartialC<{
    /**
     * The ID of the portfolio.
     */
    portfolioId: t.NumberC;
    /**
     * endDate must be greater than startDate. Format YYYYMMDD.
     * If endDate is not set, campaign will run forever. endDate must be used with startDate. endDate is required for lifetime budget option.
     */
    endDate: t.StringC;
    /**
     * Required for sellers. brandEntityId is defined in the seller profile. Used in campaign creation and asset registration.
     */
    brandEntityId: t.StringC;
    /**
     * This field can be set when 'bidOptimization' is set to false. Value is a percentage with two decimal places and range is -99.00 to +99.99.
     * Example: A -30.00 decrease on a $5.00 bid will become $3.00.
     */
    bidMultiplier: t.NumberC;
    /**
     * Allow Amazon to automatically optimize bids for placements below top of search.
     * Default to true if not set in campaign creation request.
     */
    bidOptimization: t.BooleanC;
    creative: t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * List of ASINs shown on the creative. Min 0, max 3
         */
        asins: t.ArrayC<t.StringC>;
    }>>, t.PartialC<{
        /**
         * Headline text. Max length 50 characters, except JP market, which is maxlength 35 characters.
         */
        headline: t.StringC;
        /**
         * URL of the hosted image. This is a readOnly field returned in the response.
         */
        brandLogoUrl: t.ReadonlyC<t.StringC>;
        /**
         * Name of brand to be displayed. Max length 30 characters.
         */
        brandName: t.StringC;
        /**
         * Asset ID of brand logo in Store Assets Library.
         * If the campaigns were created in advertising console before Store Assets Library launch, the brandLogoAssetID will not be populated in the API response.
         */
        brandLogoAssetID: t.StringC;
    }>]>;
    keywords: t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The text for the positive or negative keyword. Maximum length is ten words.
         */
        keywordText: t.StringC;
        /**
         * The match type for the positive or negative keyword.
         */
        matchType: t.UnionC<[t.LiteralC<"broad">, t.LiteralC<"exact">, t.LiteralC<"phrase">]>;
    }>>, t.PartialC<{
        /**
         * Market threshold specifics can be found at our external docs page, under Supported Features \> Keyword bid constraints by marketplace.
         * Bid should not be larger than budget.
         */
        bid: t.NumberC;
    }>]>;
}>]>;
export declare type SponsoredBrandsCampaign = t.TypeOf<typeof SponsoredBrandsCampaign>;
export declare const CampaignResponse: t.IntersectionC<[t.TypeC<{
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.StringC;
}>, t.PartialC<{
    /**
     * The ID of the campaign. Available if code is SUCCESS.
     */
    campaignId: t.NumberC;
    /**
     * A human-readable description of the error, if unsuccessful.
     * Ads API inconsistently returns details or description between APIs
     */
    details: t.StringC;
    description: t.StringC;
}>]>;
export declare type CampaignResponse = t.TypeOf<typeof CampaignResponse>;
export declare const SponsoredBrandsCampaignResponse: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The idenifier of the campaign.
     */
    campaignId: t.NumberC;
    adGroupResponses: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The identifier of the ad group.
         */
        adGroupId: t.NumberC;
    }>>, t.ExactC<t.TypeC<{
        code: t.NumberC;
        details: t.StringC;
    }>>]>>;
    keywordResponses: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The identifier of the keyword.
         */
        keywordId: t.NumberC;
    }>>, t.ExactC<t.TypeC<{
        code: t.NumberC;
        details: t.StringC;
    }>>]>>;
}>>, t.ExactC<t.TypeC<{
    code: t.NumberC;
    details: t.StringC;
}>>]>;
export declare type SponsoredBrandsCampaignResponse = t.TypeOf<typeof SponsoredBrandsCampaignResponse>;
export declare const ListCampaignsParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Restricts results to campaigns with state within the specified comma-separated list. Valid states are enabled, paused, or archived.
     * Default behavior is to include enabled and paused. Rejected campaigns will show under “archived” enum.
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Restricts results to campaigns with exactly matching name.
     */
    name: t.StringC;
    /**
     * Restricts results to campaigns with the specified identifier.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListCampaignsParams = t.TypeOf<typeof ListCampaignsParams>;
export declare const SponsoredDisplayCampaign: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.NumberC;
    /**
     * The name of the campaign.
     */
    name: t.StringC;
    /**
     * The advertising tactic associated with the campaign.
     */
    tactic: t.UnionC<[t.LiteralC<"T00001">, t.LiteralC<"T00020">, t.LiteralC<"T00030">, t.LiteralC<"remarketing">]>;
    /**
     * The time period over which the amount specified in the budget property is allocated.
     */
    budgetType: t.LiteralC<"daily">;
    /**
     * The amount of the budget.
     */
    budget: t.NumberC;
    /**
     * The YYYYMMDD start date of the campaign. The date must be today or in the future.
     */
    startDate: t.StringC;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.PartialC<{
    /**
     * The YYYYMMDD end date of the campaign.
     */
    endDate: t.StringC;
    /**
     * The docs don't metion these fields
     */
    costType: t.UnionC<[t.LiteralC<"cpc">, t.LiteralC<"vcpm">]>;
    deliveryProfile: t.LiteralC<"as_soon_as_possible">;
}>]>;
export declare type SponsoredDisplayCampaign = t.TypeOf<typeof SponsoredDisplayCampaign>;
export declare const SponsoredDisplayCampaignExtended: t.IntersectionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign.
     */
    campaignId: t.NumberC;
    /**
     * The name of the campaign.
     */
    name: t.StringC;
    /**
     * The advertising tactic associated with the campaign.
     */
    tactic: t.UnionC<[t.LiteralC<"T00001">, t.LiteralC<"T00020">, t.LiteralC<"T00030">, t.LiteralC<"remarketing">]>;
    /**
     * The time period over which the amount specified in the budget property is allocated.
     */
    budgetType: t.LiteralC<"daily">;
    /**
     * The amount of the budget.
     */
    budget: t.NumberC;
    /**
     * The YYYYMMDD start date of the campaign. The date must be today or in the future.
     */
    startDate: t.StringC;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.PartialC<{
    /**
     * The YYYYMMDD end date of the campaign.
     */
    endDate: t.StringC;
    /**
     * The docs don't metion these fields
     */
    costType: t.UnionC<[t.LiteralC<"cpc">, t.LiteralC<"vcpm">]>;
    deliveryProfile: t.LiteralC<"as_soon_as_possible">;
}>]>, t.PartialC<{
    /**
     * The status of the campaign.
     */
    servingStatus: t.UnionC<[t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_STATUS_ENABLED">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"PENDING_START_DATE">, t.LiteralC<"ENDED">]>;
    /**
     * Epoch date the campaign was created.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * Epoch date of the last update to any property associated with the campaign.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
}>]>;
export declare type SponsoredDisplayCampaignExtended = t.TypeOf<typeof SponsoredDisplayCampaignExtended>;
export declare const SponsoredDisplayCampaignCreateParams: t.IntersectionC<[t.TypeC<{
    /**
     * Campaign name limit is 128 characters.
     * Duplicate campaign names are not allowed. Campaigns with zero positive keywords are not allowed.
     */
    name: t.StringC;
    /**
     * The advertising tactic associated with the campaign.
     */
    tactic: t.UnionC<[t.LiteralC<"T00001">, t.LiteralC<"T00020">, t.LiteralC<"T00030">, t.LiteralC<"remarketing">]>;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The amount of the budget.
     */
    budget: t.NumberC;
    /**
     * The time period over which the amount specified in the budget property is allocated.
     */
    budgetType: t.LiteralC<"daily">;
    /**
     * The date the campaign will go or went live as YYYYMMDD.
     */
    startDate: t.StringC;
}>, t.PartialC<{
    /**
     * The YYYYMMDD end date of the campaign.
     */
    endDate: t.StringC;
}>]>;
export declare type SponsoredDisplayCampaignCreateParams = t.TypeOf<typeof SponsoredDisplayCampaignCreateParams>;
export declare const SponsoredDisplayCampaignUpdateParams: t.IntersectionC<[t.TypeC<{
    /**
     * The identifier of the campaign.
     */
    campaignId: t.NumberC;
}>, t.PartialC<{
    /**
     * The name of the campaign.
     */
    name: t.StringC;
    /**
     * The state of the campaign.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The amount of the budget.
     */
    budget: t.NumberC;
    /**
     * The YYYYMMDD start date of the campaign. The date must be today or in the future.
     */
    startDate: t.StringC;
    /**
     * The YYYYMMDD end date of the campaign.
     */
    endDate: t.StringC;
}>]>;
export declare type SponsoredDisplayCampaignUpdateParams = t.TypeOf<typeof SponsoredDisplayCampaignUpdateParams>;
