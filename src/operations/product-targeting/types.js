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
exports.SponsoredBrandsBatchGetTargetsResponse = exports.SponsoredBrandsBatchGetTargetsRequest = exports.SponsoredBrandsTargetingClauseResponse = exports.SponsoredBrandsCreateTargetsResponse = exports.SponsoredBrandsCreateTargetsRequest = exports.SponsoredBrandsUpdateTargetsResponse = exports.SponsoredBrandsUpdateTargetsRequest = exports.SponsoredBrandsListTargetsResponse = exports.SponsoredBrandsTargetingClauses = exports.SponsoredBrandsTargetingClause = exports.SponsoredBrandsExpressionState = exports.SponsoredBrandsResolvedExpressions = exports.SponsoredBrandsResolvedExpression = exports.SponsoredBrandsExpressions = exports.SponsoredBrandsExpression = exports.SponsoredBrandsProductPredicateType = exports.SponsoredBrandsListTargetsRequest = exports.SponsoredBrandsFilterType = exports.SponsoredBrandsTargetState = exports.GetBrandRecommendationsParams = exports.UpdateTargetingClausesParams = exports.ListTargetingClausesParams = exports.CreateTargetingClausesParams = exports.TargetingClauseResponse = exports.RefinementsResponse = exports.BrandResponses = exports.BrandResponse = exports.BrandId = exports.AgeRanges = exports.AgeRange = exports.CategoryResponse = exports.CategoryId = exports.ProductRecommendationResponse = exports.RecommendedTargetAsins = exports.RecommendedTargetAsin = exports.ProductRecommendationRequest = exports.TargetingClauseExtended = exports.TargetingClauses = exports.TargetingClause = exports.TargetingClauseServingStatus = exports.ExpressionType = exports.TargetingExpressions = exports.TargetingExpression = exports.TargetingExpressionType = exports.TargetingClauseState = exports.TargetIds = exports.TargetId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
const types_2 = require("../campaigns/types");
const types_3 = require("../ad-groups/types");
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
exports.TargetId = t.number;
exports.TargetIds = t.array(exports.TargetId);
exports.TargetingClauseState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('archived'),
]);
exports.TargetingExpressionType = t.union([
    t.literal('asinCategorySameAs'),
    t.literal('asinBrandSameAs'),
    t.literal('asinPriceLessThan'),
    t.literal('asinPriceBetween'),
    t.literal('asinPriceGreaterThan'),
    t.literal('asinReviewRatingLessThan'),
    t.literal('asinReviewRatingBetween'),
    t.literal('asinReviewRatingGreaterThan'),
    t.literal('asinSameAs'),
    t.literal('asinIsPrimeShippingEligible'),
    t.literal('asinAgeRangeSameAs'),
    t.literal('asinGenreSameAs'),
    t.literal('queryHighRelMatches'),
    t.literal('queryBroadRelMatches'),
    t.literal('asinSubstituteRelated'),
    t.literal('asinAccessoryRelated'),
]);
exports.TargetingExpression = t.intersection([
    t.strict({
        /**
         * The type of intent
         */
        type: exports.TargetingExpressionType,
    }),
    t.partial({
        /**
         * The value which should be targeted
         */
        value: t.string,
    }),
]);
exports.TargetingExpressions = t.array(exports.TargetingExpression);
/**
 * The type of expression
 */
exports.ExpressionType = t.union([t.literal('auto'), t.literal('manual')]);
/**
 * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
 */
