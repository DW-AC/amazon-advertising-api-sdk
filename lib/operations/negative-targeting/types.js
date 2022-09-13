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
exports.SponsoredBrandsBatchGetNegativeTargetsResponse = exports.SponsoredBrandsBatchGetNegativeTargetsRequest = exports.SponsoredBrandsNegativeTargetingClause = exports.SponsoredBrandsCreateNegativeTargetsResponse = exports.SponsoredBrandsCreateNegativeTargetsRequest = exports.SponsoredBrandsNegativeExpressionType = exports.SponsoredBrandsUpdateNegativeTargetsResponse = exports.SponsoredBrandsUpdateNegativeTargetsRequest = exports.SponsoredBrandsListNegativeTargetsResponse = exports.SponsoredBrandsListNegativeTargetsRequest = exports.UpdateNegativeTargetingClausesParams = exports.ListNegativeTargetingClausesParams = exports.NegativeTargetingClauseExtended = exports.NegativeTargetingClause = exports.CreateNegativeTargetingClausesParams = exports.NegativeTargetingClauseResponse = exports.UpdateSponsoredDisplayNegativeTargetingClausesParams = exports.SponsoredDisplayNegativeTargetingClauseExtended = exports.SponsoredDisplayNegativeTargetingClause = exports.CreateSponsoredDisplayNegativeTargetingClausesParams = exports.SponsoredDisplayNegativeTargetingExpression = exports.SponsoredDisplayNegativeTargetingExpressionQueryType = exports.NegativeTargetId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../ad-groups/types");
const types_2 = require("../product-targeting/types");
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
const types_3 = require("../campaigns/types");
const types_4 = require("../commons/types");
exports.NegativeTargetId = t.number;
exports.SponsoredDisplayNegativeTargetingExpressionQueryType = t.union([
    t.literal('asinBrandSameAs'),
    t.literal('asinSameAs'),
]);
exports.SponsoredDisplayNegativeTargetingExpression = t.strict({
    /**
     * The intent type.
     */
    type: exports.SponsoredDisplayNegativeTargetingExpressionQueryType,
    /**
     * The value to be negatively targeted. Used only in manual expressions.
     */
    value: t.string,
});
exports.CreateSponsoredDisplayNegativeTargetingClausesParams = t.strict({
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: types_1.AdGroupId,
    /**
     * Advertiser-specified state of the negative target
     */
    state: types_2.TargetingClauseState,
    /**
     * The type of expression
     */
    expressionType: types_2.ExpressionType,
    /**
     * The expression to negatively match against.
     */
    expression: t.array(exports.SponsoredDisplayNegativeTargetingExpression),
});
exports.SponsoredDisplayNegativeTargetingClause = t.intersection([
    exports.CreateSponsoredDisplayNegativeTargetingClausesParams,
    t.strict({
        targetId: exports.NegativeTargetId,
    }),
]);
exports.SponsoredDisplayNegativeTargetingClauseExtended = t.intersection([
    exports.SponsoredDisplayNegativeTargetingClause,
    t.strict({
        /**
         * The date the negative targeting was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the negative targeting was last updated as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: types_2.TargetingClauseServingStatus,
    }),
]);
exports.UpdateSponsoredDisplayNegativeTargetingClausesParams = t.strict({
    targetId: exports.NegativeTargetId,
    /**
     * Advertiser-specified state of the negative target
     */
    state: types_2.TargetingClauseState,
});
exports.NegativeTargetingClauseResponse = t.partial({
    /**
     * The ID of the negative target that was created/updated, if successful
     */
    targetId: exports.NegativeTargetId,
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.string,
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.string,
});
exports.CreateNegativeTargetingClausesParams = t.strict({
    /**
     * The ID of the campaign to which this negative target belongs
     */
    campaignId: types_3.CampaignId,
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: types_1.AdGroupId,
    /**
     * Advertiser-specified state of the negative target
     */
    state: types_2.TargetingClauseState,
    /**
     * The expression to match against search queries
     */
    expression: types_2.TargetingExpressions,
    /**
     * The type of expression
     */
    expressionType: types_2.ExpressionType,
});
exports.NegativeTargetingClause = t.strict({
    /**
     * The ID of the negative target
     */
    targetId: exports.NegativeTargetId,
    /**
     * The ID of the campaign to which this negative target belongs
     */
    campaignId: types_3.CampaignId,
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: types_1.AdGroupId,
    /**
     * Advertiser-specified state of the negative target
     */
    state: types_2.TargetingClauseState,
    /**
     * The expression to match against search queries
     */
    expression: types_2.TargetingExpressions,
    /**
     * The type of expression
     */
    expressionType: types_2.ExpressionType,
});
exports.NegativeTargetingClauseExtended = t.intersection([
    exports.NegativeTargetingClause,
    t.strict({
        /**
         * The date the negative targeting was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the negative targeting was last updated as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: types_2.TargetingClauseServingStatus,
    }),
]);
exports.ListNegativeTargetingClausesParams = t.intersection([
    types_4.ListPagination,
    t.partial({
        /**
         * Restricts results to targets with state within the specified comma-separated list.
         * Possible filter types are: enabled, paused, or archived
         */
        stateFilter: types_2.TargetingClauseState,
        /**
         * Restricts results to targets within campaigns specified in comma-separated list.
         */
        campaignIdFilter: types_3.CampaignIds,
        /**
         * Restricts results to targets within ad groups specified in comma-separated list.
         */
        adGroupIdFilter: types_1.AdGroupIds,
        /**
         * Restricts results to targets with the specified target Ids specified in comma-separated list.
         */
        targetIdFilter: t.array(exports.NegativeTargetId),
    }),
]);
exports.UpdateNegativeTargetingClausesParams = t.partial({
    /**
     * The ID of the negative target.
     */
    targetId: exports.NegativeTargetId,
    /**
     * The ID of the campaign to which this negative target belongs.
     */
    campaignId: types_3.CampaignId,
    /**
     * The ID of the ad group to which this negative target belongs.
     */
    adGroupId: types_1.AdGroupId,
    /**
     * Advertiser-specified state of the negative target.
     */
    state: types_2.TargetingClauseState,
    /**
     * The expression to match against search queries.
     */
    expression: types_2.TargetingExpressions,
    /**
     * The type of expression.
     */
    expressionType: types_2.ExpressionType,
});
// Sponsored brands negative targeting operation types
exports.SponsoredBrandsListNegativeTargetsRequest = types_2.SponsoredBrandsListTargetsRequest;
exports.SponsoredBrandsListNegativeTargetsResponse = t.strict({
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.string,
    negativeTargets: types_2.SponsoredBrandsTargetingClauses,
});
const SponsoredBrandsUpdateNegativeTargetingClauseRequest = t.partial({
    /**
     * The target identifier.
     */
    targetId: exports.NegativeTargetId,
    /**
     * The identifier of an existing ad group. The newly created target is associated to this ad group.
     */
    adGroupId: types_1.AdGroupId,
    state: types_2.SponsoredBrandsExpressionState,
});
exports.SponsoredBrandsUpdateNegativeTargetsRequest = t.strict({
    negativeTargets: t.array(SponsoredBrandsUpdateNegativeTargetingClauseRequest),
});
exports.SponsoredBrandsUpdateNegativeTargetsResponse = types_2.SponsoredBrandsUpdateTargetsResponse;
exports.SponsoredBrandsNegativeExpressionType = t.union([
    t.literal('asinBrandSameAs'),
    t.literal('asinSameAs'),
]);
const SponsoredBrandsNegativeExpression = t.strict({
    type: exports.SponsoredBrandsNegativeExpressionType,
    /**
     * The text of the negative expression.
     */
    value: t.string,
});
const SponsoredBrandsCreateNegativeTargetingClauseRequest = t.strict({
    /**
     * The identifier of an existing ad group.
     * The newly created target is associated to this ad group.
     */
    adGroupId: types_1.AdGroupId,
    /**
     * The identifier of an existing campaign.
     * The newly created target is associated to this campaign.
     */
    campaignId: types_3.CampaignId,
    expressions: SponsoredBrandsNegativeExpression,
});
exports.SponsoredBrandsCreateNegativeTargetsRequest = t.strict({
    negativeTargets: t.array(SponsoredBrandsCreateNegativeTargetingClauseRequest),
});
exports.SponsoredBrandsCreateNegativeTargetsResponse = types_2.SponsoredBrandsCreateTargetsResponse;
exports.SponsoredBrandsNegativeTargetingClause = t.strict({
    /**
     * The target identifier.
     */
    targetId: exports.NegativeTargetId,
    /**
     * The identifier of an existing ad group.
     * The newly created target is associated to this ad group.
     */
    adGroupId: types_1.AdGroupId,
    /**
     * The identifier of an existing campaign.
     * The newly created target is associated to this campaign.
     */
    campaignId: types_3.CampaignId,
    expressions: SponsoredBrandsNegativeExpression,
    resolvedExpressions: types_2.SponsoredBrandsResolvedExpression,
    state: types_2.SponsoredBrandsExpressionState,
});
exports.SponsoredBrandsBatchGetNegativeTargetsRequest = t.strict({
    targetIds: t.array(exports.NegativeTargetId),
});
exports.SponsoredBrandsBatchGetNegativeTargetsResponse = t.strict({
    /**
     * A list of negative targeting clause objects.
     * Note that each negative targeting clause object is correlated to the list request by the negativeTargetRequestIndex field.
     * This field corresponds to the order of the negative targeting identifier in the request.
     */
    batchGetNegativeTargetSuccessResults: t.array(t.strict({
        targetingClause: t.strict({
            /**
             * The target identifier.
             */
            targetId: exports.NegativeTargetId,
            /**
             * The ad group identifier.
             */
            adGroupId: types_1.AdGroupId,
            /**
             * The campaign identifier.
             */
            campaignId: types_3.CampaignId,
            /**
             * Newly created targets are in a default state of DRAFT before transitioning to a PENDING state for moderation. After moderation, the target's state is ENABLED
             */
            state: types_2.SponsoredBrandsTargetState,
            expressions: types_2.SponsoredBrandsExpressions,
            resolvedExpressions: types_2.SponsoredBrandsResolvedExpressions,
        }),
        targetRequestIndex: t.number,
    })),
    /**
     * A list of negative target identifiers that were not found.
     * Note that each negative target identifier is correlated to the list request by the negativeTargetRequestIndex field.
     * This field corresponds to the order of the negative target identifier in the request.
     */
    batchGetNegativeTargetErrorResults: t.array(t.strict({
        code: t.string,
        details: t.string,
        targetId: exports.NegativeTargetId,
        targetRequestIndex: t.number,
    })),
});
//# sourceMappingURL=types.js.map