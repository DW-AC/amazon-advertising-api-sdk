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
exports.SponsoredProductsAdGroupReportMetrics = void 0;
const t = __importStar(require("io-ts"));
exports.SponsoredProductsAdGroupReportMetrics = t.union([
    /**
     * Unique name of the campaign
     */
    t.literal('campaignName'),
    /**
     * Unique numerical ID of the campaign
     */
    t.literal('campaignId'),
    /**
     * Unique name of the ad group
     */
    t.literal('adGroupName'),
    /**
     * Unique numerical ID of the ad group
     */
    t.literal('adGroupId'),
    /**
     * Total ad impressions.
     */
    t.literal('impressions'),
    /**
     * Total ad clicks.
     */
    t.literal('clicks'),
    /**
     * Total cost of all clicks. Can be divided by clicks to obtain average CPC.
     */
    t.literal('cost'),
    /**
     * Number of attributed conversion events occurring within 1 day of click on ad.
     */
    t.literal('attributedConversions1d'),
    /**
     * Number of attributed conversion events occurring within 7 days of click on ad.
     */
    t.literal('attributedConversions7d'),
    /**
     * Number of attributed conversion events occurring within 14 days of click on ad.
     */
    t.literal('attributedConversions14d'),
    /**
     * Number of attributed conversion events occurring within 30 days of click on ad.
     */
    t.literal('attributedConversions30d'),
    /**
     * Number of attributed conversion events occurring within 1 day of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedConversions1dSameSKU'),
    /**
     * Number of attributed conversion events occurring within 7 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedConversions7dSameSKU'),
    /**
     * Number of attributed conversion events occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedConversions14dSameSKU'),
    /**
     * Number of attributed conversion events occurring within 30 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedConversions30dSameSKU'),
    /**
     * Number of attributed units ordered within 1 day of click on ad.
     */
    t.literal('attributedUnitsOrdered1d'),
    /**
     * Number of attributed units ordered within 7 days of click on ad.
     */
    t.literal('attributedUnitsOrdered7d'),
    /**
     * Number of attributed units ordered within 14 days of click on ad.
     */
    t.literal('attributedUnitsOrdered14d'),
    /**
     * Number of attributed units ordered within 30 days of click on ad.
     */
    t.literal('attributedUnitsOrdered30d'),
    /**
     * Number of attributed sales occurring within 1 day of click on ad.
     */
    t.literal('attributedSales1d'),
    /**
     * Number of attributed sales occurring within 7 days of click on ad.
     */
    t.literal('attributedSales7d'),
    /**
     * Number of attributed sales occurring within 14 days of click on ad.
     */
    t.literal('attributedSales14d'),
    /**
     * Number of attributed sales occurring within 30 days of click on ad.
     */
    t.literal('attributedSales30d'),
    /**
     * Aggregate value of attributed sales occurring within 1 day of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedSales1dSameSKU'),
    /**
     * Aggregate value of attributed sales occurring within 7 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedSales7dSameSKU'),
    /**
     * Aggregate value of attributed sales occurring within 14 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedSales14dSameSKU'),
    /**
     * Aggregate value of attributed sales occurring within 30 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedSales30dSameSKU'),
    /**
     * Number of attributed units ordered within 1 day of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedUnitsOrdered1dSameSKU'),
    /**
     * Number of attributed units ordered within 7 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedUnitsOrdered7dSameSKU'),
    /**
     * Number of attributed units ordered within 14 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedUnitsOrdered14dSameSKU'),
    /**
     * Number of attributed units ordered within 30 days of click on ad where the purchased SKU was the same as the one advertised.
     */
    t.literal('attributedUnitsOrdered30dSameSKU'),
]);
//# sourceMappingURL=sponsored-products-ad-group-report-metrics.js.map