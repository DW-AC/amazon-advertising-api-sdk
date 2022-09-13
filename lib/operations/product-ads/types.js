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
exports.ListProductAdsParams = exports.UpdateProductAdsParams = exports.CreateProductAdsParamsVendor = exports.CreateProductAdsParamsSeller = exports.AdResponse = exports.ProductAdExtended = exports.ProductAd = exports.ProductAdServingStatus = exports.ProductAdState = exports.AdIds = exports.AdId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../campaigns/types");
const types_2 = require("../ad-groups/types");
const types_3 = require("../commons/types");
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
exports.AdId = t.number;
exports.AdIds = t.array(exports.AdId);
exports.ProductAdState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('archived'),
]);
exports.ProductAdServingStatus = t.union([
    t.literal('AD_ARCHIVED'),
    t.literal('AD_PAUSED'),
    t.literal('AD_STATUS_LIVE'),
    t.literal('AD_POLICING_SUSPENDED'),
    t.literal('CAMPAIGN_OUT_OF_BUDGET'),
    t.literal('AD_GROUP_PAUSED'),
    t.literal('AD_GROUP_ARCHIVED'),
    t.literal('CAMPAIGN_PAUSED'),
    t.literal('CAMPAIGN_ARCHIVED'),
    t.literal('ACCOUNT_OUT_OF_BUDGET'),
    t.literal('MISSING_DECORATION'),
    t.literal('PORTFOLIO_ENDED'),
    t.literal('ADVERTISER_PAYMENT_FAILURE'),
    t.literal('NOT_BUYABLE'), // The docs don't mention about this type
]);
const ProductAdBase = t.strict({
    /**
     * The ID of the product ad
     */
    adId: exports.AdId,
    /**
     * The ID of the campaign to which this product ad belongs
     */
    campaignId: types_1.CampaignId,
    /**
     * The ID of the ad group to which this product ad belongs
     */
    adGroupId: types_2.AdGroupId,
    /**
     * Advertiser-specified state of the product ad.
     * Value of state for asin can only be enabled or paused, archived state not available.
     */
    state: exports.ProductAdState,
});
const ProductAdSeller = t.intersection([
    ProductAdBase,
    t.strict({
        /**
         * The SKU for the listed product to be advertised.
         * Either this or the asin must be present. Used by sellers.
         */
        sku: t.string,
    }),
]);
const ProductAdVendor = t.intersection([
    ProductAdBase,
    t.strict({
        /**
         * The ASIN for the listed product to be advertised.
         * Either this or the sku must be present. Used by vendors.
         */
        asin: t.string,
    }),
]);
exports.ProductAd = t.union([ProductAdSeller, ProductAdVendor]);
exports.ProductAdExtended = t.intersection([
    exports.ProductAd,
    t.strict({
        /**
         * The date the ad group was created as epoch time in milliseconds.
         */
        creationDate: DateFromNumber_1.DateFromNumber,
        /**
         * The date the ad group was last updated as epoch time in milliseconds.
         */
        lastUpdatedDate: DateFromNumber_1.DateFromNumber,
        /**
         * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
         */
        servingStatus: exports.ProductAdServingStatus,
    }),
]);
exports.AdResponse = t.partial({
    /**
     * The ID of the ad that was created/updated, if successful
     */
    adId: exports.AdId,
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.string,
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.string,
});
const CreateProductAdsParamsBase = t.strict({
    campaignId: types_1.CampaignId,
    adGroupId: types_2.AdGroupId,
    state: exports.ProductAdState,
});
exports.CreateProductAdsParamsSeller = t.intersection([
    CreateProductAdsParamsBase,
    t.strict({
        sku: t.string,
    }),
]);
exports.CreateProductAdsParamsVendor = t.intersection([
    CreateProductAdsParamsBase,
    t.strict({
        asin: t.string,
    }),
]);
exports.UpdateProductAdsParams = t.strict({
    adId: exports.AdId,
    state: exports.ProductAdState,
});
exports.ListProductAdsParams = t.intersection([
    types_3.ListPagination,
    t.partial({
        /**
         * Optional. Restricts results to ads within campaigns specified in comma-separated list.
         */
        campaignIdFilter: t.array(types_1.CampaignId),
        /**
         * Optional. Restricts results to ads within ad groups specified in comma-separated list.
         */
        adGroupIdFilter: types_2.AdGroupIds,
        /**
         * Optional. Restricts results to ads with the specified product ad Id specified in comma-separated list.
         */
        adIdFilter: exports.AdIds,
        /**
         * Optional. Restricts results to ads with state within the specified comma-separated list.
         * Must be one of: enabled, paused, archived. Default behavior is to include all.
         */
        stateFilter: exports.ProductAdState,
    }),
]);
//# sourceMappingURL=types.js.map