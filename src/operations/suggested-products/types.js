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
exports.ProductReadinessResponse = exports.ProductReadinessRequest = exports.SuggestedProduct = exports.ListSuggestedProductsParams = exports.ReadinessStatus = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
exports.ReadinessStatus = t.union([
    /**
     * Indicates a product with a high number of detail page views in the past 28 days.
     * A product with this readiness status is likely to get the largest audience reach at a lower advertising cost of sales (ACOS).
     */
    t.literal('HIGH'),
    /**
     * Indicates a product with a medium number of detail page views in the past 28 days.
     * A product with this readiness status is likely to get a lower audience reach than the high readiness status using comparable bids.
     */
    t.literal('MEDIUM'),
    /**
     * Indicates a product with a low number of detail page views in the past 28 days.
     * A product with this readiness status is likely to get the lowest audience reach.
     * These products may require a higher maximum bid to have a significant audience reach.
     */
    t.literal('LOW'),
    /**
     * ASIN is not valid or is ineligible for advertising.
     */
    t.literal('NOT_APPLICABLE'),
]);
exports.ListSuggestedProductsParams = t.intersection([
    types_1.ListPagination,
    t.strict({
        /**
         * The list in the response is filtered to include only products that are eligible for advertising using the requested tactic.
         */
        tacticFilter: t.union([
            /**
             * Views Shoppers who viewed the detail pages of your advertised products or similar products.
             * This was formerly called remarketing, which is an alternative enum name.
             */
            t.literal('T00010'),
            /**
             * Views Shoppers who viewed the detail pages of your advertised products or similar products.
             */
            t.literal('remarketing'),
        ]),
    }),
    t.partial({
        /**
         * The returned response is filtered to include only eligible products with a readiness status value that matches those specified in the comma-delimited string.
         */
        readinessFilter: exports.ReadinessStatus,
    }),
]);
exports.SuggestedProduct = t.strict({
    /**
     * The readinesss status indicates the likelihood of a product to meet advertiser objectives if advertised in a campaign of the specified tactic type.
     */
    readinessStatus: exports.ReadinessStatus,
    /**
     * A list of ASINs.
     */
    asins: t.array(t.string),
});
exports.ProductReadinessRequest = t.strict({
    /**
     * A comma separated list of product ASINs.
     */
    asins: t.array(t.string),
    /**
     * Filters the products to specified advertising tactic.
     * This is currently available for T00010 and remarketing tactics only.
     */
    tactic: t.union([
        /**
         * Views Shoppers who viewed the detail pages of your advertised products or similar products.
         * This was formerly called remarketing, which is an alternative enum name.
         */
        t.literal('T00010'),
        /**
         * Views Shoppers who viewed the detail pages of your advertised products or similar products.
         */
        t.literal('remarketing'),
    ]),
});
exports.ProductReadinessResponse = t.strict({
    /**
     * The product ASIN.
     */
    asin: t.string,
    /**
     * The readinesss status indicates the likelihood of a product to meet advertiser objectives if advertised in a campaign of the specified tactic type.
     */
    readinessStatus: exports.ReadinessStatus,
});
//# sourceMappingURL=types.js.map