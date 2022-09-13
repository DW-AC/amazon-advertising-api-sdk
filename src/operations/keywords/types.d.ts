import * as t from 'io-ts';
export declare const KeywordId: t.NumberC;
export declare type KeywordId = t.TypeOf<typeof KeywordId>;
export declare const KeywordIds: t.ArrayC<t.NumberC>;
export declare type KeywordIds = t.TypeOf<typeof KeywordIds>;
/**
 * Advertiser-specified state of the keyword
 */
export declare const KeywordState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type KeywordState = t.TypeOf<typeof KeywordState>;
/**
 * The match type used to match the keyword to search query
 */
export declare const KeywordMatchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
export declare type KeywordMatchType = t.TypeOf<typeof KeywordMatchType>;
/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export declare const KeywordServingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">]>;
export declare type KeywordServingStatus = t.TypeOf<typeof KeywordServingStatus>;
export declare const KeywordResponseStatus: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
export declare type KeywordResponseStatus = t.TypeOf<typeof KeywordResponseStatus>;
export declare const Keyword: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the keyword
     */
    keywordId: t.NumberC;
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this keyword belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the keyword
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    keywordText: t.StringC;
    /**
     * The match type used to match the keyword to search query
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
}>>, t.PartialC<{
    /**
     * Bid used when ads are sourced using this keyword. Only compatible with biddable match types.
     */
    bid: t.NumberC;
}>]>;
export declare type Keyword = t.TypeOf<typeof Keyword>;
export declare const KeywordExtended: t.IntersectionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the keyword
     */
    keywordId: t.NumberC;
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this keyword belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the keyword
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    keywordText: t.StringC;
    /**
     * The match type used to match the keyword to search query
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
}>>, t.PartialC<{
    /**
     * Bid used when ads are sourced using this keyword. Only compatible with biddable match types.
     */
    bid: t.NumberC;
}>]>, t.ExactC<t.TypeC<{
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
    servingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">]>;
}>>]>;
export declare type KeywordExtended = t.TypeOf<typeof KeywordExtended>;
export declare const KeywordResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
}>, t.PartialC<{
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.StringC;
}>]>;
export declare type KeywordResponse = t.TypeOf<typeof KeywordResponse>;
export declare const CreateKeywordsParam: t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    keywordText: t.StringC;
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>;
export declare type CreateKeywordsParam = t.TypeOf<typeof CreateKeywordsParam>;
export declare const UpdateKeywordsParam: t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    bid: t.NumberC;
}>>;
export declare type UpdateKeywordsParam = t.TypeOf<typeof UpdateKeywordsParam>;
export declare const ListBiddableKeywordsParam: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Must be one of: broad, phrase, exact
     */
    matchTypeFilter: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.StringC;
    /**
     * Optional. Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of: enabled, paused, or archived. Default behavior is to include all.
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListBiddableKeywordsParam = t.TypeOf<typeof ListBiddableKeywordsParam>;
export declare const ListBiddableKeywordsExtendedParam: t.IntersectionC<[t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Must be one of: broad, phrase, exact
     */
    matchTypeFilter: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.StringC;
    /**
     * Optional. Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of: enabled, paused, or archived. Default behavior is to include all.
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
}>]>, t.PartialC<{
    campaignType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    /**
     * Optional. Restricts results to keywords with the specified keyword Id specified in comma-separated list.
     */
    keywordIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListBiddableKeywordsExtendedParam = t.TypeOf<typeof ListBiddableKeywordsExtendedParam>;
/**
 * Advertiser-specified state of the keyword
 */
export declare const NegativeKeywordState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type NegativeKeywordState = t.TypeOf<typeof NegativeKeywordState>;
/**
 * The match type used to match the keyword to search query
 */
