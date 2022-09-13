"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsNegativeKeyword = exports.SponsoredBrandsNegativeKeywordState = exports.SponsoredBrandsKeywordResponse = exports.CreateSponsoredBrandsKeywordParams = exports.UpdateSponsoredBrandsKeywordParams = exports.ListSponsoredBrandsKeywordParams = exports.SponsoredBrandsKeyword = exports.SponsoredBrandsKeywordState = exports.GetAdGroupSuggestedKeywordsExtendedParams = exports.GetAdGroupSuggestedKeywordsParams = exports.SuggestBids = exports.BulkAsinSuggestedKeywordsResponse = exports.AsinSuggestedKeywordsResponse = exports.AdGroupSuggestedKeywordsExtendedResponse = exports.AdGroupSuggestedKeywordsResponse = exports.SuggestedKeywords = exports.SuggestedKeyword = exports.ListCampaignNegativeKeywordsParam = exports.UpdateCampaignNegativeKeywordsParam = exports.CreateCampaignNegativeKeywordsParam = exports.CampaignNegativeKeywordResponse = exports.CampaignNegativeKeywordExtended = exports.CampaignNegativeKeyword = exports.CampaignNegativeKeywordResponseStatus = exports.CampaignNegativeKeywordServingStatus = exports.CampaignNegativeKeywordMatchType = exports.CampaignNegativeKeywordState = exports.ListNegativeKeywordsParam = exports.UpdateNegativeKeywordsParam = exports.CreateNegativeKeywordsParam = exports.NegativeKeywordResponse = exports.NegativeKeywordExtended = exports.NegativeKeyword = exports.NegativeKeywordResponseStatus = exports.NegativeKeywordServingStatus = exports.NegativeKeywordMatchType = exports.NegativeKeywordState = exports.ListBiddableKeywordsExtendedParam = exports.ListBiddableKeywordsParam = exports.UpdateKeywordsParam = exports.CreateKeywordsParam = exports.KeywordResponse = exports.KeywordExtended = exports.Keyword = exports.KeywordResponseStatus = exports.KeywordServingStatus = exports.KeywordMatchType = exports.KeywordState = exports.KeywordIds = exports.KeywordId = void 0;
exports.SponsoredBrandsKeywordRecommendation = exports.SponsoredBrandsKeywordRecommendationParams = exports.SponsoredBrandsNegativeKeywordResponse = exports.UpdateSponsoredBrandsNegativeKeywordParams = exports.CreateSponsoredBrandsNegativeKeywordParams = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
const types_2 = require("../campaigns/types");
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
const types_3 = require("../ad-groups/types");
exports.KeywordId = t.number;
exports.KeywordIds = t.array(exports.KeywordId);
/**
 * Advertiser-specified state of the keyword
 */
exports.KeywordState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('archived'),
]);
/**
 * The match type used to match the keyword to search query
 */
