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
exports.SponsoredBrandsDraftCampaignResponse = exports.SponsoredBrandsDraftCampaign = exports.SponsoredBrandsListDraftCampaignResponse = exports.SponsoredBrandsListDraftCampaignRequest = exports.BudgetType = exports.SponsoredBrandsDraftCampaignName = exports.SponsoredBrandsDraftCampaignId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
const types_2 = require("../portfolios/types");
const types_3 = require("../keywords/types");
exports.SponsoredBrandsDraftCampaignId = t.number;
exports.SponsoredBrandsDraftCampaignName = t.string;
exports.BudgetType = t.union([t.literal('lifetime'), t.literal('daily')]);
const SponsoredBrandsCreative = t.strict({
    /**
     * A brand name. Maximum length is 30 characters.
     */
    brandName: t.string,
    /**
     * The identifier of the brand logo image from the Store assets library.
     * See listAssets for more information.
     * Note that for campaigns created in the Amazon Advertising console prior to release of the Store assets library, responses will not include a value for the brandLogoAssetID field.
     */
    brandLogoAssetID: t.string,
    /**
     * The address of the hosted image.
     */
    brandLogoUrl: t.string,
    /**
     * The headline text.
     * Maximum length of the string is 50 characters for all marketplaces other than Japan, which has a maximum length of 35 characters.
     */
    headline: t.string,
    /**
     * An array of ASINs associated with the creative.
     */
    asins: t.array(t.string),
    /**
     * Note that this field is supported only in the US and UK marketplaces.
     * Set to true to have Amazon show other products from your landing page in the advertisement if they are more relevant to the shopper's search.
     * Set to false to use the ASINs specified in the asins field. Do not specify in unsupported marketplaces.
     */
    shouldOptimizeAsins: t.boolean,
});
const SponsoredBrandsLandingPage = t.intersection([
    t.partial({
        /**
         * An array of ASINs used to generate a simple landing page.
         * The response includes the URL of the generated simple landing page.
         * Do not include this property in the request if the url property is also included, these properties are mutually exclusive.
         */
        asins: t.array(t.string),
    }),
    t.strict({
        /**
         * URL of a Store page.
         * Vendors may also specify the URL of a custom landing page.
         * If a custom URL is specified, the landing page must include include the ASINs of at least three products that are advertised as part of the campaign.
         * Do not include this property in the request if the asins property is also included, these properties are mutually exclusive.
         */
        url: t.string,
    }),
]);
exports.SponsoredBrandsListDraftCampaignRequest = t.intersection([
    types_1.ListPagination,
    t.partial({
        /**
         * The returned array only includes draft campaigns with the specified name.
         */
        name: exports.SponsoredBrandsDraftCampaignName,
        /**
         * The returned array includes only draft campaigns with identifiers matching those specified in the comma-delimited string.
         */
        draftCampaignIdFilter: exports.SponsoredBrandsDraftCampaignId,
        /**
         * The returned array includes only campaigns associated with Portfolio identifiers matching those specified in the comma-delimited string.
         */
        portfolioIdFilter: types_2.PortfolioId,
    }),
]);
exports.SponsoredBrandsListDraftCampaignResponse = t.intersection([
    t.partial({
        /**
         * The brand entity identifier.
         * Note that this field is required for sellers.
         * For more information, see the Stores reference or Brands reference.
         */
        brandEntityId: t.string,
        /**
         * The identifier of the draft campaign.
         */
        draftCampaignId: exports.SponsoredBrandsDraftCampaignId,
    }),
    t.strict({
        /**
         * The name of the draft campaign. Maximum 128 characters. Duplicate campaign names are not allowed.
         */
        name: exports.SponsoredBrandsDraftCampaignName,
        /**
         * The budget associated with the draft campaign.
         */
        budget: t.number,
        /**
         * Note that for the lifetime budget type, startDate and endDate must be specified.
         * The lifetime budget range is from 100 to 20,000,000 and daily budget range is 1 to 1,000,000 by default for most marketplaces.
         * For the JP marketplace, the lifetime budget range is fromt 10,000 to 2,000,000,000, and the daily budget range is 100 to 21,000,000.
         */
        budgetType: exports.BudgetType,
        /**
         * The YYYYMMDD start date for the campaign.
         * If this field is not set to a value, the current date is used.
         */
        startDate: t.string,
        /**
         * The YYYYMMDD end date for the campaign.
         * Must be greater than the value for startDate.
         * If not specified, the campaign has no end date and runs continuously.
         */
        endDate: t.string,
        /**
         * Set to true to allow Amazon to automatically optimize bids for placements below top of search.
         */
        bidOptimization: t.boolean,
        /**
         * A bid multiplier. Note that this field can only be set when 'bidOptimization' is set to false.
         * Value is a percentage to two decimal places.
         * Example: If set to -30.00 for a $5.00 bid, the resulting bid is $3.00.
         */
        bidMultiplier: t.number,
        /**
         * The identifier of the Portfolio to which the draft campaign is associated.
         */
        portfolioId: types_2.PortfolioId,
        creative: SponsoredBrandsCreative,
        landingPage: SponsoredBrandsLandingPage,
    }),
]);
const SponsoredBrandsCreateDraftCampaignPositiveKeyword = t.strict({
    /**
     * The keyword text. Maximum length is ten words.
     */
    keywordText: t.string,
    /**
     * The match type. For more information, see match types in the Amazon Advertising support center.
     */
    matchType: types_3.KeywordMatchType,
    /**
     * The bid associated with the keyword.
     * For information on the maximum allowable bid, see the 'keyword bid constraints by marketplace' section of the 'supported features' document in the 'guides' section. Note that the bid cannot not be larger than the budget associated with the campaign.
     */
    bid: t.number,
});
const SponsoredBrandsCreateDraftCampaignNegativeKeyword = t.strict({
    /**
     * The keyword text. Maximum length is ten words.
     */
    keywordText: t.string,
    /**
     * The negative match type.
     * For more information, see negative keyword match types in the Amazon Advertising support center.
     */
    matchType: types_3.NegativeKeywordMatchType,
});
exports.SponsoredBrandsDraftCampaign = t.intersection([
    exports.SponsoredBrandsListDraftCampaignResponse,
    t.strict({
        /**
         * An array of keywords associated with the draft campaign.
         */
        keywords: t.array(SponsoredBrandsCreateDraftCampaignPositiveKeyword),
        /**
         * An array of negative keywords associated with the draft campaign.
         * This list must be the complete list of negative keywords for the campaign. If set to null, deletes all existing negative keywords on the draft campaign.
         * If this property is not included in the request, negative keywords are not updated.
         */
        negativeKeywords: t.array(SponsoredBrandsCreateDraftCampaignNegativeKeyword),
    }),
]);
exports.SponsoredBrandsDraftCampaignResponse = t.partial({
    /**
     * The identifier of the draft campaign.
     */
    draftCampaignId: exports.SponsoredBrandsDraftCampaignId,
    keywordResponses: t.array(types_3.SponsoredBrandsKeywordResponse),
    /**
     * The draft campaign response code.
     */
    code: t.string,
    /**
     * A human-readable description of the 'code' field value.
     */
    details: t.string,
});
//# sourceMappingURL=types.js.map