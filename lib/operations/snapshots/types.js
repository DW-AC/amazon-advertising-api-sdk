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
exports.SnapshotResultType = exports.RequestSnapshotParams = exports.SnapshotResponse = exports.FailureSnapshotResponse = exports.InProgressSnapshotResponse = exports.SuccessSnapshotResponse = exports.SnapshotState = exports.RecordTypeResponse = exports.SponsoredBrandsRecordType = exports.SponsoredDisplayRecordType = exports.SponsoredProductsRecordType = exports.SnapshotId = void 0;
const t = __importStar(require("io-ts"));
const DateFromNumber_1 = require("io-ts-types/lib/DateFromNumber");
const types_1 = require("../campaigns/types");
const types_2 = require("../ad-groups/types");
const types_3 = require("../keywords/types");
const types_4 = require("../product-ads/types");
const types_5 = require("../product-targeting/types");
const types_6 = require("../negative-targeting/types");
exports.SnapshotId = t.string;
exports.SponsoredProductsRecordType = t.union([
    t.literal('campaigns'),
    t.literal('adGroups'),
    t.literal('productAds'),
    t.literal('keywords'),
    t.literal('negativeKeywords'),
    t.literal('campaignNegativeKeywords'),
    t.literal('targets'),
    t.literal('negativeTargets'),
]);
exports.SponsoredDisplayRecordType = t.union([
    t.literal('campaigns'),
    t.literal('adGroups'),
    t.literal('productAds'),
    t.literal('keywords'),
    t.literal('negativeKeywords'),
    t.literal('campaignNegativeKeywords'),
    t.literal('targets'),
    t.literal('negativeTargets'),
]);
exports.SponsoredBrandsRecordType = t.union([t.literal('campaigns'), t.literal('keywords')]);
exports.RecordTypeResponse = t.union([
    t.literal('campaign'),
    t.literal('adGroup'),
    t.literal('productAd'),
    t.literal('keyword'),
    t.literal('negativeKeyword'),
    t.literal('campaignNegativeKeyword'),
    t.literal('target'),
    t.literal('negativeTarget'),
    t.literal('campaigns'),
    t.literal('adGroups'),
    t.literal('productAds'),
    t.literal('keywords'),
    t.literal('negativeKeywords'),
    t.literal('campaignNegativeKeywords'),
    t.literal('targets'),
    t.literal('negativeTargets'),
]);
exports.SnapshotState = t.union([
    t.literal('enabled'),
    t.literal('paused'),
    t.literal('archived'),
]);
const BaseSnapshotResponse = t.strict({
    /**
     * The ID of the snapshot that was requested.
     */
    snapshotId: exports.SnapshotId,
});
exports.SuccessSnapshotResponse = t.intersection([
    BaseSnapshotResponse,
    t.strict({
        /**
         * The status of the generation of the snapshot.
         */
        status: t.literal('SUCCESS'),
    }),
    t.partial({
        /**
         * The record type of the report.
         */
        statusDetails: t.string,
        /**
         * The URI for the snapshot. It's only available if status is SUCCESS.
         */
        location: t.string,
        /**
         * The size of the snapshot file in bytes. It's only available if status is SUCCESS.
         */
        fileSize: t.number,
        /**
         * The epoch time for expiration of the snapshot file. It's only available if status is SUCCESS.
         */
        expiration: DateFromNumber_1.DateFromNumber,
    }),
]);
exports.InProgressSnapshotResponse = t.intersection([
    BaseSnapshotResponse,
    t.strict({
        /**
         * The status of the generation of the snapshot.
         */
        status: t.literal('IN_PROGRESS'),
    }),
    t.partial({
        /**
         * Description of the status.
         */
        statusDetails: t.string,
        /**
         * The record type of the report.
         * TODO: Need check again on Production API. Sandbox API returns singular. Not same in the docs.
         */
        recordType: exports.RecordTypeResponse,
    }),
]);
exports.FailureSnapshotResponse = t.intersection([
    BaseSnapshotResponse,
    t.strict({
        /**
         * The status of the generation of the snapshot.
         */
        status: t.literal('FAILURE'),
        /**
         * Description of the status.
         */
        statusDetails: t.string,
    }),
]);
exports.SnapshotResponse = t.union([
    exports.SuccessSnapshotResponse,
    exports.InProgressSnapshotResponse,
    exports.FailureSnapshotResponse,
]);
exports.RequestSnapshotParams = t.partial({
    /**
     * Restricts results to entities with state within the specified comma-separated list.
     * Must be one of: `enabled`, `paused`, `archived`.
     * Default behavior is to include enabled and paused.
     */
    stateFilter: exports.SnapshotState,
});
exports.SnapshotResultType = t.union([
    types_1.Campaign,
    types_2.AdGroup,
    types_3.Keyword,
    types_3.NegativeKeyword,
    types_3.CampaignNegativeKeyword,
    types_4.ProductAd,
    types_5.TargetingClause,
    types_6.NegativeTargetingClause,
]);
//# sourceMappingURL=types.js.map