exports.KeywordMatchType = t.union([
    t.literal('exact'),
    t.literal('phrase'),
    t.literal('broad'),
]);
/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
exports.KeywordServingStatus = t.union([
    t.literal('TARGETING_CLAUSE_ARCHIVED'),
    t.literal('TARGETING_CLAUSE_PAUSED'),
    t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
    t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
    t.literal('CAMPAIGN_OUT_OF_BUDGET'),
    t.literal('AD_GROUP_PAUSED'),
    t.literal('AD_GROUP_ARCHIVED'),
    t.literal('CAMPAIGN_PAUSED'),
    t.literal('CAMPAIGN_ARCHIVED'),
    t.literal('CAMPAIGN_INCOMPLETE'),
    t.literal('ACCOUNT_OUT_OF_BUDGET'),
    t.literal('ADVERTISER_PAYMENT_FAILURE'),
]);
exports.KeywordResponseStatus = t.union([
    t.literal('SUCCESS'),
    t.literal('INVALID_ARGUMENT'),
    t.literal('NOT_FOUND'),
]);
exports.Keyword = t.intersection([
    t.strict({
        /**
         * The ID of the keyword
         */
        keywordId: exports.KeywordId,
        /**
         * The ID of the campaign to which this keyword belongs
         */
        campaignId: types_2.CampaignId,
        /**
         * The ID of the ad group to which this keyword belongs
         */
        adGroupId: types_3.AdGroupId,
        /**
         * Advertiser-specified state of the keyword
         */
        state: exports.KeywordState,
        /**
         * The expression to match against search queries
         */
        keywordText: t.string,
        /**
         * The match type used to match the keyword to search query
         */
        matchType: exports.KeywordMatchType,
    }),
    t.partial({
        /**
         * Bid used when ads are sourced using this keyword. Only compatible with biddable match types.
         */
        bid: t.number,
    }),
]);
exports.KeywordExtended = t.intersection([
    exports.Keyword,
    t.strict({
        /**
         * The date the campaign was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the campaign was created as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: exports.KeywordServingStatus,
    }),
]);
exports.KeywordResponse = t.intersection([
    t.type({
        /**
         * The ID of the keyword that was created/updated, if successful
         */
        keywordId: exports.KeywordId,
        /**
         * An enumerated success or error code for machine use.
         */
        code: exports.KeywordResponseStatus,
    }),
    t.partial({
        /**
         * A human-readable description of the error, if unsuccessful.
         */
        details: t.string,
    }),
]);
exports.CreateKeywordsParam = t.strict({
    campaignId: types_2.CampaignId,
    adGroupId: types_3.AdGroupId,
    keywordText: t.string,
    matchType: exports.KeywordMatchType,
    state: exports.KeywordState,
});
exports.UpdateKeywordsParam = t.strict({
    keywordId: exports.KeywordId,
    state: exports.KeywordState,
    bid: t.number,
});
exports.ListBiddableKeywordsParam = t.intersection([
    types_1.ListPagination,
    t.partial({
        /**
         * Optional. Restricts results to keywords with match types within the specified comma-separated list.
         * Must be one of: broad, phrase, exact
         */
        matchTypeFilter: exports.KeywordMatchType,
        /**
         * Optional. Restricts results to keywords with the specified keywordText.
         */
        keywordText: t.string,
        /**
         * Optional. Restricts results to keywords with state within the specified comma-separated list.
         * Must be one of: enabled, paused, or archived. Default behavior is to include all.
         */
        stateFilter: exports.KeywordState,
        /**
         * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
         */
        campaignIdFilter: t.array(types_2.CampaignId),
        /**
         * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
         */
        adGroupIdFilter: types_3.AdGroupIds,
    }),
]);
exports.ListBiddableKeywordsExtendedParam = t.intersection([
    exports.ListBiddableKeywordsParam,
    t.partial({
        campaignType: exports.KeywordMatchType,
        /**
         * Optional. Restricts results to keywords with the specified keyword Id specified in comma-separated list.
         */
        keywordIdFilter: t.array(exports.KeywordId),
    }),
]);
/**
 * Advertiser-specified state of the keyword
 */
exports.NegativeKeywordState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('archived'),
]);
/**
 * The match type used to match the keyword to search query
 */
