import * as t from 'io-ts';
export declare const TargetId: t.NumberC;
export declare type TargetId = t.TypeOf<typeof TargetId>;
export declare const TargetIds: t.ArrayC<t.NumberC>;
export declare type TargetIds = t.TypeOf<typeof TargetIds>;
export declare const TargetingClauseState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type TargetingClauseState = t.TypeOf<typeof TargetingClauseState>;
export declare const TargetingExpressionType: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
export declare type TargetingExpressionType = t.TypeOf<typeof TargetingExpressionType>;
export declare const TargetingExpression: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The type of intent
     */
    type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
}>>, t.PartialC<{
    /**
     * The value which should be targeted
     */
    value: t.StringC;
}>]>;
export declare type TargetingExpression = t.TypeOf<typeof TargetingExpression>;
export declare const TargetingExpressions: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The type of intent
     */
    type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
}>>, t.PartialC<{
    /**
     * The value which should be targeted
     */
    value: t.StringC;
}>]>>;
export declare type TargetingExpressions = t.TypeOf<typeof TargetingExpressions>;
/**
 * The type of expression
 */
export declare const ExpressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
export declare type ExpressionType = t.TypeOf<typeof ExpressionType>;
/**
 * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
 */
export declare const TargetingClauseServingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"PORTFOLIO_ENDED">]>;
export declare type TargetingClauseServingStatus = t.TypeOf<typeof TargetingClauseServingStatus>;
export declare const TargetingClause: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the target
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The type of intent
         */
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        /**
         * The value which should be targeted
         */
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>, t.PartialC<{
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.NumberC;
}>]>;
export declare type TargetingClause = t.TypeOf<typeof TargetingClause>;
export declare const TargetingClauses: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the target
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The type of intent
         */
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        /**
         * The value which should be targeted
         */
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>, t.PartialC<{
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.NumberC;
}>]>>;
export declare type TargetingClauses = t.TypeOf<typeof TargetingClause>;
export declare const TargetingClauseExtended: t.IntersectionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the target
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The type of intent
         */
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        /**
         * The value which should be targeted
         */
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>, t.PartialC<{
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.NumberC;
}>]>, t.ExactC<t.TypeC<{
    /**
     * The date the targeting was created as epoch time in milliseconds.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the targeting was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"PORTFOLIO_ENDED">]>;
}>>]>;
export declare type TargetingClauseExtended = t.TypeOf<typeof TargetingClauseExtended>;
export declare const ProductRecommendationRequest: t.ExactC<t.TypeC<{
    /**
     * The number of recommendations to return in one page.
     */
    pageSize: t.NumberC;
    /**
     * The number of pages to index into the result set
     */
    pageNumber: t.NumberC;
    /**
     * A list of asins for which to get recommendations for
     */
    asins: t.ArrayC<t.StringC>;
}>>;
export declare type ProductRecommendationRequest = t.TypeOf<typeof ProductRecommendationRequest>;
export declare const RecommendedTargetAsin: t.ExactC<t.TypeC<{
    /**
     * The recommended asin to target
     */
    recommendedTargetAsin: t.StringC;
}>>;
export declare type RecommendedTargetAsin = t.TypeOf<typeof RecommendedTargetAsin>;
export declare const RecommendedTargetAsins: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The recommended asin to target
     */
    recommendedTargetAsin: t.StringC;
}>>>;
export declare const ProductRecommendationResponse: t.ExactC<t.TypeC<{
    /**
     * The number of recommendations from which there are to page through.
     */
    totalResultCount: t.NumberC;
    /**
     * The number of pages to index into the result set
     */
    recommendedProducts: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The recommended asin to target
         */
        recommendedTargetAsin: t.StringC;
    }>>>;
}>>;
export declare type ProductRecommendationResponse = t.TypeOf<typeof ProductRecommendationResponse>;
export declare const CategoryId: t.NumberC;
export declare type CategoryId = t.TypeOf<typeof CategoryId>;
export declare const CategoryResponse: t.ExactC<t.TypeC<{
    /**
     * The ID of the category
     */
    id: t.NumberC;
    /**
     * The name of the category
     */
    name: t.StringC;
    /**
     * A boolean describing whether this category can be targeted or not in a targeting expression
     */
    isTargetable: t.BooleanC;
    /**
     * The path of the category within the category catalogue
     */
    path: t.StringC;
}>>;
export declare type CategoryResponse = t.TypeOf<typeof CategoryResponse>;
export declare const AgeRange: t.ExactC<t.TypeC<{
    /**
     * The id of the age range.
     */
    id: t.NumberC;
    /**
     * The name of the age range
     */
    name: t.StringC;
}>>;
export declare type AgeRange = t.TypeOf<typeof AgeRange>;
export declare const AgeRanges: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The id of the age range.
     */
    id: t.NumberC;
    /**
     * The name of the age range
     */
    name: t.StringC;
}>>>;
export declare const BrandId: t.NumberC;
export declare type BrandId = t.TypeOf<typeof BrandId>;
export declare const BrandResponse: t.ExactC<t.TypeC<{
    /**
     * The ID of the brand. This is for use in targeting expressions.
     */
    id: t.NumberC;
    /**
     * The name of the brand
     */
    name: t.StringC;
}>>;
export declare type BrandResponse = t.TypeOf<typeof BrandResponse>;
export declare const BrandResponses: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The ID of the brand. This is for use in targeting expressions.
     */
    id: t.NumberC;
    /**
     * The name of the brand
     */
    name: t.StringC;
}>>>;
export declare const RefinementsResponse: t.ExactC<t.TypeC<{
    /**
     * The ID of the category
     */
    categoryId: t.NumberC;
    /**
     * An array of age ranges this category supports.  Not all categories have age ranges.
     */
    ageRanges: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The id of the age range.
         */
        id: t.NumberC;
        /**
         * The name of the age range
         */
        name: t.StringC;
    }>>>;
    /**
     * Brands that can be found within this category.
     */
    brands: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The ID of the brand. This is for use in targeting expressions.
         */
        id: t.NumberC;
        /**
         * The name of the brand
         */
        name: t.StringC;
    }>>>;
}>>;
export declare type RefinementsResponse = t.TypeOf<typeof RefinementsResponse>;
export declare const TargetingClauseResponse: t.PartialC<{
    /**
     * The ID of the target that was created/updated, if successful
     */
    targetId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.StringC;
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.StringC;
}>;
export declare type TargetingClauseResponse = t.TypeOf<typeof TargetingClauseResponse>;
export declare const CreateTargetingClausesParams: t.PartialC<{
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The type of intent
         */
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        /**
         * The value which should be targeted
         */
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.NumberC;
}>;
export declare type CreateTargetingClausesParams = t.TypeOf<typeof CreateTargetingClausesParams>;
export declare const ListTargetingClausesParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Restricts results to targets with state within the specified comma-separated list.
     * Possible filter types are: enabled, paused, or archived
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Restricts results to targets within campaigns specified in comma-separated list
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Restricts results to targets within ad groups specified in comma-separated list
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Restricts results to targets with the specified target Ids specified in comma-separated list
     */
    targetIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListTargetingClausesParams = t.TypeOf<typeof ListTargetingClausesParams>;