export declare const NegativeKeywordMatchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
export declare type NegativeKeywordMatchType = t.TypeOf<typeof NegativeKeywordMatchType>;
/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export declare const NegativeKeywordServingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">]>;
export declare type NegativeKeywordServingStatus = t.TypeOf<typeof NegativeKeywordServingStatus>;
export declare const NegativeKeywordResponseStatus: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
export declare type NegativeKeywordResponseStatus = t.TypeOf<typeof NegativeKeywordResponseStatus>;
export declare const NegativeKeyword: t.ExactC<t.TypeC<{
    /**
     * The ID of the keyword
     */
    keywordId: t.NumberC;
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this keyword belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the keyword
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    keywordText: t.StringC;
    /**
     * Ads don't show on search queries that
     * contain the exact phrase for 'negativeExact' or close variations for 'negativePhrase'.
     */
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>;
export declare type NegativeKeyword = t.TypeOf<typeof NegativeKeyword>;
export declare const NegativeKeywordExtended: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the keyword
     */
    keywordId: t.NumberC;
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this keyword belongs
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the keyword
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    keywordText: t.StringC;
    /**
     * Ads don't show on search queries that
     * contain the exact phrase for 'negativeExact' or close variations for 'negativePhrase'.
     */
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>, t.ExactC<t.TypeC<{
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
    servingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">]>;
}>>]>;
export declare type NegativeKeywordExtended = t.TypeOf<typeof NegativeKeywordExtended>;
export declare const NegativeKeywordResponse: t.IntersectionC<[t.TypeC<{
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
}>, t.PartialC<{
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: t.NumberC;
    /**
     * A human-readable description of the error, if unsuccessful.
     * Ads API returns either description or details.
     */
    description: t.StringC;
    details: t.StringC;
}>]>;
export declare type NegativeKeywordResponse = t.TypeOf<typeof NegativeKeywordResponse>;
export declare const CreateNegativeKeywordsParam: t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    keywordText: t.StringC;
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>;
export declare type CreateNegativeKeywordsParam = t.TypeOf<typeof CreateNegativeKeywordsParam>;
export declare const UpdateNegativeKeywordsParam: t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>;
export declare type UpdateNegativeKeywordsParam = t.TypeOf<typeof UpdateNegativeKeywordsParam>;
export declare const ListNegativeKeywordsParam: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Valid values are: negativePhrase, and negativeExact
     */
    matchTypeFilter: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.StringC;
    /**
     * Optional. Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of enabled, paused, archived. Default behavior is to include all.
     * TODO: check Negative Keyword State again. Conflict in the docs: There is disabled state or not?
     *
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListNegativeKeywordsParam = t.TypeOf<typeof ListNegativeKeywordsParam>;
/**
 * Advertiser-specified state of the keyword
 */
export declare const CampaignNegativeKeywordState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"deleted">]>;
export declare type CampaignNegativeKeywordState = t.TypeOf<typeof CampaignNegativeKeywordState>;
/**
 * The match type used to match the keyword to search query
 */
export declare const CampaignNegativeKeywordMatchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
export declare type CampaignNegativeKeywordMatchType = t.TypeOf<typeof CampaignNegativeKeywordMatchType>;
/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 * TODO: The docs only mention to TARGETING_CLAUSE_STATUS_LIVE.
 * Need check again.
 */
export declare const CampaignNegativeKeywordServingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">]>;
export declare type CampaignNegativeKeywordServingStatus = t.TypeOf<typeof CampaignNegativeKeywordServingStatus>;
export declare const CampaignNegativeKeywordResponseStatus: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
export declare type CampaignNegativeKeywordResponseStatus = t.TypeOf<typeof CampaignNegativeKeywordResponseStatus>;
export declare const CampaignNegativeKeyword: t.ExactC<t.TypeC<{
    /**
     * The ID of the keyword
     */
    keywordId: t.NumberC;
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: t.NumberC;
    /**
     * Advertiser-specified state of the keyword
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"deleted">]>;
    /**
     * The expression to match against search queries
     */
    keywordText: t.StringC;
    /**
     * The match type used to match the keyword to search query
     */
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>;
export declare type CampaignNegativeKeyword = t.TypeOf<typeof CampaignNegativeKeyword>;
export declare const CampaignNegativeKeywordExtended: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the keyword
     */
    keywordId: t.NumberC;
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: t.NumberC;
    /**
     * Advertiser-specified state of the keyword
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"deleted">]>;
    /**
     * The expression to match against search queries
     */
    keywordText: t.StringC;
    /**
     * The match type used to match the keyword to search query
     */
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>, t.ExactC<t.TypeC<{
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
    servingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">]>;
}>>]>;
export declare type CampaignNegativeKeywordExtended = t.TypeOf<typeof CampaignNegativeKeywordExtended>;
export declare const CampaignNegativeKeywordResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
}>, t.PartialC<{
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.StringC;
}>]>;
export declare type CampaignNegativeKeywordResponse = t.TypeOf<typeof CampaignNegativeKeywordResponse>;
export declare const CreateCampaignNegativeKeywordsParam: t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    keywordText: t.StringC;
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"deleted">]>;
}>>;
export declare type CreateCampaignNegativeKeywordsParam = t.TypeOf<typeof CreateCampaignNegativeKeywordsParam>;
export declare const UpdateCampaignNegativeKeywordsParam: t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"deleted">]>;
}>>;
export declare type UpdateCampaignNegativeKeywordsParam = t.TypeOf<typeof UpdateCampaignNegativeKeywordsParam>;
export declare const ListCampaignNegativeKeywordsParam: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Valid values are: negativePhrase, negativeExact
     */
    matchTypeFilter: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.StringC;
    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListCampaignNegativeKeywordsParam = t.TypeOf<typeof ListCampaignNegativeKeywordsParam>;