exports.NegativeKeywordMatchType = t.union([
    t.literal('negativeExact'),
    t.literal('negativePhrase'),
]);
/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
exports.NegativeKeywordServingStatus = t.union([
    t.literal('TARGETING_CLAUSE_ARCHIVED'),
    t.literal('TARGETING_CLAUSE_PAUSED'),
    t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
    t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
    t.literal('CAMPAIGN_OUT_OF_BUDGET'),
    t.literal('AD_GROUP_PAUSED'),
    t.literal('AD_GROUP_ARCHIVED'),
    t.literal('CAMPAIGN_PAUSED'),
    t.literal('CAMPAIGN_ARCHIVED'),
    t.literal('ACCOUNT_OUT_OF_BUDGET'),
    t.literal('ADVERTISER_PAYMENT_FAILURE'),
]);
exports.NegativeKeywordResponseStatus = t.union([
    t.literal('SUCCESS'),
    t.literal('INVALID_ARGUMENT'),
    t.literal('NOT_FOUND'),
]);
exports.NegativeKeyword = t.strict({
    /**
     * The ID of the keyword
     */
    keywordId: exports.KeywordId,
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: types_2.CampaignId,
    /**
     * The ID of the ad group to which this keyword belongs
     */
    adGroupId: types_3.AdGroupId,
    /**
     * Advertiser-specified state of the keyword
     */
    state: exports.NegativeKeywordState,
    /**
     * The expression to match against search queries
     */
    keywordText: t.string,
    /**
     * Ads don't show on search queries that
     * contain the exact phrase for 'negativeExact' or close variations for 'negativePhrase'.
     */
    matchType: exports.NegativeKeywordMatchType,
});
exports.NegativeKeywordExtended = t.intersection([
    exports.NegativeKeyword,
    t.strict({
        /**
         * The date the campaign was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the campaign was created as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: exports.NegativeKeywordServingStatus,
    }),
]);
exports.NegativeKeywordResponse = t.intersection([
    t.type({
        /**
         * An enumerated success or error code for machine use.
         */
        code: exports.NegativeKeywordResponseStatus,
    }),
    t.partial({
        /**
         * The ID of the keyword that was created/updated, if successful
         */
        keywordId: exports.KeywordId,
        /**
         * A human-readable description of the error, if unsuccessful.
         * Ads API returns either description or details.
         */
        description: t.string,
        details: t.string,
    }),
]);
exports.CreateNegativeKeywordsParam = t.strict({
    campaignId: types_2.CampaignId,
    adGroupId: types_3.AdGroupId,
    keywordText: t.string,
    matchType: exports.NegativeKeywordMatchType,
    state: exports.NegativeKeywordState,
});
exports.UpdateNegativeKeywordsParam = t.strict({
    keywordId: exports.KeywordId,
    state: exports.NegativeKeywordState,
});
exports.ListNegativeKeywordsParam = t.intersection([
    types_1.ListPagination,
    t.partial({
        /**
         * Optional. Restricts results to keywords with match types within the specified comma-separated list.
         * Valid values are: negativePhrase, and negativeExact
         */
        matchTypeFilter: exports.NegativeKeywordMatchType,
        /**
         * Optional. Restricts results to keywords with the specified keywordText.
         */
        keywordText: t.string,
        /**
         * Optional. Restricts results to keywords with state within the specified comma-separated list.
         * Must be one of enabled, paused, archived. Default behavior is to include all.
         * TODO: check Negative Keyword State again. Conflict in the docs: There is disabled state or not?
         *
         */
        stateFilter: exports.NegativeKeywordState,
        /**
         * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
         */
        campaignIdFilter: t.array(types_2.CampaignId),
        /**
         * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
         */
        adGroupIdFilter: types_3.AdGroupIds,
    }),
]);
/**
 * Advertiser-specified state of the keyword
 */
exports.CampaignNegativeKeywordState = t.union([t.literal('enabled'), t.literal('deleted')]);
/**
 * The match type used to match the keyword to search query
 */
exports.CampaignNegativeKeywordMatchType = t.union([
    t.literal('negativeExact'),
    t.literal('negativePhrase'),
]);
/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 * TODO: The docs only mention to TARGETING_CLAUSE_STATUS_LIVE.
 * Need check again.
 */