exports.TargetingClauseServingStatus = t.union([
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
    t.literal('PORTFOLIO_ENDED'), // the docs don't mention to this type
]);
exports.TargetingClause = t.intersection([
    t.strict({
        /**
         * The ID of the target
         */
        targetId: exports.TargetId,
        /**
         * The ID of the campaign to which this target belongs
         */
        campaignId: types_2.CampaignId,
        /**
         * The ID of the ad group to which this target belongs.
         */
        adGroupId: types_3.AdGroupId,
        /**
         * Advertiser-specified state of the target
         */
        state: exports.TargetingClauseState,
        /**
         * The expression to match against search queries
         */
        expression: exports.TargetingExpressions,
        /**
         * The type of expression
         */
        expressionType: exports.ExpressionType,
    }),
    t.partial({
        /**
         * Bid used when ads are sourced using this target.
         */
        bid: t.number,
    }),
]);
exports.TargetingClauses = t.array(exports.TargetingClause);
exports.TargetingClauseExtended = t.intersection([
    exports.TargetingClause,
    t.strict({
        /**
         * The date the targeting was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the targeting was last updated as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: exports.TargetingClauseServingStatus,
    }),
]);
exports.ProductRecommendationRequest = t.strict({
    /**
     * The number of recommendations to return in one page.
     */
    pageSize: t.number,
    /**
     * The number of pages to index into the result set
     */
    pageNumber: t.number,
    /**
     * A list of asins for which to get recommendations for
     */
    asins: t.array(t.string),
});
exports.RecommendedTargetAsin = t.strict({
    /**
     * The recommended asin to target
     */
    recommendedTargetAsin: t.string,
});
exports.RecommendedTargetAsins = t.array(exports.RecommendedTargetAsin);
exports.ProductRecommendationResponse = t.strict({
    /**
     * The number of recommendations from which there are to page through.
     */
    totalResultCount: t.number,
    /**
     * The number of pages to index into the result set
     */
    recommendedProducts: exports.RecommendedTargetAsins,
});
exports.CategoryId = t.number;
exports.CategoryResponse = t.strict({
    /**
     * The ID of the category
     */
    id: exports.CategoryId,
    /**
     * The name of the category
     */
    name: t.string,
    /**
     * A boolean describing whether this category can be targeted or not in a targeting expression
     */
    isTargetable: t.boolean,
    /**
     * The path of the category within the category catalogue
     */
    path: t.string,
});
exports.AgeRange = t.strict({
    /**
     * The id of the age range.
     */
    id: t.number,
    /**
     * The name of the age range
     */
    name: t.string,
});
exports.AgeRanges = t.array(exports.AgeRange);
exports.BrandId = t.number;
exports.BrandResponse = t.strict({
    /**
     * The ID of the brand. This is for use in targeting expressions.
     */
    id: exports.BrandId,
    /**
     * The name of the brand
     */
    name: t.string,
});
exports.BrandResponses = t.array(exports.BrandResponse);
exports.RefinementsResponse = t.strict({
    /**
     * The ID of the category
     */
    categoryId: exports.CategoryId,
    /**
     * An array of age ranges this category supports.  Not all categories have age ranges.
     */
    ageRanges: exports.AgeRanges,
    /**
     * Brands that can be found within this category.
     */
    brands: exports.BrandResponses,
});
exports.TargetingClauseResponse = t.partial({
    /**
     * The ID of the target that was created/updated, if successful
     */
    targetId: exports.TargetId,
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.string,
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.string,
});
exports.CreateTargetingClausesParams = t.partial({
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: types_2.CampaignId,
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * Advertiser-specified state of the target
     */
    state: exports.TargetingClauseState,
    /**
     * The expression to match against search queries
     */
    expression: exports.TargetingExpressions,
    /**
     * The type of expression
     */
    expressionType: exports.ExpressionType,
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.number,
});
exports.ListTargetingClausesParams = t.intersection([
    types_1.ListPagination,
    t.partial({
        /**
         * Restricts results to targets with state within the specified comma-separated list.
         * Possible filter types are: enabled, paused, or archived
         */
        stateFilter: exports.TargetingClauseState,
        /**
         * Restricts results to targets within campaigns specified in comma-separated list
         */
        campaignIdFilter: types_2.CampaignIds,
        /**
         * Restricts results to targets within ad groups specified in comma-separated list
         */
        adGroupIdFilter: types_3.AdGroupIds,
        /**
         * Restricts results to targets with the specified target Ids specified in comma-separated list
         */
        targetIdFilter: exports.TargetIds,
    }),
]);
exports.UpdateTargetingClausesParams = t.partial({
    /**
     * The ID of the target
     */
    targetId: exports.TargetId,
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: types_2.CampaignId,
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * Advertiser-specified state of the target
     */
    state: exports.TargetingClauseState,
    /**
     * The expression to match against search queries
     */
    expression: exports.TargetingExpressions,
    /**
     * The type of expression
     */
    expressionType: exports.ExpressionType,
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.number,
});
exports.GetBrandRecommendationsParams = t.partial({
    keyword: t.string,
    categoryId: exports.CategoryId,
});
// Sponsored brands product targeting types
/**
 * A list of target states.
 */
exports.SponsoredBrandsTargetState = t.union([
    t.literal('ENABLED'),
    t.literal('PAUSED'),
    t.literal('PENDING'),
    t.literal('ARCHIVED'),
    t.literal('DRAFT'),
]);
exports.SponsoredBrandsFilterType = t.union([
    t.literal('STATE'),
    t.literal('CAMPAIGN_ID'),
    t.literal('AD_GROUP_ID'),
]);
const SponsoredBrandsFilterValue = t.union([exports.SponsoredBrandsTargetState, types_2.CampaignId, types_3.AdGroupId]);
const SponsoredBrandsTargetFilter = t.strict({
    filterType: exports.SponsoredBrandsFilterType,
    values: t.array(SponsoredBrandsFilterValue),
});
const SponsoredBrandsTargetFilters = t.array(SponsoredBrandsTargetFilter);
exports.SponsoredBrandsListTargetsRequest = t.strict({
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.string,
    /**
     * Sets a limit on the number of results returned by an operation.
     */
    maxResults: t.number,
    /**
     * Restricts results to targets with the specified filters.
     * Filters are inclusive. Filters are joined using 'and' logic.
     * Specify one type of each filter.
     * Specifying multiples of the same type of filter results in an error.
     */
    filters: SponsoredBrandsTargetFilters,
});
exports.SponsoredBrandsProductPredicateType = t.union([
    t.literal('asinCategorySameAs'),
    t.literal('asinBrandSameAs'),
    t.literal('asinPriceLessThan'),
    t.literal('asinPriceBetween'),
    t.literal('asinPriceGreaterThan'),
    t.literal('asinReviewRatingLessThan'),
    t.literal('asinReviewRatingBetween'),
    t.literal('asinReviewRatingGreaterThan'),
    t.literal('asinSameAs'),
]);
exports.SponsoredBrandsExpression = t.strict({
    type: exports.SponsoredBrandsProductPredicateType,
    value: t.string,
});
exports.SponsoredBrandsExpressions = t.array(exports.SponsoredBrandsExpression);
exports.SponsoredBrandsResolvedExpression = t.strict({
    type: exports.SponsoredBrandsProductPredicateType,
    value: t.string,
});
exports.SponsoredBrandsResolvedExpressions = t.array(exports.SponsoredBrandsResolvedExpression);
exports.SponsoredBrandsExpressionState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('pending'),
    t.literal('archived'),
    t.literal('draft'),
]);
exports.SponsoredBrandsTargetingClause = t.strict({
    /**
     * The target identifier.
     */
    targetId: exports.TargetId,
    /**
     * The identifier of the ad group to which the target is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of the campaign to which the target is associated.
     */
    campaignId: types_2.CampaignId,
    expressions: exports.SponsoredBrandsExpression,
    resolvedExpressions: exports.SponsoredBrandsResolvedExpression,
    state: exports.SponsoredBrandsExpressionState,
    /**
     * The associated bid.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see supported features.
     */
    bid: t.number,
});
exports.SponsoredBrandsTargetingClauses = t.array(exports.SponsoredBrandsTargetingClause);
exports.SponsoredBrandsListTargetsResponse = t.strict({
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.string,
    targets: exports.SponsoredBrandsTargetingClauses,
});
exports.SponsoredBrandsUpdateTargetsRequest = t.partial({
    /**
     * The identifier of the target.
     */
    targetId: exports.TargetId,
    /**
     * The identifier of the ad group to which the target is associated.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of the campaign to which the target is associated.
     */
    campaignId: types_2.CampaignId,
    /**
     * The state of the target.
     */
    state: exports.SponsoredBrandsExpressionState,
    /**
     * The associated bid.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see supported features.
     */
    bid: t.number,
});
exports.SponsoredBrandsUpdateTargetsResponse = t.strict({
    /**
     * Lists the successfully updated targets.
     * Note that targets in the response are correlated to targets in the request using the targetRequestIndex field.
     * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request.
     */
    updateTargetSuccessResults: t.array(t.strict({
        /**
         * The identifier of a target.
         */
        targetId: exports.TargetId,
        /**
         * Correlates the target to the target array index specified in the request. Zero-based.
         */
        targetRequestIndex: t.number,
    })),
    /**
     * Lists errors that occured during target update.
     * Note that errors are correlated to target update requests by the targetRequestIndex field.
     * This field corresponds to the order of the target in the request.
     * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request array.
     */
    updateTargetErrorResults: t.array(t.strict({
        code: t.string,
        details: t.string,
        targetId: exports.TargetId,
        targetRequestIndex: t.number,
    })),
});
const SponsoredBrandsCreateTargetingClauseRequest = t.strict({
    /**
     * The identifier of an existing ad group.
     * The newly created target is associated to this ad group.
     */
    adGroupId: types_3.AdGroupId,
    /**
     * The identifier of an existing campaign.
     * The newly created target is associated to this campaign.
     */
    campaignId: types_2.CampaignId,
    expressions: exports.SponsoredBrandsExpression,
    /**
     * The associated bid.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see supported features.
     */
    bid: t.number,
});
exports.SponsoredBrandsCreateTargetsRequest = t.strict({
    targets: t.array(SponsoredBrandsCreateTargetingClauseRequest),
});
exports.SponsoredBrandsCreateTargetsResponse = t.strict({
    /**
     * Lists the successfully created targets.
     * Note that targets in the response are correlated to targets in the request using the targetRequestIndex field.
     * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request.
     */
    createTargetSuccessResults: t.array(t.strict({
        /**
         * Correlates the target to the target array index specified in the request. Zero-based.
         */
        targetRequestIndex: t.number,
        /**
         * The identifier of a target.
         */
        targetId: exports.TargetId,
    })),
    /**
     * Lists errors that occured during target creation.
     * Note that errors are correlated to target create requests by the targetRequestIndex field.
     * This field corresponds to the order of the target object in the request.
     * For example, if targetRequestIndex is set to 3, an error occured during creation of the fourth target in the request.
     */
    createTargetErrorResults: t.array(t.strict({
        code: t.string,
        details: t.string,
        targetId: exports.TargetId,
        targetRequestIndex: t.number,
    })),
});
exports.SponsoredBrandsTargetingClauseResponse = t.partial({
    /**
     * The target identifier.
     */
    targetId: exports.TargetId,
    code: t.string,
    details: t.string,
});
exports.SponsoredBrandsBatchGetTargetsRequest = t.strict({
    targetIds: exports.TargetIds,
});
exports.SponsoredBrandsBatchGetTargetsResponse = t.strict({
    /**
     * A list of targeting clause objects.
     * Note that each targeting clause object is correlated to the list request by the targetRequestIndex field.
     * This field corresponds to the order of the targeting identifier in the request.
     */
    batchGetTargetSuccessResults: t.array(t.strict({
        targetingClause: exports.SponsoredBrandsTargetingClause,
        targetRequestIndex: t.number,
    })),
    /**
     * A list of target identifiers that were not found.
     * Note that each target identifier is correlated to the list request by the targetRequestIndex field.
     * This field corresponds to the order of the target identifier in the request.
     */
    batchGetTargetErrorResults: t.array(t.strict({
        code: t.string,
        details: t.string,
        targetId: exports.TargetId,
        targetRequestIndex: t.number,
    })),
});
//# sourceMappingURL=types.js.map