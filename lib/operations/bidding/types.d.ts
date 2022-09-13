import * as t from 'io-ts';
export declare const KeywordBidRecommendationsMatchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
export declare type KeywordBidRecommendationsMatchType = t.TypeOf<typeof KeywordBidRecommendationsMatchType>;
export declare const BidRecommendationsKeyword: t.ExactC<t.TypeC<{
    /**
     * The keyword text.
     */
    keyword: t.StringC;
    /**
     * The match type used to match the keyword to search query.
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
}>>;
export declare const BidRecommendationsKeywords: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The keyword text.
     */
    keyword: t.StringC;
    /**
     * The match type used to match the keyword to search query.
     */
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
}>>>;
export declare const SuggestedBid: t.ExactC<t.TypeC<{
    /**
     * The bid range start
     */
    rangeStart: t.NumberC;
    /**
     * The bid range end
     */
    rangeEnd: t.NumberC;
    /**
     * The suggested bid
     */
    suggested: t.NumberC;
}>>;
export declare type SuggestedBid = t.TypeOf<typeof SuggestedBid>;
export declare const AdGroupBidRecommendationsResponse: t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: t.NumberC;
    /**
     * Suggested Bid
     */
    suggestedBid: t.ExactC<t.TypeC<{
        /**
         * The bid range start
         */
        rangeStart: t.NumberC;
        /**
         * The bid range end
         */
        rangeEnd: t.NumberC;
        /**
         * The suggested bid
         */
        suggested: t.NumberC;
    }>>;
}>>;
export declare type AdGroupBidRecommendationsResponse = t.TypeOf<typeof AdGroupBidRecommendationsResponse>;
export declare const KeywordBidRecommendationsResponse: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: t.NumberC;
    /**
     * Suggested Bid
     */
    suggestedBid: t.ExactC<t.TypeC<{
        /**
         * The bid range start
         */
        rangeStart: t.NumberC;
        /**
         * The bid range end
         */
        rangeEnd: t.NumberC;
        /**
         * The suggested bid
         */
        suggested: t.NumberC;
    }>>;
}>>, t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
}>>]>;
export declare type KeywordBidRecommendationsResponse = t.TypeOf<typeof KeywordBidRecommendationsResponse>;
export declare const KeywordBidRecommendationsData: t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: t.NumberC;
    /**
     * Suggested Bid
     */
    keywords: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The keyword text.
         */
        keyword: t.StringC;
        /**
         * The match type used to match the keyword to search query.
         */
        matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    }>>>;
}>>;
export declare type KeywordBidRecommendationsData = t.TypeOf<typeof KeywordBidRecommendationsData>;
export declare const BidRecommendationsResponse: t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group that a bid was requested for.
     */
    adGroupId: t.NumberC;
    recommendations: t.ArrayC<t.UnionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The resulting status code for retrieving the bid.
         */
        code: t.LiteralC<"SUCCESS">;
        suggestedBid: t.ExactC<t.TypeC<{
            /**
             * The bid range start
             */
            rangeStart: t.NumberC;
            /**
             * The bid range end
             */
            rangeEnd: t.NumberC;
            /**
             * The suggested bid
             */
            suggested: t.NumberC;
        }>>;
    }>>, t.ExactC<t.TypeC<{
        /**
         * The keyword text.
         */
        keyword: t.StringC;
        /**
         * The match type used to match the keyword to search query.
         */
        matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
    }>>]>, t.ExactC<t.TypeC<{
        /**
         * The response code
         */
        code: t.LiteralC<"NOT_FOUND">;
    }>>]>>;
}>>;
export declare type BidRecommendationsResponse = t.TypeOf<typeof BidRecommendationsResponse>;
/**
 * Keyword Predicate Type
 */
export declare const BiddingKeywordPredicateType: t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>;
export declare type BiddingKeywordPredicateType = t.TypeOf<typeof BiddingKeywordPredicateType>;
/**
 * Product Predicate Type
 */
export declare const BiddingProductPredicateType: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
export declare type BiddingProductPredicateType = t.TypeOf<typeof BiddingProductPredicateType>;
/**
 * Keyword Predicate Type
 */
export declare const BiddingAutoPredicateType: t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
export declare type BiddingAutoPredicateType = t.TypeOf<typeof BiddingAutoPredicateType>;
/**
 * Targeting Expression
 */