exports.CampaignNegativeKeywordServingStatus = t.union([
    t.literal('TARGETING_CLAUSE_ARCHIVED'),
    t.literal('TARGETING_CLAUSE_PAUSED'),
    t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
    t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
    t.literal('CAMPAIGN_OUT_OF_BUDGET'),
    t.literal('AD_GROUP_PAUSED'),
    t.literal('AD_GROUP_ARCHIVED'),
    t.literal('CAMPAIGN_PAUSED'),
    t.literal('CAMPAIGN_ARCHIVED'),
    t.literal('ACCOUNT_OUT_OF_BUDGET'),
    t.literal('ADVERTISER_PAYMENT_FAILURE'),
]);
exports.CampaignNegativeKeywordResponseStatus = t.union([
    t.literal('SUCCESS'),
    t.literal('INVALID_ARGUMENT'),
    t.literal('NOT_FOUND'),
]);
exports.CampaignNegativeKeyword = t.strict({
    /**
     * The ID of the keyword
     */
    keywordId: exports.KeywordId,
    /**
     * The ID of the campaign to which this keyword belongs
     */
    campaignId: types_2.CampaignId,
    /**
     * Advertiser-specified state of the keyword
     */
    state: exports.CampaignNegativeKeywordState,
    /**
     * The expression to match against search queries
     */
    keywordText: t.string,
    /**
     * The match type used to match the keyword to search query
     */
    matchType: exports.CampaignNegativeKeywordMatchType,
});
exports.CampaignNegativeKeywordExtended = t.intersection([
    exports.CampaignNegativeKeyword,
    t.strict({
        /**
         * The date the campaign was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the campaign was created as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: exports.CampaignNegativeKeywordServingStatus,
    }),
]);
exports.CampaignNegativeKeywordResponse = t.intersection([
    t.type({
        /**
         * The ID of the keyword that was created/updated, if successful
         */
        keywordId: exports.KeywordId,
        /**
         * An enumerated success or error code for machine use.
         */
        code: exports.CampaignNegativeKeywordResponseStatus,
    }),
    t.partial({
        /**
         * A human-readable description of the error, if unsuccessful.
         */
        details: t.string,
    }),
]);
exports.CreateCampaignNegativeKeywordsParam = t.strict({
    campaignId: types_2.CampaignId,
    keywordText: t.string,
    matchType: exports.CampaignNegativeKeywordMatchType,
    state: exports.CampaignNegativeKeywordState,
});
exports.UpdateCampaignNegativeKeywordsParam = t.strict({
    keywordId: exports.KeywordId,
    state: exports.CampaignNegativeKeywordState,
});
exports.ListCampaignNegativeKeywordsParam = t.intersection([
    types_1.ListPagination,
    t.partial({
        /**
         * Optional. Restricts results to keywords with match types within the specified comma-separated list.
         * Valid values are: negativePhrase, negativeExact
         */
        matchTypeFilter: exports.CampaignNegativeKeywordMatchType,
        /**
         * Optional. Restricts results to keywords with the specified keywordText.
         */
        keywordText: t.string,
        /**
         * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
         */
        campaignIdFilter: t.array(types_2.CampaignId),
    }),
]);
exports.SuggestedKeyword = t.strict({
    /**
     * The suggested keyword
     */
    keywordText: t.string,
    /**
     * Match type of the suggested keyword
     */
    matchType: t.string,
});
exports.SuggestedKeywords = t.array(exports.SuggestedKeyword);
exports.AdGroupSuggestedKeywordsResponse = t.strict({
    /**
     * The ID of the requested ad group.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * List of suggested keywords.
     */
    suggestedKeywords: t.array(exports.SuggestedKeyword),
});
exports.AdGroupSuggestedKeywordsExtendedResponse = t.intersection([
    t.strict({
        /**
         * The ID of the requested ad group
         */
        adGroupId: types_3.AdGroupId,
        /**
         * The campaign ID in which the ad group belongs to
         */
        campaignId: types_2.CampaignId,
        /**
         * The suggested keyword
         */
        keywordText: t.string,
        /**
         * Match type of the suggested keyword
         */
        matchType: t.string,
        /**
         * The state of the ad for which the keyword is suggested. Should be either enabled or paused
         */
        state: t.string,
    }),
    t.partial({
        /**
         * The keyword bid suggestion.
         * Will only be shown if suggestBid is 'yes' and the keyword has a bid suggestion
         */
        bid: t.number,
    }),
]);
exports.AsinSuggestedKeywordsResponse = t.strict({
    /**
     * The ASIN for which a keyword suggestion is requested
     */
    asin: t.string,
    /**
     * List of suggested keywords
     */
    suggestedKeywords: exports.SuggestedKeywords,
});
exports.BulkAsinSuggestedKeywordsResponse = t.array(exports.SuggestedKeywords);
exports.SuggestBids = t.union([t.literal('yes'), t.literal('no')]);
exports.GetAdGroupSuggestedKeywordsParams = t.strict({
    /**
     * Maximum number of returned suggested keywords. Default is 100, maximum is 1000
     */
    maxNumSuggestions: t.number,
    /**
     * Ad state filter (values are comma separated), to filter out the Ads to get suggested keywords for their ASINs.
     * Valid values are: enabled, paused, and archived.
     * Default values are enabled and paused
     */
    adStateFilter: t.array(types_3.AdGroupState),
});
exports.GetAdGroupSuggestedKeywordsExtendedParams = t.intersection([
    exports.GetAdGroupSuggestedKeywordsParams,
    t.partial({
        /**
         * Valid values are yes and no. Default value is no.
         * If yes, any suggested keywords can contain the extra bid field, where bid will be populated by calculated suggested bid.
         * Note: The bid field will be missing if there are no suggested bids for the keyword
         */
        suggestBids: exports.SuggestBids,
    }),
]);
/**
 * Newly created SB keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation.
 * After moderation, the keyword will be in an enabled state.
 */
