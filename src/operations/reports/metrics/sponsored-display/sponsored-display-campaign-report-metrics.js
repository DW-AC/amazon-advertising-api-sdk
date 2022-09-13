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
exports.SponsoredDisplayCampaignReportMetrics = void 0;
const t = __importStar(require("io-ts"));
const sponsored_display_common_report_metrics_1 = require("./sponsored-display-common-report-metrics");
/**
 * These metrics are specific to T00001 tactic campaign reports.
 */
exports.SponsoredDisplayCampaignReportMetrics = t.union([
    sponsored_display_common_report_metrics_1.SponsoredDisplayCommonReportMetrics,
    t.union([
        /**
         * The name of the campaign.
         */
        t.literal('campaignName'),
        /**
         * The identifier of the campaign.
         */
        t.literal('campaignId'),
        /**
         * The status of the campaign.
         */
        t.literal('campaignStatus'),
        /**
         * The currency code associated with the campaign.
         */
        t.literal('currency'),
        /**
         * Total number of ad impressions.
         */
        t.literal('impressions'),
        /**
         * Total number of ad clicks associated with the campaign. Divide clicks by impressions to calculate click through rate (CTR).
         */
        t.literal('clicks'),
        /**
         * The total cost of all ad clicks for the campaign. Divide cost by clicks to calculate average cost per click (CPC).
         */
        t.literal('cost'),
        /**
         * Number of attributed detail page views occuring within 14 days of click on an ad.
         */
        t.literal('attributedDPV14d'),
        /**
         * Number of attributed units sold occurring within 14 days of click on an ad.
         */
        t.literal('attributedUnitsSold14d'),
        /**
         * Aggregate value of attributed sales occurring within 14 days of click on ad.
         */
        t.literal('attributedSales14d'),
    ]),
]);
//# sourceMappingURL=sponsored-display-campaign-report-metrics.js.map