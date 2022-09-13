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
exports.SponsoredProductsAsinsReportMetrics = void 0;
const t = __importStar(require("io-ts"));
exports.SponsoredProductsAsinsReportMetrics = t.union([
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
     * Unique numerical ID of the keyword
     */
    t.literal('keywordId'),
    /**
     * Keyword or phrase used in bid
     */
    t.literal('keywordText'),
    /**
     * Unique ASIN advertised
     */
    t.literal('asin'),
    /**
     * A non-dimensional metric for ASINs other than the one advertised
     */
    t.literal('otherAsin'),
    /**
     * Unique SKU advertised. Not available for vendors.
     */
    t.literal('sku'),
    /**
     * A dimensional metric
     */
    t.literal('currency'),
    /**
     * One of: broad, phrase, or exact
     */
    t.literal('matchType'),
    /**
     * Number of ASIN (SKU) units sold. 1 day.
     */
    t.literal('attributedUnitsOrdered1d'),
    /**
     * Number of ASIN (SKU) units sold. 7 days.
     */
    t.literal('attributedUnitsOrdered7d'),
    /**
     * Number of ASIN (SKU) units sold. 14 days.
     */
    t.literal('attributedUnitsOrdered14d'),
    /**
     * Number of ASIN (SKU) units sold. 30 days.
     */
    t.literal('attributedUnitsOrdered30d'),
    /**
     * Number of other ASIN (SKU) units sold. 1 day.
     */
    t.literal('attributedUnitsOrdered1dOtherSKU'),
    /**
     * Number of other ASIN (SKU) units sold. 7 days.
     */
    t.literal('attributedUnitsOrdered7dOtherSKU'),
    /**
     * Number of other ASIN (SKU) units sold. 14 days.
     */
    t.literal('attributedUnitsOrdered14dOtherSKU'),
    /**
     * Number of other ASIN (SKU) units sold. 30 days.
     */
    t.literal('attributedUnitsOrdered30dOtherSKU'),
    /**
     * Sales for another ASIN (SKU). 1 day.
     */
    t.literal('attributedSales1dOtherSKU'),
    /**
     * Sales for another ASIN (SKU). 7 days.
     */
    t.literal('attributedSales7dOtherSKU'),
    /**
     * Sales for another ASIN (sku). 14 days.
     */
    t.literal('attributedSales14dOtherSKU'),
    /**
     * Sales for another ASIN (sku). 30 days.
     */
    t.literal('attributedSales30dOtherSKU'),
]);
//# sourceMappingURL=sponsored-products-asins-report-metrics.js.map