exports.SponsoredBrandsKeywordState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('pending'),
    t.literal('archived'),
    t.literal('draft'),
]);
exports.SponsoredBrandsKeyword = t.strict({
    /**
     * The keyword identifier.
     */
    keywordId: exports.KeywordId,
    /**
     * The identifier of the ad group associated with the keyword.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of the campaign associated with the keyword.
     */
    campaignId: types_2.CampaignId,
    /**
     * The keyword text. The maximum number of words for this string is 10.
     */
    keywordText: t.string,
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: exports.KeywordMatchType,
    /**
     * Newly created SponsoredBrands keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderationn.
     * After moderation, the keyword will be in an enabled state.
     */
    state: exports.SponsoredBrandsKeywordState,
    /**
     * The bid associated with the keyword.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
     */
    bid: t.number,
});
exports.ListSponsoredBrandsKeywordParams = t.intersection([
    types_1.ListPagination,
    t.partial({
        /**
         * The returned array is filtered to include only keywords with matchType set to one of the values in the specified comma-delimited list.
         */
        matchTypeFilter: t.array(exports.KeywordMatchType),
        /**
         * The returned array includes only keywords with the specified text.
         */
        keywordText: t.string,
        /**
         * The returned array includes only keywords with state set to the specified value.
         */
        stateFilter: exports.KeywordState,
        /**
         * The returned array includes only keywords associated with campaigns matching those specified by identifier in the comma-delimited string.
         */
        campaignIdFilter: types_2.CampaignIds,
        /**
         * The returned array includes only keywords associated with ad groups matching those specified by identifier in the comma-delimited string.
         */
        adGroupIdFilter: types_3.AdGroupIds,
        /**
         * The returned array includes only keywords with identifiers matching those specified in the comma-delimited string.
         */
        keywordIdFilter: exports.KeywordIds,
    }),
]);
exports.UpdateSponsoredBrandsKeywordParams = t.strict({
    /**
     * The identifier of the keyword.
     */
    keywordId: exports.KeywordId,
    /**
     * The identifier of an existing ad group to which the keyword is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of an existing campaign to which the keyword is associated.
     */
    campaignId: types_2.CampaignId,
    /**
     * Newly created SponsoredBrands keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderationn.
     * After moderation, the keyword will be in an enabled state.
     */
    state: exports.SponsoredBrandsKeywordState,
    /**
     * The bid associated with the keyword.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
     */
    bid: t.number,
});
exports.CreateSponsoredBrandsKeywordParams = t.strict({
    /**
     * The identifier of an existing ad group to which the keyword is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of an existing campaign to which the keyword is associated.
     */
    campaignId: types_2.CampaignId,
    /**
     * The keyword text. The maximum number of words for this string is 10.
     */
    keywordText: t.string,
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: exports.KeywordMatchType,
    /**
     * The bid associated with the keyword.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
     */
    bid: t.number,
});
exports.SponsoredBrandsKeywordResponse = t.intersection([
    t.type({
        /**
         * The ID of the keyword that was created/updated, if successful
         */
        keywordId: exports.KeywordId,
        /**
         * An enumerated success or error code for machine use.
         */
        code: t.string,
    }),
    t.partial({
        /**
         * A human-readable description of the error, if unsuccessful.
         */
        details: t.string,
    }),
]);
exports.SponsoredBrandsNegativeKeywordState = t.union([
    t.literal('enabled'),
    t.literal('pending'),
    t.literal('archived'),
    t.literal('draft'),
]);
exports.SponsoredBrandsNegativeKeyword = t.strict({
    /**
     * The identifier of the negative keyword
     */
    keywordId: exports.KeywordId,
    /**
     * The identifier of the ad group to which the negative keyword is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of the campaign to which the negative keyword is associated.
     */
    campaignId: types_2.CampaignId,
    /**
     * The keyword text.
     * Maximum length is ten words if 'matchType' is 'negativeExact'.
     * Maximum length is 4 words if 'matchType' is 'negativePhrase'.
     */
    keywordText: t.string,
    /**
     * The negative match type.
     * For more information, see negative keyword match types in the Amazon Advertising support center.
     */
    matchType: exports.NegativeKeywordMatchType,
    /**
     * The current state of the negative keyword.
     * Newly created SponsoredBrands negative keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation review.
     * 'enabled' refers to negative keywords that are active.
     * 'archived' refers to negative keywords that are permanently inactive and cannot be returned to the 'enabled' state.
     */
    state: exports.SponsoredBrandsNegativeKeywordState,
});
exports.CreateSponsoredBrandsNegativeKeywordParams = t.strict({
    /**
     * The identifier of the campaign to which the negative keyword is associated.
     */
    campaignId: types_2.CampaignId,
    /**
     * The identifier of the ad group to which the negative keyword is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The keyword text.
     * Maximum length is ten words if 'matchType' is 'negativeExact'.
     * Maximum length is 4 words if 'matchType' is 'negativePhrase'.
     */
    keywordText: t.string,
    /**
     * The negative match type.
     * For more information, see negative keyword match types in the Amazon Advertising support center.
     */
    matchType: exports.NegativeKeywordMatchType,
});
exports.UpdateSponsoredBrandsNegativeKeywordParams = t.partial({
    /**
     * The identifier of the campaign to which the negative keyword is associated.
     */
    campaignId: types_2.CampaignId,
    /**
     * The identifier of the ad group to which the negative keyword is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of the negative keyword.
     */
    keywordId: exports.KeywordId,
    /**
     * The current state of the negative keyword.
     * Newly created SponsoredBrands negative keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation review.
     * 'enabled' refers to negative keywords that are active.
     * 'archived' refers to negative keywords that are permanently inactive and cannot be returned to the 'enabled' state.
     */
    state: exports.SponsoredBrandsNegativeKeywordState,
});
exports.SponsoredBrandsNegativeKeywordResponse = t.intersection([
    t.type({
        /**
         * The ID of the keyword that was created/updated, if successful
         */
        keywordId: exports.KeywordId,
        /**
         * An enumerated success or error code for machine use.
         */
        code: t.string,
    }),
    t.partial({
        /**
         * A human-readable description of the error, if unsuccessful.
         */
        details: t.string,
    }),
]);
exports.SponsoredBrandsKeywordRecommendationParams = t.partial({
    /**
     * An array of ASINs for which keyword recommendations are generated.
     */
    asins: t.array(t.string),
    /**
     * Specifies the URL of a Stores page.
     * Vendors may also specify the URL of a custom landing page.
     * The products on the landing page are used to generate keyword recommendations.
     */
    url: t.string,
});
exports.SponsoredBrandsKeywordRecommendation = t.strict({
    /**
     * A recommendation identifier that describes the suggested action for the recommendation.
     */
    recommendationId: t.string,
    /**
     * Recommended keyword value.
     */
    value: t.string,
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: exports.KeywordMatchType,
});
//# sourceMappingURL=types.js.map