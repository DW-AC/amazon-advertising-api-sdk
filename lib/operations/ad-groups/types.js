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
exports.UpdateAdGroupsParams = exports.CreateAdGroupsParams = exports.ListAdGroupsParams = exports.AdGroupResponse = exports.AdGroupExtended = exports.AdGroup = exports.AdGroupServingStatus = exports.AdGroupResponseStatus = exports.AdGroupState = exports.AdGroupName = exports.AdGroupIds = exports.AdGroupId = void 0;
const t = __importStar(require("io-ts"));
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
const types_1 = require("../campaigns/types");
const types_2 = require("../commons/types");
exports.AdGroupId = t.number;
exports.AdGroupIds = t.array(exports.AdGroupId);
exports.AdGroupName = t.string;
/**
 * Advertiser-specified state of the ad group.
 */
exports.AdGroupState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('archived'),
]);
/**
 * The mutation status of the portfolio.
 */
exports.AdGroupResponseStatus = t.union([
    t.literal('SUCCESS'),
    t.literal('INVALID_ARGUMENT'),
    t.literal('NOT_FOUND'),
]);
/**
 * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
 */
exports.AdGroupServingStatus = t.union([
    t.literal('AD_GROUP_ARCHIVED'),
    t.literal('AD_GROUP_INCOMPLETE'),
    t.literal('AD_GROUP_PAUSED'),
    t.literal('AD_GROUP_STATUS_ENABLED'),
    t.literal('AD_POLICING_SUSPENDED'),
    t.literal('CAMPAIGN_OUT_OF_BUDGET'),
    t.literal('CAMPAIGN_PAUSED'),
    t.literal('CAMPAIGN_ARCHIVED'),
    t.literal('CAMPAIGN_INCOMPLETE'),
    t.literal('ACCOUNT_OUT_OF_BUDGET'),
    t.literal('ADVERTISER_PAYMENT_FAILURE'),
    t.literal('PORTFOLIO_PENDING_START_DATE'),
    t.literal('PORTFOLIO_ENDED'),
    t.literal('ENDED'), // The docs don't mention about this type
]);
exports.AdGroup = t.strict({
    /**
     * The ID of the campaign to which this ad group belongs
     */
    campaignId: types_1.CampaignId,
    /**
     * The ID of the ad group
     */
    adGroupId: exports.AdGroupId,
    /**
     * The name of the ad group
     */
    name: exports.AdGroupName,
    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.number,
    /**
     * Advertiser-specified state of the ad group
     */
    state: exports.AdGroupState,
});
exports.AdGroupExtended = t.intersection([
    exports.AdGroup,
    t.type({
        /**
         * The date the ad group was created as epoch time in milliseconds
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the ad group was last updated as epoch time in milliseconds
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
         */
        servingStatus: exports.AdGroupServingStatus,
    }),
]);
exports.AdGroupResponse = t.intersection([
    t.type({
        /**
         * The ID of the ad group that was created/updated, if successful
         */
        adGroupId: exports.AdGroupId,
        /**
         * An enumerated success or error code for machine use.
         */
        code: exports.AdGroupResponseStatus,
    }),
    t.partial({
        /**
         * A human-readable description of the error, if unsuccessful
         */
        details: t.string,
    }),
]);
exports.ListAdGroupsParams = t.intersection([
    types_2.ListPagination,
    t.partial({
        /**
         * Optional. Restricts results to ad groups within campaigns specified in comma-separated list.
         */
        campaignIdFilter: types_1.CampaignIds,
        /**
         * Optional. Restricts results to ad groups specified in comma-separated list.
         */
        adGroupIdFilter: exports.AdGroupIds,
        /**
         * Optional.Restricts results to keywords with state within the specified comma-separated list.
         * Must be one of: enabled, paused, or archived.
         * Default behavior is to include all.
         */
        stateFilter: t.array(exports.AdGroupState),
        /**
         * Optional. Restricts results to ad groups with the specified name.
         */
        name: exports.AdGroupName,
    }),
]);
exports.CreateAdGroupsParams = t.strict({
    /**
     * The ID of the campaign to which this ad group belongs
     */
    campaignId: types_1.CampaignId,
    /**
     * The name of the ad group
     */
    name: exports.AdGroupName,
    /**
     * Advertiser-specified state of the ad group
     */
    state: exports.AdGroupState,
    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.number,
});
exports.UpdateAdGroupsParams = t.intersection([
    t.strict({
        /**
         * The ID of the ad group.
         */
        adGroupId: exports.AdGroupId,
    }),
    t.partial({
        /**
         * The name of the ad group.
         */
        name: exports.AdGroupName,
        /**
         * The bid used when keywords belonging to this ad group don't specify a bid.
         */
        defaultBid: t.number,
        /**
         * Advertiser-specified state of the ad group
         */
        state: exports.AdGroupState,
    }),
]);
//# sourceMappingURL=types.js.map