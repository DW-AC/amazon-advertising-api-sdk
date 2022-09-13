import * as t from 'io-ts';
export declare const SponsoredBrandsProductRecommendationFilterType: t.LiteralC<"ASINS">;
export declare type SponsoredBrandsProductRecommendationFilterType = t.TypeOf<typeof SponsoredBrandsProductRecommendationFilterType>;
export declare const SponsoredBrandsProductRecommendationsRequest: t.ExactC<t.TypeC<{
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.StringC;
    /**
     * Sets a limit on the number of results returned by an operation.
     */
    maxResults: t.NumberC;
    /**
     * Restricts recommendations to the criteria specified in the filters.
     */
    filters: t.ArrayC<t.ExactC<t.TypeC<{
        filterType: t.LiteralC<"ASINS">;
        values: t.ArrayC<t.StringC>;
    }>>>;
}>>;
export declare type SponsoredBrandsProductRecommendationsRequest = t.TypeOf<typeof SponsoredBrandsProductRecommendationsRequest>;
export declare const SponsoredBrandsProductRecommendationsResponse: t.ExactC<t.TypeC<{
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.StringC;
    recommendedProducts: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The recommended target ASIN.
         */
        recommendedTargetAsin: t.StringC;
    }>>>;
}>>;
export declare type SponsoredBrandsProductRecommendationsResponse = t.TypeOf<typeof SponsoredBrandsProductRecommendationsResponse>;
export declare const SponsoredBrandsCategoryRecommendationsRequest: t.ExactC<t.TypeC<{
    /**
     * A list of ASINs.
     */
    asins: t.ArrayC<t.StringC>;
}>>;
export declare type SponsoredBrandsCategoryRecommendationsRequest = t.TypeOf<typeof SponsoredBrandsCategoryRecommendationsRequest>;
export declare const SponsoredBrandsCategoryId: t.NumberC;
export declare type SponsoredBrandsCategoryId = t.TypeOf<typeof SponsoredBrandsCategoryId>;
export declare const SponsoredBrandsCategoryRecommendationsResponse: t.ExactC<t.TypeC<{
    categoryRecommendationResults: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The category identifier.
         */
        id: t.NumberC;
        /**
         * The category name.
         */
        name: t.StringC;
        /**
         * Set to true if the category can be targeted in a targeting expression, and false if not.
         */
        isTargetable: t.BooleanC;
        /**
         * The path of the category within the category catalogue.
         */
        path: t.StringC;
    }>>>;
}>>;
export declare type SponsoredBrandsCategoryRecommendationsResponse = t.TypeOf<typeof SponsoredBrandsCategoryRecommendationsResponse>;
export declare const SponsoredBrandsBrandRecommendationsRequest: t.PartialC<{
    /**
     * The category identifier for which to get recommendations.
     */
    categoryId: t.NumberC;
    /**
     * The keyword for which to get recommendations.
     */
    keyword: t.StringC;
}>;
export declare type SponsoredBrandsBrandRecommendationsRequest = t.TypeOf<typeof SponsoredBrandsBrandRecommendationsRequest>;
export declare const SponsoredBrandsBrandRecommendationsResponse: t.ExactC<t.TypeC<{
    brandRecommendationResults: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The Brand identifier.
         */
        id: t.NumberC;
        /**
         * The Brand name
         */
        name: t.StringC;
    }>>>;
}>>;
export declare type SponsoredBrandsBrandRecommendationsResponse = t.TypeOf<typeof SponsoredBrandsBrandRecommendationsResponse>;
export declare const SponsoredBrandsKeywordExpressionType: t.UnionC<[t.LiteralC<"broad">, t.LiteralC<"exact">, t.LiteralC<"phrase">]>;
export declare type SponsoredBrandsKeywordExpressionType = t.TypeOf<typeof SponsoredBrandsKeywordExpressionType>;
export declare const RecommendationId: t.StringC;
export declare type RecommendationId = t.TypeOf<typeof RecommendationId>;
export declare const SponsoredBrandsBidsRecommendationRequest: t.ExactC<t.TypeC<{
    /**
     * The identifier of the campaign for which bid recommendations are created.
     */
    campaignId: t.NumberC;
    targets: t.ArrayC<t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
        value: t.StringC;
    }>>>;
    keywords: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The match type.
         * For more information, see match types in the Amazon Advertising support center.
         */
        matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
        /**
         * The text of the keyword. Maximum of 10 words.
         */
        keywordText: t.StringC;
    }>>>;
}>>;
export declare type SponsoredBrandsBidsRecommendationRequest = t.TypeOf<typeof SponsoredBrandsBidsRecommendationRequest>;
export declare const SponsoredBrandsBidsRecommendationResponse: t.ExactC<t.TypeC<{
    /**
     * Lists the bid recommendations for the keywords specified in the request.
     */
    keywordsBidsRecommendationSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The identifier of the keyword bid recommendation.
         */
        recommendationId: t.StringC;
        recommendedBid: t.ExactC<t.TypeC<{
            rangeStart: t.NumberC;
            rangeEnd: t.NumberC;
            recommended: t.NumberC;
        }>>;
        keyword: t.ExactC<t.TypeC<{
            /**
             * The match type.
             * For more information, see match types in the Amazon Advertising support center.
             */
            matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
            /**
             * The text of the keyword. Maximum of 10 words.
             */
            keywordText: t.StringC;
        }>>;
        keywordIndex: t.NumberC;
    }>>>;
    /**
     * Lists errors that occured during creation of keyword bid recommendations.
     */
    keywordsBidsRecommendationErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        keyword: t.ExactC<t.TypeC<{
            /**
             * The text of the keyword. Maximum of 10 words.
             */
            value: t.StringC;
            /**
             * The match type. For more information, see match types in the Amazon Advertising support center.
             */
            type: t.UnionC<[t.LiteralC<"broad">, t.LiteralC<"exact">, t.LiteralC<"phrase">]>;
        }>>;
        keywordIndex: t.NumberC;
    }>>>;
    /**
     * Lists the bid recommendations for the keywords or targets specified in the request.
     */
    targetsBidsRecommendationSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The identifier of the target bid recommendation.
         */
        recommendationId: t.StringC;
        recommendedBid: t.ExactC<t.TypeC<{
            rangeStart: t.NumberC;
            rangeEnd: t.NumberC;
            recommended: t.NumberC;
        }>>;
        targets: t.ArrayC<t.ExactC<t.TypeC<{
            type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
            value: t.StringC;
        }>>>;
        /**
         * Correlates the keyword to the keyword array index specified in the request. Zero-based.
         */
        targetsIndex: t.NumberC;
    }>>>;
    /**
     * Lists errors that occured during creation of target bid recommendations.
     */
    targetsBidsRecommendationErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targets: t.ArrayC<t.ExactC<t.TypeC<{
            type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
            value: t.StringC;
        }>>>;
        /**
         * Correlates the keyword to the keyword array index specified in the request. Zero-based.
         */
        targetsIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsBidsRecommendationResponse = t.TypeOf<typeof SponsoredBrandsBidsRecommendationResponse>;
