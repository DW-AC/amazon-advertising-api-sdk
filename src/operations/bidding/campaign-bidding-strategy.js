"use strict";
/**
 * Copyright (C) 2019, Scale Leap
 */
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
exports.CampaignBiddingStrategy = void 0;
const t = __importStar(require("io-ts"));
exports.CampaignBiddingStrategy = t.union([
    /**
     * Lowers your bids in real time when your ad may be less likely to convert to a sale.
     * Campaigns created before the release of the bidding controls feature used this setting by default.
     */
    t.literal('legacyForSales'),
    /**
     * Increases or decreases your bids in real time by a maximum of 100%.
     * With this setting bids increase when your ad is more likely to convert to a sale,
     * and bids decrease when less likely to convert to a sale.
     */
    t.literal('autoForSales'),
    /**
     * Uses your exact bid and any placement adjustments you set, and is not subject to dynamic
     * bidding.
     */
    t.literal('manual'),
]);
//# sourceMappingURL=campaign-bidding-strategy.js.map