export declare const SuggestedKeyword: t.ExactC<t.TypeC<{
    /**
     * The suggested keyword
     */
    keywordText: t.StringC;
    /**
     * Match type of the suggested keyword
     */
    matchType: t.StringC;
}>>;
export declare const SuggestedKeywords: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The suggested keyword
     */
    keywordText: t.StringC;
    /**
     * Match type of the suggested keyword
     */
    matchType: t.StringC;
}>>>;
export declare type SuggestedKeywords = t.TypeOf<typeof SuggestedKeywords>;
export declare const AdGroupSuggestedKeywordsResponse: t.ExactC<t.TypeC<{
    /**
     * The ID of the requested ad group.
     */
    adGroupId: t.NumberC;
    /**
     * List of suggested keywords.
     */
    suggestedKeywords: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The suggested keyword
         */
        keywordText: t.StringC;
        /**
         * Match type of the suggested keyword
         */
        matchType: t.StringC;
    }>>>;
}>>;
export declare type AdGroupSuggestedKeywordsResponse = t.TypeOf<typeof AdGroupSuggestedKeywordsResponse>;
export declare const AdGroupSuggestedKeywordsExtendedResponse: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the requested ad group
     */
    adGroupId: t.NumberC;
    /**
     * The campaign ID in which the ad group belongs to
     */
    campaignId: t.NumberC;
    /**
     * The suggested keyword
     */
    keywordText: t.StringC;
    /**
     * Match type of the suggested keyword
     */
    matchType: t.StringC;
    /**
     * The state of the ad for which the keyword is suggested. Should be either enabled or paused
     */
    state: t.StringC;
}>>, t.PartialC<{
    /**
     * The keyword bid suggestion.
     * Will only be shown if suggestBid is 'yes' and the keyword has a bid suggestion
     */
    bid: t.NumberC;
}>]>;
export declare type AdGroupSuggestedKeywordsExtendedResponse = t.TypeOf<typeof AdGroupSuggestedKeywordsExtendedResponse>;
export declare const AsinSuggestedKeywordsResponse: t.ExactC<t.TypeC<{
    /**
     * The ASIN for which a keyword suggestion is requested
     */
    asin: t.StringC;
    /**
     * List of suggested keywords
     */
    suggestedKeywords: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The suggested keyword
         */
        keywordText: t.StringC;
        /**
         * Match type of the suggested keyword
         */
        matchType: t.StringC;
    }>>>;
}>>;
export declare type AsinSuggestedKeywordsResponse = t.TypeOf<typeof AsinSuggestedKeywordsResponse>;
export declare const BulkAsinSuggestedKeywordsResponse: t.ArrayC<t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The suggested keyword
     */
    keywordText: t.StringC;
    /**
     * Match type of the suggested keyword
     */
    matchType: t.StringC;
}>>>>;
export declare type BulkAsinSuggestedKeywordsResponse = t.TypeOf<typeof BulkAsinSuggestedKeywordsResponse>;
export declare const SuggestBids: t.UnionC<[t.LiteralC<"yes">, t.LiteralC<"no">]>;
export declare type SuggestBids = t.TypeOf<typeof SuggestBids>;
export declare const GetAdGroupSuggestedKeywordsParams: t.ExactC<t.TypeC<{
    /**
     * Maximum number of returned suggested keywords. Default is 100, maximum is 1000
     */
    maxNumSuggestions: t.NumberC;
    /**
     * Ad state filter (values are comma separated), to filter out the Ads to get suggested keywords for their ASINs.
     * Valid values are: enabled, paused, and archived.
     * Default values are enabled and paused
     */
    adStateFilter: t.ArrayC<t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>>;
}>>;
export declare type GetAdGroupSuggestedKeywordsParams = t.TypeOf<typeof GetAdGroupSuggestedKeywordsParams>;
export declare const GetAdGroupSuggestedKeywordsExtendedParams: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * Maximum number of returned suggested keywords. Default is 100, maximum is 1000
     */
    maxNumSuggestions: t.NumberC;
    /**
     * Ad state filter (values are comma separated), to filter out the Ads to get suggested keywords for their ASINs.
     * Valid values are: enabled, paused, and archived.
     * Default values are enabled and paused
     */
    adStateFilter: t.ArrayC<t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>>;
}>>, t.PartialC<{
    /**
     * Valid values are yes and no. Default value is no.
     * If yes, any suggested keywords can contain the extra bid field, where bid will be populated by calculated suggested bid.
     * Note: The bid field will be missing if there are no suggested bids for the keyword
     */
    suggestBids: t.UnionC<[t.LiteralC<"yes">, t.LiteralC<"no">]>;
}>]>;
export declare type GetAdGroupSuggestedKeywordsExtendedParams = t.TypeOf<typeof GetAdGroupSuggestedKeywordsExtendedParams>;
/**
 * Newly created SB keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation.
 * After moderation, the keyword will be in an enabled state.
 */
