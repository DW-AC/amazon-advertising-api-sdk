import * as t from 'io-ts';
export declare const NegativeTargetId: t.NumberC;
export declare type NegativeTargetId = t.TypeOf<typeof NegativeTargetId>;
export declare const SponsoredDisplayNegativeTargetingExpressionQueryType: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
export declare type SponsoredDisplayNegativeTargetingExpressionQueryType = t.TypeOf<typeof SponsoredDisplayNegativeTargetingExpressionQueryType>;
export declare const SponsoredDisplayNegativeTargetingExpression: t.ExactC<t.TypeC<{
    /**
     * The intent type.
     */
    type: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
    /**
     * The value to be negatively targeted. Used only in manual expressions.
     */
    value: t.StringC;
}>>;
export declare type SponsoredDisplayNegativeTargetingExpression = t.TypeOf<typeof SponsoredDisplayNegativeTargetingExpression>;
export declare const CreateSponsoredDisplayNegativeTargetingClausesParams: t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
    /**
     * The expression to negatively match against.
     */
    expression: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The intent type.
         */
        type: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
        /**
         * The value to be negatively targeted. Used only in manual expressions.
         */
        value: t.StringC;
    }>>>;
}>>;
export declare type CreateSponsoredDisplayNegativeTargetingClausesParams = t.TypeOf<typeof CreateSponsoredDisplayNegativeTargetingClausesParams>;
export declare const SponsoredDisplayNegativeTargetingClause: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
    /**
     * The expression to negatively match against.
     */
    expression: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The intent type.
         */
        type: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
        /**
         * The value to be negatively targeted. Used only in manual expressions.
         */
        value: t.StringC;
    }>>>;
}>>, t.ExactC<t.TypeC<{
    targetId: t.NumberC;
}>>]>;
export declare type SponsoredDisplayNegativeTargetingClause = t.TypeOf<typeof SponsoredDisplayNegativeTargetingClause>;
export declare const SponsoredDisplayNegativeTargetingClauseExtended: t.IntersectionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
    /**
     * The expression to negatively match against.
     */
    expression: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The intent type.
         */
        type: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
        /**
         * The value to be negatively targeted. Used only in manual expressions.
         */
        value: t.StringC;
    }>>>;
}>>, t.ExactC<t.TypeC<{
    targetId: t.NumberC;
}>>]>, t.ExactC<t.TypeC<{
    /**
     * The date the negative targeting was created as epoch time in milliseconds.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the negative targeting was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"PORTFOLIO_ENDED">]>;
}>>]>;
export declare type SponsoredDisplayNegativeTargetingClauseExtended = t.TypeOf<typeof SponsoredDisplayNegativeTargetingClauseExtended>;
export declare const UpdateSponsoredDisplayNegativeTargetingClausesParams: t.ExactC<t.TypeC<{
    targetId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>;
export declare type UpdateSponsoredDisplayNegativeTargetingClausesParams = t.TypeOf<typeof UpdateSponsoredDisplayNegativeTargetingClausesParams>;
export declare const NegativeTargetingClauseResponse: t.PartialC<{
    /**
     * The ID of the negative target that was created/updated, if successful
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
export declare type NegativeTargetingClauseResponse = t.TypeOf<typeof NegativeTargetingClauseResponse>;
export declare const CreateNegativeTargetingClausesParams: t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign to which this negative target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>;
export declare type CreateNegativeTargetingClausesParams = t.TypeOf<typeof CreateNegativeTargetingClausesParams>;
export declare const NegativeTargetingClause: t.ExactC<t.TypeC<{
    /**
     * The ID of the negative target
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this negative target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>;
export declare type NegativeTargetingClause = t.TypeOf<typeof NegativeTargetingClause>;
export declare const NegativeTargetingClauseExtended: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the negative target
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this negative target belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>, t.ExactC<t.TypeC<{
    /**
     * The date the negative targeting was created as epoch time in milliseconds.
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the negative targeting was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: t.UnionC<[t.LiteralC<"TARGETING_CLAUSE_ARCHIVED">, t.LiteralC<"TARGETING_CLAUSE_PAUSED">, t.LiteralC<"TARGETING_CLAUSE_STATUS_LIVE">, t.LiteralC<"TARGETING_CLAUSE_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"PORTFOLIO_ENDED">]>;
}>>]>;
export declare type NegativeTargetingClauseExtended = t.TypeOf<typeof NegativeTargetingClauseExtended>;
export declare const ListNegativeTargetingClausesParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Restricts results to targets with state within the specified comma-separated list.
     * Possible filter types are: enabled, paused, or archived
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * Restricts results to targets within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Restricts results to targets within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Restricts results to targets with the specified target Ids specified in comma-separated list.
     */
    targetIdFilter: t.ArrayC<t.NumberC>;
}>]>;
export declare type ListNegativeTargetingClausesParams = t.TypeOf<typeof ListNegativeTargetingClausesParams>;
export declare const UpdateNegativeTargetingClausesParams: t.PartialC<{
    /**
     * The ID of the negative target.
     */
    targetId: t.NumberC;
    /**
     * The ID of the campaign to which this negative target belongs.
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: t.NumberC;
    /**
     * Advertiser-specified state of the negative target.
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The expression to match against search queries.
     */
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        value: t.StringC;
    }>]>>;
    /**
     * The type of expression.
     */
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>;
export declare type UpdateNegativeTargetingClausesParams = t.TypeOf<typeof UpdateNegativeTargetingClausesParams>;
export declare const SponsoredBrandsListNegativeTargetsRequest: t.ExactC<t.TypeC<{
    nextToken: t.StringC;
    maxResults: t.NumberC;
    filters: t.ArrayC<t.ExactC<t.TypeC<{
        filterType: t.UnionC<[t.LiteralC<"STATE">, t.LiteralC<"CAMPAIGN_ID">, t.LiteralC<"AD_GROUP_ID">]>;
        values: t.ArrayC<t.UnionC<[t.UnionC<[t.LiteralC<"ENABLED">, t.LiteralC<"PAUSED">, t.LiteralC<"PENDING">, t.LiteralC<"ARCHIVED">, t.LiteralC<"DRAFT">]>, t.NumberC, t.NumberC]>>; /**
         * The target identifier.
         */
    }>>>;
}>>;
export declare type SponsoredBrandsListNegativeTargetsRequest = t.TypeOf<typeof SponsoredBrandsListNegativeTargetsRequest>;
export declare const SponsoredBrandsListNegativeTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.StringC;
    negativeTargets: t.ArrayC<t.ExactC<t.TypeC<{
        targetId: t.NumberC;
        adGroupId: t.NumberC;
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
        bid: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsListNegativeTargetsResponse = t.TypeOf<typeof SponsoredBrandsListNegativeTargetsResponse>;
export declare const SponsoredBrandsUpdateNegativeTargetsRequest: t.ExactC<t.TypeC<{
    negativeTargets: t.ArrayC<t.PartialC<{
        /**
         * The target identifier.
         */
        targetId: t.NumberC;
        /**
         * The identifier of an existing ad group. The newly created target is associated to this ad group.
         */
        adGroupId: t.NumberC;
        state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
    }>>;
}>>;
export declare type SponsoredBrandsUpdateNegativeTargetsRequest = t.TypeOf<typeof SponsoredBrandsUpdateNegativeTargetsRequest>;
export declare const SponsoredBrandsUpdateNegativeTargetsResponse: t.ExactC<t.TypeC<{
    updateTargetSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
    updateTargetErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsUpdateNegativeTargetsResponse = t.TypeOf<typeof SponsoredBrandsUpdateNegativeTargetsResponse>;
export declare const SponsoredBrandsNegativeExpressionType: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
export declare type SponsoredBrandsNegativeExpressionType = t.TypeOf<typeof SponsoredBrandsNegativeExpressionType>;
export declare const SponsoredBrandsCreateNegativeTargetsRequest: t.ExactC<t.TypeC<{
    negativeTargets: t.ArrayC<t.ExactC<t.TypeC<{
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
            type: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
            /**
             * The text of the negative expression.
             */
            value: t.StringC;
        }>>;
    }>>>;
}>>;
export declare type SponsoredBrandsCreateNegativeTargetsRequest = t.TypeOf<typeof SponsoredBrandsCreateNegativeTargetsRequest>;
export declare const SponsoredBrandsCreateNegativeTargetsResponse: t.ExactC<t.TypeC<{
    createTargetSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        targetRequestIndex: t.NumberC;
        targetId: t.NumberC;
    }>>>;
    createTargetErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsCreateNegativeTargetsResponse = t.TypeOf<typeof SponsoredBrandsCreateNegativeTargetsResponse>;
export declare const SponsoredBrandsNegativeTargetingClause: t.ExactC<t.TypeC<{
    /**
     * The target identifier.
     */
    targetId: t.NumberC;
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
        type: t.UnionC<[t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinSameAs">]>;
        /**
         * The text of the negative expression.
         */
        value: t.StringC;
    }>>;
    resolvedExpressions: t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
        value: t.StringC;
    }>>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"pending">, t.LiteralC<"archived">, t.LiteralC<"draft">]>;
}>>;
export declare type SponsoredBrandsNegativeTargetingClause = t.TypeOf<typeof SponsoredBrandsNegativeTargetingClause>;
export declare const SponsoredBrandsBatchGetNegativeTargetsRequest: t.ExactC<t.TypeC<{
    targetIds: t.ArrayC<t.NumberC>;
}>>;
export declare type SponsoredBrandsBatchGetNegativeTargetsRequest = t.TypeOf<typeof SponsoredBrandsBatchGetNegativeTargetsRequest>;
export declare const SponsoredBrandsBatchGetNegativeTargetsResponse: t.ExactC<t.TypeC<{
    /**
     * A list of negative targeting clause objects.
     * Note that each negative targeting clause object is correlated to the list request by the negativeTargetRequestIndex field.
     * This field corresponds to the order of the negative targeting identifier in the request.
     */
    batchGetNegativeTargetSuccessResults: t.ArrayC<t.ExactC<t.TypeC<{
        targetingClause: t.ExactC<t.TypeC<{
            /**
             * The target identifier.
             */
            targetId: t.NumberC;
            /**
             * The ad group identifier.
             */
            adGroupId: t.NumberC;
            /**
             * The campaign identifier.
             */
            campaignId: t.NumberC;
            /**
             * Newly created targets are in a default state of DRAFT before transitioning to a PENDING state for moderation. After moderation, the target's state is ENABLED
             */
            state: t.UnionC<[t.LiteralC<"ENABLED">, t.LiteralC<"PAUSED">, t.LiteralC<"PENDING">, t.LiteralC<"ARCHIVED">, t.LiteralC<"DRAFT">]>;
            expressions: t.ArrayC<t.ExactC<t.TypeC<{
                type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
                value: t.StringC;
            }>>>;
            resolvedExpressions: t.ArrayC<t.ExactC<t.TypeC<{
                type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">]>;
                value: t.StringC;
            }>>>;
        }>>;
        targetRequestIndex: t.NumberC;
    }>>>;
    /**
     * A list of negative target identifiers that were not found.
     * Note that each negative target identifier is correlated to the list request by the negativeTargetRequestIndex field.
     * This field corresponds to the order of the negative target identifier in the request.
     */
    batchGetNegativeTargetErrorResults: t.ArrayC<t.ExactC<t.TypeC<{
        code: t.StringC;
        details: t.StringC;
        targetId: t.NumberC;
        targetRequestIndex: t.NumberC;
    }>>>;
}>>;
export declare type SponsoredBrandsBatchGetNegativeTargetsResponse = t.TypeOf<typeof SponsoredBrandsBatchGetNegativeTargetsResponse>;
