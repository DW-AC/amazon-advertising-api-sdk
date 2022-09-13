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
exports.SponsoredBrandsBidsRecommendationResponse = exports.SponsoredBrandsBidsRecommendationRequest = exports.RecommendationId = exports.SponsoredBrandsKeywordExpressionType = exports.SponsoredBrandsBrandRecommendationsResponse = exports.SponsoredBrandsBrandRecommendationsRequest = exports.SponsoredBrandsCategoryRecommendationsResponse = exports.SponsoredBrandsCategoryId = exports.SponsoredBrandsCategoryRecommendationsRequest = exports.SponsoredBrandsProductRecommendationsResponse = exports.SponsoredBrandsProductRecommendationsRequest = exports.SponsoredBrandsProductRecommendationFilterType = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../product-targeting/types");
const types_2 = require("../campaigns/types");
const types_3 = require("../keywords/types");
exports.SponsoredBrandsProductRecommendationFilterType = t.literal('ASINS');
exports.SponsoredBrandsProductRecommendationsRequest = t.strict({
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.string,
    /**
     * Sets a limit on the number of results returned by an operation.
     */
    maxResults: t.number,
    /**
     * Restricts recommendations to the criteria specified in the filters.
     */
    filters: t.array(t.strict({
        filterType: exports.SponsoredBrandsProductRecommendationFilterType,
        values: t.array(t.string),
    })),
});
exports.SponsoredBrandsProductRecommendationsResponse = t.strict({
    /**
     * Operations that return paginated results include a pagination token in this field.
     * To retrieve the next page of results, call the same operation and specify this token in the request.
     * If the NextToken field is empty, there are no further results.
     */
    nextToken: t.string,
    recommendedProducts: t.array(t.strict({
        /**
         * The recommended target ASIN.
         */
        recommendedTargetAsin: t.string,
    })),
});
exports.SponsoredBrandsCategoryRecommendationsRequest = t.strict({
    /**
     * A list of ASINs.
     */
    asins: t.array(t.string),
});
exports.SponsoredBrandsCategoryId = t.number;
const SponsoredBrandsCategoryResponse = t.strict({
    /**
     * The category identifier.
     */
    id: exports.SponsoredBrandsCategoryId,
    /**
     * The category name.
     */
    name: t.string,
    /**
     * Set to true if the category can be targeted in a targeting expression, and false if not.
     */
    isTargetable: t.boolean,
    /**
     * The path of the category within the category catalogue.
     */
    path: t.string,
});
exports.SponsoredBrandsCategoryRecommendationsResponse = t.strict({
    categoryRecommendationResults: t.array(SponsoredBrandsCategoryResponse),
});
exports.SponsoredBrandsBrandRecommendationsRequest = t.partial({
    /**
     * The category identifier for which to get recommendations.
     */
    categoryId: exports.SponsoredBrandsCategoryId,
    /**
     * The keyword for which to get recommendations.
     */
    keyword: t.string,
});
const SponsoredBrandsBrandResponse = t.strict({
    /**
     * The Brand identifier.
     */
    id: types_1.BrandId,
    /**
     * The Brand name
     */
    name: t.string,
});
exports.SponsoredBrandsBrandRecommendationsResponse = t.strict({
    brandRecommendationResults: t.array(SponsoredBrandsBrandResponse),
});
/**
 * Bid recommendations types
 */
const SponsoredBrandsBidRecommendationKeyword = t.strict({
    /**
     * The match type.
     * For more information, see match types in the Amazon Advertising support center.
     */
    matchType: types_3.KeywordMatchType,
    /**
     * The text of the keyword. Maximum of 10 words.
     */
    keywordText: t.string,
});
const SponsoredBrandsRecommendedBid = t.strict({
    rangeStart: t.number,
    rangeEnd: t.number,
    recommended: t.number,
});
exports.SponsoredBrandsKeywordExpressionType = t.union([
    t.literal('broad'),
    t.literal('exact'),
    t.literal('phrase'),
]);
exports.RecommendationId = t.string;
exports.SponsoredBrandsBidsRecommendationRequest = t.strict({
    /**
     * The identifier of the campaign for which bid recommendations are created.
     */
    campaignId: types_2.CampaignId,
    targets: types_1.SponsoredBrandsExpressions,
    keywords: t.array(SponsoredBrandsBidRecommendationKeyword),
});
exports.SponsoredBrandsBidsRecommendationResponse = t.strict({
    /**
     * Lists the bid recommendations for the keywords specified in the request.
     */
    keywordsBidsRecommendationSuccessResults: t.array(t.strict({
        /**
         * The identifier of the keyword bid recommendation.
         */
        recommendationId: exports.RecommendationId,
        recommendedBid: SponsoredBrandsRecommendedBid,
        keyword: SponsoredBrandsBidRecommendationKeyword,
        keywordIndex: t.number,
    })),
    /**
     * Lists errors that occured during creation of keyword bid recommendations.
     */
    keywordsBidsRecommendationErrorResults: t.array(t.strict({
        code: t.string,
        details: t.string,
        keyword: t.strict({
            /**
             * The text of the keyword. Maximum of 10 words.
             */
            value: t.string,
            /**
             * The match type. For more information, see match types in the Amazon Advertising support center.
             */
            type: exports.SponsoredBrandsKeywordExpressionType,
        }),
        keywordIndex: t.number,
    })),
    /**
     * Lists the bid recommendations for the keywords or targets specified in the request.
     */
    targetsBidsRecommendationSuccessResults: t.array(t.strict({
        /**
         * The identifier of the target bid recommendation.
         */
        recommendationId: exports.RecommendationId,
        recommendedBid: SponsoredBrandsRecommendedBid,
        targets: types_1.SponsoredBrandsExpressions,
        /**
         * Correlates the keyword to the keyword array index specified in the request. Zero-based.
         */
        targetsIndex: t.number,
    })),
    /**
     * Lists errors that occured during creation of target bid recommendations.
     */
    targetsBidsRecommendationErrorResults: t.array(t.strict({
        code: t.string,
        details: t.string,
        targets: types_1.SponsoredBrandsExpressions,
        /**
         * Correlates the keyword to the keyword array index specified in the request. Zero-based.
         */
        targetsIndex: t.number,
    })),
});
//# sourceMappingURL=types.js.map