export declare const SponsoredBrandsKeywordState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
export declare const SponsoredBrandsKeyword: t.ExactC<t.TypeC<{
    /**
     * The keyword identifier.
     */
    keywordId: t.NumberC;
    /**
     * The identifier of the ad group associated with the keyword.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of the campaign associated with the keyword.
     */
    campaignId: t.NumberC;
    /**
     * The keyword text. The maximum number of words for this string is 10.
     */
    keywordText: t.StringC;
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    /**
     * Newly created SponsoredBrands keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderationn.
     * After moderation, the keyword will be in an enabled state.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
    /**
     * The bid associated with the keyword.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
     */
    bid: t.NumberC;
}>>;
export declare type SponsoredBrandsKeyword = t.TypeOf<typeof SponsoredBrandsKeyword>;
export declare const ListSponsoredBrandsKeywordParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * The returned array is filtered to include only keywords with matchType set to one of the values in the specified comma-delimited list.
     */
    matchTypeFilter: t.ArrayC<t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>>;
    /**
     * The returned array includes only keywords with the specified text.
     */
    keywordText: t.StringC;
    /**
     * The returned array includes only keywords with state set to the specified value.
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The returned array includes only keywords associated with campaigns matching those specified by identifier in the comma-delimited string.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * The returned array includes only keywords associated with ad groups matching those specified by identifier in the comma-delimited string.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
    /**
     * The returned array includes only keywords with identifiers matching those specified in the comma-delimited string.
     */
    keywordIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListSponsoredBrandsKeywordParams = t.TypeOf<typeof ListSponsoredBrandsKeywordParams>;
