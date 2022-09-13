import * as t from 'io-ts';
export declare const AdGroupId: t.NumberC;
export declare type AdGroupId = t.TypeOf<typeof AdGroupId>;
export declare const AdGroupIds: t.ArrayC<t.NumberC>;
export declare type AdGroupIds = t.TypeOf<typeof AdGroupIds>;
export declare const AdGroupName: t.StringC;
export declare type AdGroupName = t.TypeOf<typeof AdGroupName>;
/**
 * Advertiser-specified state of the ad group.
 */
export declare const AdGroupState: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
export declare type AdGroupState = t.TypeOf<typeof AdGroupState>;
/**
 * The mutation status of the portfolio.
 */
export declare const AdGroupResponseStatus: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
export declare type AdGroupResponseStatus = t.TypeOf<typeof AdGroupResponseStatus>;
/**
 * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
 */
export declare const AdGroupServingStatus: t.UnionC<[t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"AD_GROUP_INCOMPLETE">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_STATUS_ENABLED">, t.LiteralC<"AD_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"PORTFOLIO_PENDING_START_DATE">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"ENDED">]>;
export declare type AdGroupServingStatus = t.TypeOf<typeof AdGroupServingStatus>;
export declare const AdGroup: t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign to which this ad group belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group
     */
    adGroupId: t.NumberC;
    /**
     * The name of the ad group
     */
    name: t.StringC;
    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.NumberC;
    /**
     * Advertiser-specified state of the ad group
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>;
export declare type AdGroup = t.TypeOf<typeof AdGroup>;
export declare const AdGroupExtended: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign to which this ad group belongs
     */
    campaignId: t.NumberC;
    /**
     * The ID of the ad group
     */
    adGroupId: t.NumberC;
    /**
     * The name of the ad group
     */
    name: t.StringC;
    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.NumberC;
    /**
     * Advertiser-specified state of the ad group
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>>, t.TypeC<{
    /**
     * The date the ad group was created as epoch time in milliseconds
     */
    creationDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The date the ad group was last updated as epoch time in milliseconds
     */
    lastUpdatedDate: import("io-ts-types/lib/DateFromNumber").DateFromNumberC;
    /**
     * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
     */
    servingStatus: t.UnionC<[t.LiteralC<"AD_GROUP_ARCHIVED">, t.LiteralC<"AD_GROUP_INCOMPLETE">, t.LiteralC<"AD_GROUP_PAUSED">, t.LiteralC<"AD_GROUP_STATUS_ENABLED">, t.LiteralC<"AD_POLICING_SUSPENDED">, t.LiteralC<"CAMPAIGN_OUT_OF_BUDGET">, t.LiteralC<"CAMPAIGN_PAUSED">, t.LiteralC<"CAMPAIGN_ARCHIVED">, t.LiteralC<"CAMPAIGN_INCOMPLETE">, t.LiteralC<"ACCOUNT_OUT_OF_BUDGET">, t.LiteralC<"ADVERTISER_PAYMENT_FAILURE">, t.LiteralC<"PORTFOLIO_PENDING_START_DATE">, t.LiteralC<"PORTFOLIO_ENDED">, t.LiteralC<"ENDED">]>;
}>]>;
export declare type AdGroupExtended = t.TypeOf<typeof AdGroupExtended>;
export declare const AdGroupResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the ad group that was created/updated, if successful
     */
    adGroupId: t.NumberC;
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.UnionC<[t.LiteralC<"SUCCESS">, t.LiteralC<"INVALID_ARGUMENT">, t.LiteralC<"NOT_FOUND">]>;
}>, t.PartialC<{
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.StringC;
}>]>;
export declare type AdGroupResponse = t.TypeOf<typeof AdGroupResponse>;
export declare const ListAdGroupsParams: t.IntersectionC<[t.PartialC<{
    startIndex: t.NumberC;
    count: t.NumberC;
}>, t.PartialC<{
    /**
     * Optional. Restricts results to ad groups within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional. Restricts results to ad groups specified in comma-separated list.
     */
    adGroupIdFilter: t.ArrayC<t.NumberC>;
    /**
     * Optional.Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of: enabled, paused, or archived.
     * Default behavior is to include all.
     */
    stateFilter: t.ArrayC<t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>>;
    /**
     * Optional. Restricts results to ad groups with the specified name.
     */
    name: t.StringC;
}>]>;
export declare type ListAdGroupsParams = t.TypeOf<typeof ListAdGroupsParams>;
export declare const CreateAdGroupsParams: t.ExactC<t.TypeC<{
    /**
     * The ID of the campaign to which this ad group belongs
     */
    campaignId: t.NumberC;
    /**
     * The name of the ad group
     */
    name: t.StringC;
    /**
     * Advertiser-specified state of the ad group
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.NumberC;
}>>;
export declare type CreateAdGroupsParams = t.TypeOf<typeof CreateAdGroupsParams>;
export declare const UpdateAdGroupsParams: t.IntersectionC<[t.ExactC<t.TypeC<{
    /**
     * The ID of the ad group.
     */
    adGroupId: t.NumberC;
}>>, t.PartialC<{
    /**
     * The name of the ad group.
     */
    name: t.StringC;
    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.NumberC;
    /**
     * Advertiser-specified state of the ad group
     */
    state: t.UnionC<[t.LiteralC<"enabled">, t.LiteralC<"paused">, t.LiteralC<"archived">]>;
}>]>;
export declare type UpdateAdGroupsParams = t.TypeOf<typeof UpdateAdGroupsParams>;
