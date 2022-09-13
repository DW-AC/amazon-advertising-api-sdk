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
exports.Tactic = exports.ResponseStatus = exports.ListPagination = exports.AmazonMarketplaceAdvertisingTimeZoneType = exports.AmazonMarketplaceAdvertisingCurrencyType = exports.AmazonMarketplaceAdvertisingCountryCodeType = exports.createEnumType = exports.EnumType = void 0;
const t = __importStar(require("io-ts"));
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
class EnumType extends t.Type {
    constructor(e, name) {
        super(name || 'enum', (u) => Object.values(this.enumObject).some((v) => v === u), (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)), t.identity);
        this._tag = 'EnumType';
        this.enumObject = e;
    }
}
exports.EnumType = EnumType;
// simple helper function
const createEnumType = (e, name) => new EnumType(e, name);
exports.createEnumType = createEnumType;
exports.AmazonMarketplaceAdvertisingCountryCodeType = (0, exports.createEnumType)(amazon_marketplaces_1.AmazonMarketplaceAdvertisingCountryCode);
exports.AmazonMarketplaceAdvertisingCurrencyType = (0, exports.createEnumType)(amazon_marketplaces_1.AmazonMarketplaceAdvertisingCurrency);
exports.AmazonMarketplaceAdvertisingTimeZoneType = (0, exports.createEnumType)(amazon_marketplaces_1.AmazonMarketplaceAdvertisingTimeZone);
exports.ListPagination = t.partial({
    /**
     * 0-indexed record offset for the result set. Defaults to 0.
     */
    startIndex: t.number,
    /**
     * Number of records to include in the paged response. Defaults to max page size.
     */
    count: t.number,
});
exports.ResponseStatus = t.strict({
    /**
     * An enumerated success or error code for machine use.
     */
    code: t.number,
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
});
/**
 * The advertising tactic associated with the campaign.
 */
exports.Tactic = t.union([
    /**
     * Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon.
     * This tactic is for use by only vendors.
     * This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.
     * This tactic name is only applicable for the requestReport operation and does not apply to any other campaign management operations.
     */
    t.literal('T00001'),
    /**
     * Choose individual products to show your ads in placements related to those products.
     * [Categories] Categories: Choose individual categories to show your ads in placements related to those categories.
     */
    t.literal('T00020'),
    /**
     * Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.
     * Select individual audiences to show your ads.
     */
    t.literal('T00030'),
    /**
     * Shoppers who viewed the detail pages of your advertised products or similar products.
     */
    t.literal('remarketing'),
]);
//# sourceMappingURL=types.js.map