"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsSuggestedKeywordsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsSuggestedKeywordsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resourcePostfix = '/suggested/keywords';
        this.adGroupResource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/adGroups/`;
        this.asinResource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/asins`;
    }
    /**
     * Retrieve suggested keyword data for the specified adGroupId.
     *
     * @param adGroupId -
     * @param params -
     * @returns
     */
    getAdGroupSuggestedKeywords(adGroupId, params) {
        return this.client.get(this.query(`${this.adGroupResource}${adGroupId}${this.resourcePostfix}`, params));
    }
    /**
     * Retrieve extended suggested keyword data for the specified adGroupId.
     *
     * @param adGroupId -
     * @param params -
     * @returns
     */
    getAdGroupSuggestedKeywordsExtended(adGroupId, params) {
        return this.client.get(this.query(`${this.adGroupResource}${adGroupId}${this.resourcePostfix}/extended`, params));
    }
    /**
     * Provides suggested keywords for specified ASIN.
     * Suggested keywords are ordered by most effective to least effective.
     *
     * @param asinValue -
     * @param maxNumSuggestions -
     * @returns
     */
    getAsinSuggestedKeywords(asinValue, maxNumSuggestions = 100) {
        return this.client.get(this.query(`${this.asinResource}/${asinValue}${this.resourcePostfix}`, { maxNumSuggestions }));
    }
    /**
     * Provides keyword suggestions for specified list of ASINs.
     * Suggested keywords are ordered by most effective to least effective.
     *
     * @param asinValue -
     * @param maxNumSuggestions -
     * @returns
     */
    bulkGetAsinSuggestedKeywords(asinValue, maxNumSuggestions) {
        return this.client.post(`${this.asinResource}${this.resourcePostfix}`, {
            asins: asinValue,
            maxNumSuggestions,
        });
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.AdGroupSuggestedKeywordsResponse)
], SponsoredProductsSuggestedKeywordsOperation.prototype, "getAdGroupSuggestedKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdGroupSuggestedKeywordsExtendedResponse)
], SponsoredProductsSuggestedKeywordsOperation.prototype, "getAdGroupSuggestedKeywordsExtended", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SuggestedKeywords)
], SponsoredProductsSuggestedKeywordsOperation.prototype, "getAsinSuggestedKeywords", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SuggestedKeywords)
], SponsoredProductsSuggestedKeywordsOperation.prototype, "bulkGetAsinSuggestedKeywords", null);
exports.SponsoredProductsSuggestedKeywordsOperation = SponsoredProductsSuggestedKeywordsOperation;
//# sourceMappingURL=sponsored-products-suggested-keywords-operation.js.map