export declare const BiddingTargetingExpression: t.ExactC<t.TypeC<{
    /**
     * The expression value
     */
    value: t.StringC;
    type: t.UnionC<[t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>, t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>, t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>]>;
}>>;
export declare const BiddingTargetingExpressions: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The expression value
     */
    value: t.StringC;
    type: t.UnionC<[t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>, t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>, t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>]>;
}>>>;
export declare const BidRecommendationRequest: t.ExactC<t.TypeC<{
    /**
     * The adGroupId where the targeting expression exists, to generate a bid recommendation
     */
    adGroupId: t.NumberC;
    /**
     * List of targeting expressions to generate recommendations for
     */
    expressions: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The expression value
         */
        value: t.StringC;
        type: t.UnionC<[t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>, t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>, t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>]>;
    }>>>;
}>>;
export declare type BidRecommendationRequest = t.TypeOf<typeof BidRecommendationRequest>;
export declare const BidRecommendationList: t.UnionC<[t.ExactC<t.TypeC<{
    /**
     * The suggested bid
     */
    suggestedBid: t.ExactC<t.TypeC<{
        /**
         * The bid range start
         */
        rangeStart: t.NumberC;
        /**
         * The bid range end
         */
        rangeEnd: t.NumberC;
        /**
         * The suggested bid
         */
        suggested: t.NumberC;
    }>>;
    /**
     * The targeting expression
     */
    expression: t.ExactC<t.TypeC<{
        /**
         * The expression value
         */
        value: t.StringC;
        type: t.UnionC<[t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>, t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>, t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>]>;
    }>>;
    /**
     * The response code
     */
    code: t.LiteralC<"SUCCESS">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"INVALID_ARGUMENT">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"NOT_FOUND">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"INTERNAL_ERROR">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"SERVER_IS_BUSY">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"UNAUTHORIZED">;
}>>]>;
export declare const BidRecommendationLists: t.ArrayC<t.UnionC<[t.ExactC<t.TypeC<{
    /**
     * The suggested bid
     */
    suggestedBid: t.ExactC<t.TypeC<{
        /**
         * The bid range start
         */
        rangeStart: t.NumberC;
        /**
         * The bid range end
         */
        rangeEnd: t.NumberC;
        /**
         * The suggested bid
         */
        suggested: t.NumberC;
    }>>;
    /**
     * The targeting expression
     */
    expression: t.ExactC<t.TypeC<{
        /**
         * The expression value
         */
        value: t.StringC;
        type: t.UnionC<[t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>, t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>, t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>]>;
    }>>;
    /**
     * The response code
     */
    code: t.LiteralC<"SUCCESS">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"INVALID_ARGUMENT">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"NOT_FOUND">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"INTERNAL_ERROR">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"SERVER_IS_BUSY">;
}>>, t.ExactC<t.TypeC<{
    /**
     * The response code
     */
    code: t.LiteralC<"UNAUTHORIZED">;
}>>]>>;
/**
 * Bid Recommendation for Targets Response
 */
export declare const BidRecommendationForTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * The adGroup Id for the recommended bids
     */
    adGroupId: t.NumberC;
    /**
     * The bid recommendations
     */
    recommendations: t.ArrayC<t.UnionC<[t.ExactC<t.TypeC<{
        /**
         * The suggested bid
         */
        suggestedBid: t.ExactC<t.TypeC<{
            /**
             * The bid range start
             */
            rangeStart: t.NumberC;
            /**
             * The bid range end
             */
            rangeEnd: t.NumberC;
            /**
             * The suggested bid
             */
            suggested: t.NumberC;
        }>>;
        /**
         * The targeting expression
         */
        expression: t.ExactC<t.TypeC<{
            /**
             * The expression value
             */
            value: t.StringC;
            type: t.UnionC<[t.UnionC<[t.LiteralC<"queryBroadMatches">, t.LiteralC<"queryPhraseMatches">, t.LiteralC<"queryExactMatches">]>, t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>, t.UnionC<[t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>]>;
        }>>;
        /**
         * The response code
         */
        code: t.LiteralC<"SUCCESS">;
    }>>, t.ExactC<t.TypeC<{
        /**
         * The response code
         */
        code: t.LiteralC<"INVALID_ARGUMENT">;
    }>>, t.ExactC<t.TypeC<{
        /**
         * The response code
         */
        code: t.LiteralC<"NOT_FOUND">;
    }>>, t.ExactC<t.TypeC<{
        /**
         * The response code
         */
        code: t.LiteralC<"INTERNAL_ERROR">;
    }>>, t.ExactC<t.TypeC<{
        /**
         * The response code
         */
        code: t.LiteralC<"SERVER_IS_BUSY">;
    }>>, t.ExactC<t.TypeC<{
        /**
         * The response code
         */
        code: t.LiteralC<"UNAUTHORIZED">;
    }>>]>>;
}>>;
export declare type BidRecommendationForTargetsResponse = t.TypeOf<typeof BidRecommendationForTargetsResponse>;
