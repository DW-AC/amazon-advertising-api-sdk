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
exports.BidRecommendationForTargetsResponse = exports.BidRecommendationLists = exports.BidRecommendationList = exports.BidRecommendationRequest = exports.BiddingTargetingExpressions = exports.BiddingTargetingExpression = exports.BiddingAutoPredicateType = exports.BiddingProductPredicateType = exports.BiddingKeywordPredicateType = exports.BidRecommendationsResponse = exports.KeywordBidRecommendationsData = exports.KeywordBidRecommendationsResponse = exports.AdGroupBidRecommendationsResponse = exports.SuggestedBid = exports.BidRecommendationsKeywords = exports.BidRecommendationsKeyword = exports.KeywordBidRecommendationsMatchType = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../keywords/types");
const types_2 = require("../ad-groups/types");
exports.KeywordBidRecommendationsMatchType = t.union([
    t.literal('exact'),
    t.literal('phrase'),
    t.literal('broad'),
]);
exports.BidRecommendationsKeyword = t.strict({
    /**
     * The keyword text.
     */
    keyword: t.string,
    /**
     * The match type used to match the keyword to search query.
     */
    matchType: exports.KeywordBidRecommendationsMatchType,
});
exports.BidRecommendationsKeywords = t.array(exports.BidRecommendationsKeyword);
exports.SuggestedBid = t.strict({
    /**
     * The bid range start
     */
    rangeStart: t.number,
    /**
     * The bid range end
     */
    rangeEnd: t.number,
    /**
     * The suggested bid
     */
    suggested: t.number,
});
exports.AdGroupBidRecommendationsResponse = t.strict({
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: types_2.AdGroupId,
    /**
     * Suggested Bid
     */
    suggestedBid: exports.SuggestedBid,
});
exports.KeywordBidRecommendationsResponse = t.intersection([
    exports.AdGroupBidRecommendationsResponse,
    t.strict({
        keywordId: types_1.KeywordId,
    }),
]);
exports.KeywordBidRecommendationsData = t.strict({
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: types_2.AdGroupId,
    /**
     * Suggested Bid
     */
    keywords: exports.BidRecommendationsKeywords,
});
const BidRecommendationSuccesResponse = t.intersection([
    t.strict({
        /**
         * The resulting status code for retrieving the bid.
         */
        code: t.literal('SUCCESS'),
        suggestedBid: exports.SuggestedBid,
    }),
    exports.BidRecommendationsKeyword,
]);
const BidRecommendationNotFound = t.strict({
    /**
     * The response code
     */
    code: t.literal('NOT_FOUND'),
});
exports.BidRecommendationsResponse = t.strict({
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: types_2.AdGroupId,
    recommendations: t.array(t.union([BidRecommendationSuccesResponse, BidRecommendationNotFound])),
});
/**
 * Keyword Predicate Type
 */
exports.BiddingKeywordPredicateType = t.union([
    t.literal('queryBroadMatches'),
    t.literal('queryPhraseMatches'),
    t.literal('queryExactMatches'),
]);
/**
 * Product Predicate Type
 */
exports.BiddingProductPredicateType = t.union([
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
/**
 * Keyword Predicate Type
 */
exports.BiddingAutoPredicateType = t.union([
    t.literal('queryBroadRelMatches'),
    t.literal('queryHighRelMatches'),
    t.literal('asinSubstituteRelated'),
    t.literal('asinAccessoryRelated'),
]);
/**
 * Targeting Expression
 */
exports.BiddingTargetingExpression = t.strict({
    /**
     * The expression value
     */
    value: t.string,
    type: t.union([
        exports.BiddingKeywordPredicateType,
        exports.BiddingProductPredicateType,
        exports.BiddingAutoPredicateType,
    ]),
});
exports.BiddingTargetingExpressions = t.array(exports.BiddingTargetingExpression);
exports.BidRecommendationRequest = t.strict({
    /**
     * The adGroupId where the targeting expression exists, to generate a bid recommendation
     */
    adGroupId: types_2.AdGroupId,
    /**
     * List of targeting expressions to generate recommendations for
     */
    expressions: exports.BiddingTargetingExpressions,
});
const BidRecommendationForTargetsSuccess = t.strict({
    /**
     * The suggested bid
     */
    suggestedBid: exports.SuggestedBid,
    /**
     * The targeting expression
     */
    expression: exports.BiddingTargetingExpression,
    /**
     * The response code
     */
    code: t.literal('SUCCESS'),
});
const BidRecommendationInvalidArgument = t.strict({
    /**
     * The response code
     */
    code: t.literal('INVALID_ARGUMENT'),
});
const BidRecommendationInternalError = t.strict({
    /**
     * The response code
     */
    code: t.literal('INTERNAL_ERROR'),
});
const BidRecommendationServerIsBusy = t.strict({
    /**
     * The response code
     */
    code: t.literal('SERVER_IS_BUSY'),
});
const BidRecommendationUnauthorized = t.strict({
    /**
     * The response code
     */
    code: t.literal('UNAUTHORIZED'),
});
exports.BidRecommendationList = t.union([
    BidRecommendationForTargetsSuccess,
    BidRecommendationInvalidArgument,
    BidRecommendationNotFound,
    BidRecommendationInternalError,
    BidRecommendationServerIsBusy,
    BidRecommendationUnauthorized,
]);
exports.BidRecommendationLists = t.array(exports.BidRecommendationList);
/**
 * Bid Recommendation for Targets Response
 */
exports.BidRecommendationForTargetsResponse = t.strict({
    /**
     * The adGroup Id for the recommended bids
     */
    adGroupId: types_2.AdGroupId,
    /**
     * The bid recommendations
     */
    recommendations: exports.BidRecommendationLists,
});
//# sourceMappingURL=types.js.map