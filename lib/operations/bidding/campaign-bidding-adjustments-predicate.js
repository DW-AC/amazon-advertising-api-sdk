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
exports.CampaignBiddingAdjustments = exports.CampaignBiddingAdjustmentsPredicate = void 0;
const t = __importStar(require("io-ts"));
/**
 * You can enable controls to adjust your bid based on the placement location.
 * Specify a location where you want to use bid controls.
 * The percentage value set is the percentage of the original bid for which you want to have your
 * bid adjustment increased. For example, a 50% adjustment on a $1.00 bid would increase the bid
 * to $1.50 for the opportunity to win a specified placement.
 */
exports.CampaignBiddingAdjustmentsPredicate = t.union([
    /**
     * Top of search (first page)
     */
    t.literal('placementTop'),
    /**
     * Product pages
     */
    t.literal('placementProductPage'),
]);
exports.CampaignBiddingAdjustments = t.array(t.intersection([
    t.type({
        predicate: exports.CampaignBiddingAdjustmentsPredicate,
    }),
    t.partial({
        percentage: t.number,
    }),
]));
//# sourceMappingURL=campaign-bidding-adjustments-predicate.js.map