export declare const UpdateSponsoredBrandsKeywordParams: t.ExactC<t.TypeC<{
    /**
     * The identifier of the keyword.
     */
    keywordId: t.NumberC;
    /**
     * The identifier of an existing ad group to which the keyword is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of an existing campaign to which the keyword is associated.
     */
    campaignId: t.NumberC;
    /**
     * Newly created SponsoredBrands keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderationn.
     * After moderation, the keyword will be in an enabled state.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
    /**
     * The bid associated with the keyword.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
     */
    bid: t.NumberC;
}>>;
export declare type UpdateSponsoredBrandsKeywordParams = t.TypeOf<typeof UpdateSponsoredBrandsKeywordParams>;
export declare const CreateSponsoredBrandsKeywordParams: t.ExactC<t.TypeC<{
    /**
     * The identifier of an existing ad group to which the keyword is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of an existing campaign to which the keyword is associated.
     */
    campaignId: t.NumberC;
    /**
     * The keyword text. The maximum number of words for this string is 10.
     */
    keywordText: t.StringC;
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    /**
     * The bid associated with the keyword.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
     */
    bid: t.NumberC;
}>>;
export declare type CreateSponsoredBrandsKeywordParams = t.TypeOf<typeof CreateSponsoredBrandsKeywordParams>;
export declare const SponsoredBrandsKeywordResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.StringC;
}>, t.PartialC<{
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.StringC;
}>]>;
export declare type SponsoredBrandsKeywordResponse = t.TypeOf<typeof SponsoredBrandsKeywordResponse>;
export declare const SponsoredBrandsNegativeKeywordState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
export declare type SponsoredBrandsNegativeKeywordState = t.TypeOf<typeof SponsoredBrandsNegativeKeywordState>;
export declare const SponsoredBrandsNegativeKeyword: t.ExactC<t.TypeC<{
    /**
     * The identifier of the negative keyword
     */
    keywordId: t.NumberC;
    /**
     * The identifier of the ad group to which the negative keyword is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of the campaign to which the negative keyword is associated.
     */
    campaignId: t.NumberC;
    /**
     * The keyword text.
     * Maximum length is ten words if 'matchType' is 'negativeExact'.
     * Maximum length is 4 words if 'matchType' is 'negativePhrase'.
     */
    keywordText: t.StringC;
    /**
     * The negative match type.
     * For more information, see negative keyword match types in the Amazon Advertising support center.
     */
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
    /**
     * The current state of the negative keyword.
     * Newly created SponsoredBrands negative keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation review.
     * 'enabled' refers to negative keywords that are active.
     * 'archived' refers to negative keywords that are permanently inactive and cannot be returned to the 'enabled' state.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
}>>;
export declare type SponsoredBrandsNegativeKeyword = t.TypeOf<typeof SponsoredBrandsNegativeKeyword>;
export declare const CreateSponsoredBrandsNegativeKeywordParams: t.ExactC<t.TypeC<{
    /**
     * The identifier of the campaign to which the negative keyword is associated.
     */
    campaignId: t.NumberC;
    /**
     * The identifier of the ad group to which the negative keyword is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The keyword text.
     * Maximum length is ten words if 'matchType' is 'negativeExact'.
     * Maximum length is 4 words if 'matchType' is 'negativePhrase'.
     */
    keywordText: t.StringC;
    /**
     * The negative match type.
     * For more information, see negative keyword match types in the Amazon Advertising support center.
     */
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>;
export declare type CreateSponsoredBrandsNegativeKeywordParams = t.TypeOf<typeof CreateSponsoredBrandsNegativeKeywordParams>;
export declare const UpdateSponsoredBrandsNegativeKeywordParams: t.PartialC<{
    /**
     * The identifier of the campaign to which the negative keyword is associated.
     */
    campaignId: t.NumberC;
    /**
     * The identifier of the ad group to which the negative keyword is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of the negative keyword.
     */
    keywordId: t.NumberC;
    /**
     * The current state of the negative keyword.
     * Newly created SponsoredBrands negative keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation review.
     * 'enabled' refers to negative keywords that are active.
     * 'archived' refers to negative keywords that are permanently inactive and cannot be returned to the 'enabled' state.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
}>;
export declare type UpdateSponsoredBrandsNegativeKeywordParams = t.TypeOf<typeof UpdateSponsoredBrandsNegativeKeywordParams>;
export declare const SponsoredBrandsNegativeKeywordResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.StringC;
}>, t.PartialC<{
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.StringC;
}>]>;
export declare type SponsoredBrandsNegativeKeywordResponse = t.TypeOf<typeof SponsoredBrandsNegativeKeywordResponse>;
export declare const SponsoredBrandsKeywordRecommendationParams: t.PartialC<{
    /**
     * An array of ASINs for which keyword recommendations are generated.
     */
    asins: t.ArrayC<t.StringC>;
    /**
     * Specifies the URL of a Stores page.
     * Vendors may also specify the URL of a custom landing page.
     * The products on the landing page are used to generate keyword recommendations.
     */
    url: t.StringC;
}>;
export declare type SponsoredBrandsKeywordRecommendationParams = t.TypeOf<typeof SponsoredBrandsKeywordRecommendationParams>;
export declare const SponsoredBrandsKeywordRecommendation: t.ExactC<t.TypeC<{
    /**
     * A recommendation identifier that describes the suggested action for the recommendation.
     */
    recommendationId: t.StringC;
    /**
     * Recommended keyword value.
     */
    value: t.StringC;
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
}>>;
export declare type SponsoredBrandsKeywordRecommendation = t.TypeOf<typeof SponsoredBrandsKeywordRecommendation>;