export declare const UpdateTargetingClausesParams: t.PartialC<{
    /**
     * The ID of the target
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        /**
         * The type of intent
         */
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        /**
         * The value which should be targeted
         */
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.NumberC;
}>;
export declare type UpdateTargetingClausesParams = t.TypeOf<typeof UpdateTargetingClausesParams>;
export declare const GetBrandRecommendationsParams: t.PartialC<{
    keyword: t.StringC;
    categoryId: t.NumberC;
}>;
export declare type GetBrandRecommendationsParams = t.TypeOf<typeof GetBrandRecommendationsParams>;
/**
 * A list of target states.
 */
export declare const SponsoredBrandsTargetState: t.UnionC<[t.LiteralC<"ENABLED">, t.LiteralC<"PAUSED">, t.LiteralC<"PENDING">, t.LiteralC<"ARCHIVED">, t.LiteralC<"DRAFT">]>;
export declare type SponsoredBrandsTargetState = t.TypeOf<typeof SponsoredBrandsTargetState>;
export declare const SponsoredBrandsFilterType: t.UnionC<[t.LiteralC<"STATE">, t.LiteralC<"CAMPAIGN_ID">, t.LiteralC<"AD_GROUP_ID">]>;
export declare type SponsoredBrandsFilterType = t.TypeOf<typeof SponsoredBrandsFilterType>;
export declare const SponsoredBrandsListTargetsRequest: t.ExactC<t.TypeC<{
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
     * Restricts results to targets with the specified filters.
     * Filters are inclusive. Filters are joined using 'and' logic.
     * Specify one type of each filter.
     * Specifying multiples of the same type of filter results in an error.
     */
    filters: t.ArrayC<t.ExactC<t.TypeC<{
        filterType: t.UnionC<[t.LiteralC<"STATE">, t.LiteralC<"CAMPAIGN_ID">, t.LiteralC<"AD_GROUP_ID">]>;
        values: t.ArrayC<t.UnionC<[t.UnionC<[t.LiteralC<"ENABLED">, t.LiteralC<"PAUSED">, t.LiteralC<"PENDING">, t.LiteralC<"ARCHIVED">, t.LiteralC<"DRAFT">]>, t.NumberC, t.NumberC]>>;
    }>>>;
}>>;
export declare type SponsoredBrandsListTargetsRequest = t.TypeOf<typeof SponsoredBrandsListTargetsRequest>;
export declare const SponsoredBrandsProductPredicateType: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
export declare type SponsoredBrandsProductPredicateType = t.TypeOf<typeof SponsoredBrandsProductPredicateType>;
export declare const SponsoredBrandsExpression: t.ExactC<t.TypeC<{
    type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
    value: t.StringC;
}>>;
export declare type SponsoredBrandsExpression = t.TypeOf<typeof SponsoredBrandsExpression>;
export declare const SponsoredBrandsExpressions: t.ArrayC<t.ExactC<t.TypeC<{
    type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
    value: t.StringC;
}>>>;
export declare type SponsoredBrandsExpressions = t.TypeOf<typeof SponsoredBrandsExpressions>;
export declare const SponsoredBrandsResolvedExpression: t.ExactC<t.TypeC<{
    type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
    value: t.StringC;
}>>;
export declare type SponsoredBrandsResolvedExpression = t.TypeOf<typeof SponsoredBrandsResolvedExpression>;
export declare const SponsoredBrandsResolvedExpressions: t.ArrayC<t.ExactC<t.TypeC<{
    type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
    value: t.StringC;
}>>>;
export declare type SponsoredBrandsResolvedExpressions = t.TypeOf<typeof SponsoredBrandsResolvedExpressions>;
export declare const SponsoredBrandsExpressionState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
export declare type SponsoredBrandsExpressionState = t.TypeOf<typeof SponsoredBrandsExpressionState>;
export declare const SponsoredBrandsTargetingClause: t.ExactC<t.TypeC<{
    /**
     * The target identifier.
     */
    targetId: t.NumberC;
    /**
     * The identifier of the ad group to which the target is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of the campaign to which the target is associated.
     */
    campaignId: t.NumberC;
    expressions: t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
        value: t.StringC;
    }>>;
    resolvedExpressions: t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
        value: t.StringC;
    }>>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
    /**
     * The associated bid.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see supported features.
     */
    bid: t.NumberC;
}>>;
export declare type SponsoredBrandsTargetingClause = t.TypeOf<typeof SponsoredBrandsTargetingClause>;
export declare const SponsoredBrandsTargetingClauses: t.ArrayC<t.ExactC<t.TypeC<{
    /**
     * The target identifier.
     */
    targetId: t.NumberC;
    /**
     * The identifier of the ad group to which the target is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of the campaign to which the target is associated.
     */
    campaignId: t.NumberC;
    expressions: t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
        value: t.StringC;
    }>>;
    resolvedExpressions: t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
        value: t.StringC;
    }>>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
    /**
     * The associated bid.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see supported features.
     */
    bid: t.NumberC;
}>>>;
export declare type SponsoredBrandsTargetingClauses = t.TypeOf<typeof SponsoredBrandsTargetingClauses>;
export declare const SponsoredBrandsListTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.StringC;
    targets: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The target identifier.
         */
        targetId: t.NumberC;
        /**
         * The identifier of the ad group to which the target is associated.
         */
        adGroupId: t.NumberC;
        /**
         * The identifier of the campaign to which the target is associated.
         */
        campaignId: t.NumberC;
        expressions: t.ExactC<t.TypeC<{
            type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
            value: t.StringC;
        }>>;
        resolvedExpressions: t.ExactC<t.TypeC<{
            type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
            value: t.StringC;
        }>>;
        state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
        /**
         * The associated bid.
         * Note that this value must be less than the budget associated with the Advertiser account.
         * For more information, see supported features.
         */
        bid: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsListTargetsResponse = t.TypeOf<typeof SponsoredBrandsListTargetsResponse>;
