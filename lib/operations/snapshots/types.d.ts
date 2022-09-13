import * as t from 'io-ts';
export declare const SnapshotId: t.StringC;
export declare type SnapshotId = t.TypeOf<typeof SnapshotId>;
export declare const SponsoredProductsRecordType: t.UnionC<[t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"productAds">, t.LiteralC<"keywords">, t.LiteralC<"negativeKeywords">, t.LiteralC<"campaignNegativeKeywords">, t.LiteralC<"targets">, t.LiteralC<"negativeTargets">]>;
export declare type SponsoredProductsRecordType = t.TypeOf<typeof SponsoredProductsRecordType>;
export declare const SponsoredDisplayRecordType: t.UnionC<[t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"productAds">, t.LiteralC<"keywords">, t.LiteralC<"negativeKeywords">, t.LiteralC<"campaignNegativeKeywords">, t.LiteralC<"targets">, t.LiteralC<"negativeTargets">]>;
export declare type SponsoredDisplayRecordType = t.TypeOf<typeof SponsoredDisplayRecordType>;
export declare const SponsoredBrandsRecordType: t.UnionC<[t.LiteralC<"campaigns">, t.LiteralC<"keywords">]>;
export declare type SponsoredBrandsRecordType = t.TypeOf<typeof SponsoredBrandsRecordType>;
export declare const RecordTypeResponse: t.UnionC<[t.LiteralC<"campaign">, t.LiteralC<"adGroup">, t.LiteralC<"productAd">, t.LiteralC<"keyword">, t.LiteralC<"negativeKeyword">, t.LiteralC<"campaignNegativeKeyword">, t.LiteralC<"target">, t.LiteralC<"negativeTarget">, t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"productAds">, t.LiteralC<"keywords">, t.LiteralC<"negativeKeywords">, t.LiteralC<"campaignNegativeKeywords">, t.LiteralC<"targets">, t.LiteralC<"negativeTargets">]>;
export declare type RecordTypeResponse = t.TypeOf<typeof RecordTypeResponse>;
export declare const SnapshotState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type SnapshotState = t.TypeOf<typeof SnapshotState>;
export declare const SuccessSnapshotResponse: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: t.StringC;
}>>, t.ExactC<t.TypeC<{
    /**
     * The status of the generation of the snapshot.
     */
    status: t.LiteralC<"SUCCESS">;
}>>, t.PartialC<{
    /**
     * The record type of the report.
     */
    statusDetails: t.StringC;
    /**
     * The URI for the snapshot. It's only available if status is SUCCESS.
     */
    location: t.StringC;
    /**
     * The size of the snapshot file in bytes. It's only available if status is SUCCESS.
     */
    fileSize: t.NumberC;
    /**
     * The epoch time for expiration of the snapshot file. It's only available if status is SUCCESS.
     */
    expiration: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
}>]>;
export declare type SuccessSnapshotResponse = t.TypeOf<typeof SuccessSnapshotResponse>;
export declare const InProgressSnapshotResponse: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: t.StringC;
}>>, t.ExactC<t.TypeC<{
    /**
     * The status of the generation of the snapshot.
     */
    status: t.LiteralC<"IN_PROGRESS">;
}>>, t.PartialC<{
    /**
     * Description of the status.
     */
    statusDetails: t.StringC;
    /**
     * The record type of the report.
     * TODO: Need check again on Production API. Sandbox API returns singular. Not same in the docs.
     */
    recordType: t.UnionC<[t.LiteralC<"campaign">, t.LiteralC<"adGroup">, t.LiteralC<"productAd">, t.LiteralC<"keyword">, t.LiteralC<"negativeKeyword">, t.LiteralC<"campaignNegativeKeyword">, t.LiteralC<"target">, t.LiteralC<"negativeTarget">, t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"productAds">, t.LiteralC<"keywords">, t.LiteralC<"negativeKeywords">, t.LiteralC<"campaignNegativeKeywords">, t.LiteralC<"targets">, t.LiteralC<"negativeTargets">]>;
}>]>;
export declare type InProgressSnapshotResponse = t.TypeOf<typeof InProgressSnapshotResponse>;
export declare const FailureSnapshotResponse: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: t.StringC;
}>>, t.ExactC<t.TypeC<{
    /**
     * The status of the generation of the snapshot.
     */
    status: t.LiteralC<"FAILURE">;
    /**
     * Description of the status.
     */
    statusDetails: t.StringC;
}>>]>;
export declare type FailureSnapshotResponse = t.TypeOf<typeof FailureSnapshotResponse>;
export declare const SnapshotResponse: t.UnionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: t.StringC;
}>>, t.ExactC<t.TypeC<{
    /**
     * The status of the generation of the snapshot.
     */
    status: t.LiteralC<"SUCCESS">;
}>>, t.PartialC<{
    /**
     * The record type of the report.
     */
    statusDetails: t.StringC;
    /**
     * The URI for the snapshot. It's only available if status is SUCCESS.
     */
    location: t.StringC;
    /**
     * The size of the snapshot file in bytes. It's only available if status is SUCCESS.
     */
    fileSize: t.NumberC;
    /**
     * The epoch time for expiration of the snapshot file. It's only available if status is SUCCESS.
     */
    expiration: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
}>]>, t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: t.StringC;
}>>, t.ExactC<t.TypeC<{
    /**
     * The status of the generation of the snapshot.
     */
    status: t.LiteralC<"IN_PROGRESS">;
}>>, t.PartialC<{
    /**
     * Description of the status.
     */
    statusDetails: t.StringC;
    /**
     * The record type of the report.
     * TODO: Need check again on Production API. Sandbox API returns singular. Not same in the docs.
     */
    recordType: t.UnionC<[t.LiteralC<"campaign">, t.LiteralC<"adGroup">, t.LiteralC<"productAd">, t.LiteralC<"keyword">, t.LiteralC<"negativeKeyword">, t.LiteralC<"campaignNegativeKeyword">, t.LiteralC<"target">, t.LiteralC<"negativeTarget">, t.LiteralC<"campaigns">, t.LiteralC<"adGroups">, t.LiteralC<"productAds">, t.LiteralC<"keywords">, t.LiteralC<"negativeKeywords">, t.LiteralC<"campaignNegativeKeywords">, t.LiteralC<"targets">, t.LiteralC<"negativeTargets">]>;
}>]>, t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: t.StringC;
}>>, t.ExactC<t.TypeC<{
    /**
     * The status of the generation of the snapshot.
     */
    status: t.LiteralC<"FAILURE">;
    /**
     * Description of the status.
     */
    statusDetails: t.StringC;
}>>]>]>;
export declare type SnapshotResponse = SuccessSnapshotResponse | InProgressSnapshotResponse | FailureSnapshotResponse;
export declare const RequestSnapshotParams: t.PartialC<{
    /**
     * Restricts results to entities with state within the specified comma-separated list.
     * Must be one of: `enabled`, `paused`, `archived`.
     * Default behavior is to include enabled and paused.
     */
    stateFilter: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>;
export declare type RequestSnapshotParams = t.TypeOf<typeof RequestSnapshotParams>;
export declare const SnapshotResultType: t.UnionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    name: t.StringC;
    campaignType: t.UnionC<[t.LiteralC<"sponsoredProducts">, t.UndefinedC]>;
    targetingType: t.UnionC<[t.LiteralC<"manual">, t.LiteralC<"auto">]>;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    dailyBudget: t.NumberC;
    startDate: t.StringC;
}>>, t.PartialC<{
    portfolioId: t.NumberC;
    endDate: t.StringC;
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
}>]>, t.ExactC<t.TypeC<{
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    name: t.StringC;
    defaultBid: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.IntersectionC<[t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    keywordText: t.StringC;
    matchType: t.UnionC<[t.LiteralC<"exact">, t.LiteralC<"phrase">, t.LiteralC<"broad">]>;
}>>, t.PartialC<{
    bid: t.NumberC;
}>]>, t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    keywordText: t.StringC;
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>, t.ExactC<t.TypeC<{
    keywordId: t.NumberC;
    campaignId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"deleted">]>;
    keywordText: t.StringC;
    matchType: t.UnionC<[t.LiteralC<"negativeExact">, t.LiteralC<"negativePhrase">]>;
}>>, t.UnionC<[t.IntersectionC<[t.ExactC<t.TypeC<{
    adId: t.NumberC;
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    sku: t.StringC;
}>>]>, t.IntersectionC<[t.ExactC<t.TypeC<{
    adId: t.NumberC;
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.ExactC<t.TypeC<{
    asin: t.StringC;
}>>]>]>, t.IntersectionC<[t.ExactC<t.TypeC<{
    targetId: t.NumberC;
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        value: t.StringC;
    }>]>>;
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>, t.PartialC<{
    bid: t.NumberC;
}>]>, t.ExactC<t.TypeC<{
    targetId: t.NumberC;
    campaignId: t.NumberC;
    adGroupId: t.NumberC;
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    expression: t.ArrayC<t.IntersectionC<[t.ExactC<t.TypeC<{
        type: t.UnionC<[t.LiteralC<"asinCategorySameAs">, t.LiteralC<"asinBrandSameAs">, t.LiteralC<"asinPriceLessThan">, t.LiteralC<"asinPriceBetween">, t.LiteralC<"asinPriceGreaterThan">, t.LiteralC<"asinReviewRatingLessThan">, t.LiteralC<"asinReviewRatingBetween">, t.LiteralC<"asinReviewRatingGreaterThan">, t.LiteralC<"asinSameAs">, t.LiteralC<"asinIsPrimeShippingEligible">, t.LiteralC<"asinAgeRangeSameAs">, t.LiteralC<"asinGenreSameAs">, t.LiteralC<"queryHighRelMatches">, t.LiteralC<"queryBroadRelMatches">, t.LiteralC<"asinSubstituteRelated">, t.LiteralC<"asinAccessoryRelated">]>;
    }>>, t.PartialC<{
        value: t.StringC;
    }>]>>;
    expressionType: t.UnionC<[t.LiteralC<"auto">, t.LiteralC<"manual">]>;
}>>]>;
export declare type SnapshotResultType = t.TypeOf<typeof SnapshotResultType>;
