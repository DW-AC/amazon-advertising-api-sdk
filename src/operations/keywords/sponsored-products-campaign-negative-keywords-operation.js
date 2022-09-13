"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsCampaignNegativeKeywordsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsCampaignNegativeKeywordsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/campaignNegativeKeywords`;
    }
    /**
     * Retrieves a campaign negative keyword by ID.
     * Note that this call returns the minimal set of keyword fields, but is more efficient than getCampaignNegativeKeywordEx.
     * Not available for vendors.
     *
     * @param keywordId -
     * @returns
     */
    getCampaignNegativeKeyword(keywordId) {
        return this.client.get(`${this.resource}/${keywordId}`);
    }
    /**
     * Retrieves a campaign negative keyword and its extended fields by ID.
     * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getCampaignNegativeKeyword.
     * Not available for vendors.
     *
     * @param keywordId -
     * @returns
     */
    getCampaignNegativeKeywordExtended(keywordId) {
        return this.client.get(`${this.resource}/extended/${keywordId}`);
    }
    /**
     * Creates one or more campaign negative keywords.
     * Successfully created keywords will be assigned a unique keywordId.
     * Not available for vendors.
     *
     * @param keywords -
     * @returns
     */
    createCampaignNegativeKeywords(keywords) {
        return this.client.post(this.resource, keywords);
    }
    /**
     * Updates one or more campaign negative keywords.
     * Keywords are identified using their keywordId.
     * Not available for vendors.
     *
     * @param keywords -
     * @returns
     */
    updateCampaignNegativeKeywords(keywords) {
        return this.client.put(this.resource, keywords);
    }
    /**
     * Sets the campaign negative keyword status to deleted.
     * This same operation can be performed via an update to the status, but is included for completeness.
     * Not available for vendors.
     *
     * Note: While ad group-level keywords (both biddable and negative) support paused and archived status, campaign negative keywords only support enabled or deleted status.
     * Deleted status indicates permanent removal of the campaign negative keyword.
     * Retrieving a deleted entity by ID will result in a 404 error.
     *
     * @param keywordId -
     * @returns
     */
    archiveCampaignNegativeKeyword(keywordId) {
        return this.client.delete(`${this.resource}/${keywordId}`);
    }
    /**
     * Retrieves a list of campaign negative keywords satisfying optional criteria.
     * Not available for vendors.
     *
     * @param params -
     * @returns
     */
    listCampaignNegativeKeywords(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieves a list of campaign negative keywords with extended fields satisfying optional criteria.
     * Not available for vendors.
     *
     * @param params -
     * @returns
     */
    listCampaignNegativeKeywordsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignNegativeKeyword)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "getCampaignNegativeKeyword", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignNegativeKeywordExtended)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "getCampaignNegativeKeywordExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignNegativeKeywordResponse)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "createCampaignNegativeKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignNegativeKeywordResponse)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "updateCampaignNegativeKeywords", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignNegativeKeywordResponse)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "archiveCampaignNegativeKeyword", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignNegativeKeyword)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "listCampaignNegativeKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignNegativeKeywordExtended)
], SponsoredProductsCampaignNegativeKeywordsOperation.prototype, "listCampaignNegativeKeywordsExtended", null);
exports.SponsoredProductsCampaignNegativeKeywordsOperation = SponsoredProductsCampaignNegativeKeywordsOperation;
//# sourceMappingURL=sponsored-products-campaign-negative-keywords-operation.js.map