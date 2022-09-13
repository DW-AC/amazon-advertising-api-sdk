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
exports.SponsoredBrandsKeywordReportMetrics = void 0;
const t = __importStar(require("io-ts"));
exports.SponsoredBrandsKeywordReportMetrics = t.union([
    /**
     * Unique numerical ID of the campaign
     */
    t.literal('campaignId'),
    /**
     * Unique name of the campaign
     */
    t.literal('campaignName'),
    /**
     * Unique numerical ID of the ad group
     */
    t.literal('adGroupId'),
    /**
     * Unique name of the ad group
     */
    t.literal('adGroupName'),
    t.literal('campaignBudgetType'),
    /**
     * Status of the campaign
     */
    t.literal('campaignStatus'),
    /**
     * ID of the keyword used in bid
     */
    t.literal('keywordId'),
    /**
     * Keyword state.
     */
    t.literal('keywordStatus'),
    /**
     * User-set bid value for keyword.
     */
    t.literal('keywordBid'),
    /**
     * Text of the keyword or phrase used in bid
     */
    t.literal('keywordText'),
    /**
     * Type of matching for the keyword or phrase used in bid. Must be one of: broad, phrase, or exact
     */
    t.literal('matchType'),
]);
//# sourceMappingURL=sponsored-brands-keyword-report-metrics.js.map