export declare const SponsoredBrandsUpdateTargetsRequest: t.PartialC<{
    /**
     * The identifier of the target.
     */
    targetId: t.NumberC;
    /**
     * The identifier of the ad group to which the target is associated.
     */
    adGroupId: t.NumberC;
    /**
     * The identifier of the campaign to which the target is associated.
     */
    campaignId: t.NumberC;
    /**
     * The state of the target.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
    /**
     * The associated bid.
     * Note that this value must be less than the budget associated with the Advertiser account.
     * For more information, see supported features.
     */
    bid: t.NumberC;
}>;
export declare type SponsoredBrandsUpdateTargetsRequest = t.TypeOf<typeof SponsoredBrandsUpdateTargetsRequest>;
export declare const SponsoredBrandsUpdateTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * Lists the successfully updated targets.
     * Note that targets in the response are correlated to targets in the request using the targetRequestIndex field.
     * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request.
     */
    updateTargetSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The identifier of a target.
         */
        targetId: t.NumberC;
        /**
         * Correlates the target to the target array index specified in the request. Zero-based.
         */
        targetRequestIndex: t.NumberC;
    }>>>;
    /**
     * Lists errors that occured during target update.
     * Note that errors are correlated to target update requests by the targetRequestIndex field.
     * This field corresponds to the order of the target in the request.
     * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request array.
     */
    updateTargetErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsUpdateTargetsResponse = t.TypeOf<typeof SponsoredBrandsUpdateTargetsResponse>;
export declare const SponsoredBrandsCreateTargetsRequest: t.ExactC<t.TypeC<{
    targets: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The identifier of an existing ad group.
         * The newly created target is associated to this ad group.
         */
        adGroupId: t.NumberC;
        /**
         * The identifier of an existing campaign.
         * The newly created target is associated to this campaign.
         */
        campaignId: t.NumberC;
        expressions: t.ExactC<t.TypeC<{
            type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
            value: t.StringC;
        }>>;
        /**
         * The associated bid.
         * Note that this value must be less than the budget associated with the Advertiser account.
         * For more information, see supported features.
         */
        bid: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsCreateTargetsRequest = t.TypeOf<typeof SponsoredBrandsCreateTargetsRequest>;
export declare const SponsoredBrandsCreateTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * Lists the successfully created targets.
     * Note that targets in the response are correlated to targets in the request using the targetRequestIndex field.
     * For example, if targetRequestIndex is set to 2, the values correlate to the third target object in the request.
     */
    createTargetSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * Correlates the target to the target array index specified in the request. Zero-based.
         */
        targetRequestIndex: t.NumberC;
        /**
         * The identifier of a target.
         */
        targetId: t.NumberC;
    }>>>;
    /**
     * Lists errors that occured during target creation.
     * Note that errors are correlated to target create requests by the targetRequestIndex field.
     * This field corresponds to the order of the target object in the request.
     * For example, if targetRequestIndex is set to 3, an error occured during creation of the fourth target in the request.
     */
    createTargetErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsCreateTargetsResponse = t.TypeOf<typeof SponsoredBrandsCreateTargetsResponse>;
export declare const SponsoredBrandsTargetingClauseResponse: t.PartialC<{
    /**
     * The target identifier.
     */
    targetId: t.NumberC;
    code: t.StringC;
    details: t.StringC;
}>;
export declare type SponsoredBrandsTargetingClauseResponse = t.TypeOf<typeof SponsoredBrandsTargetingClauseResponse>;
export declare const SponsoredBrandsBatchGetTargetsRequest: t.ExactC<t.TypeC<{
    targetIds: t.ArrayC<t.NumberC>;
}>>;
export declare type SponsoredBrandsBatchGetTargetsRequest = t.TypeOf<typeof SponsoredBrandsBatchGetTargetsRequest>;
export declare const SponsoredBrandsBatchGetTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * A list of targeting clause objects.
     * Note that each targeting clause object is correlated to the list request by the targetRequestIndex field.
     * This field corresponds to the order of the targeting identifier in the request.
     */
    batchGetTargetSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        targetingClause: t.ExactC<t.TypeC<{
            /**
             * The target identifier.
             */
            targetId: t.NumberC;
            /**
             * The identifier of the ad group to which the target is associated.
             */
            adGroupId: t.NumberC;
            /**
             * The identifier of the campaign to which the target is associated.
             */
            campaignId: t.NumberC;
            expressions: t.ExactC<t.TypeC<{
                type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
                value: t.StringC;
            }>>;
            resolvedExpressions: t.ExactC<t.TypeC<{
                type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
                value: t.StringC;
            }>>;
            state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
            /**
             * The associated bid.
             * Note that this value must be less than the budget associated with the Advertiser account.
             * For more information, see supported features.
             */
            bid: t.NumberC;
        }>>;
        targetRequestIndex: t.NumberC;
    }>>>;
    /**
     * A list of target identifiers that were not found.
     * Note that each target identifier is correlated to the list request by the targetRequestIndex field.
     * This field corresponds to the order of the target identifier in the request.
     */
    batchGetTargetErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsBatchGetTargetsResponse = t.TypeOf<typeof SponsoredBrandsBatchGetTargetsResponse>;
