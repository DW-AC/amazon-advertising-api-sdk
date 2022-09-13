"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsAdGroupNegativeKeywordsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsAdGroupNegativeKeywordsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/negativeKeywords`;
    }
    /**
     * Retrieves a negative keyword by ID.
     * Note that this call returns the minimal set of keyword fields, but is more efficient than getNegativeKeywordEx.
     *
     * @param keywordId -
     * @returns
     */
    getNegativeKeyword(keywordId) {
        return this.client.get(`${this.resource}/${keywordId}`);
    }
    /**
     * Retrieves a negative keyword and its extended fields by ID.
     * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getNegativeKeyword.
     *
     * @param keywordId -
     * @returns
     */
    getNegativeKeywordExtended(keywordId) {
        return this.client.get(`${this.resource}/extended/${keywordId}`);
    }
    /**
     * Creates one or more negative keywords.
     * Successfully created keywords will be assigned a unique keywordId.
     *
     * @param keywords -
     * @returns
     */
    createNegativeKeywords(keywords) {
        return this.client.post(this.resource, keywords);
    }
    /**
     * Updates one or more negative keywords.
     * Keywords are identified using their keywordId.
     *
     * @param keywords -
     * @returns
     */
    updateNegativeKeywords(keywords) {
        return this.client.put(this.resource, keywords);
    }
    /**
     * Archive a single negative ad group-level keyword.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveNegativeKeyword(keywordId) {
        return this.client.delete(`${this.resource}/${keywordId}`);
    }
    /**
     * Retrieves a list of negative keywords satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listNegativeKeywords(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieves a list of negative keywords with extended fields satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listNegativeKeywordsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeKeyword)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "getNegativeKeyword", null);
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeKeywordExtended)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "getNegativeKeywordExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeKeywordResponse)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "createNegativeKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeKeywordResponse)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "updateNegativeKeywords", null);
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeKeywordResponse)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "archiveNegativeKeyword", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeKeyword)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "listNegativeKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeKeywordExtended)
], SponsoredProductsAdGroupNegativeKeywordsOperation.prototype, "listNegativeKeywordsExtended", null);
exports.SponsoredProductsAdGroupNegativeKeywordsOperation = SponsoredProductsAdGroupNegativeKeywordsOperation;
//# sourceMappingURL=sponsored-products-ad-group-negative-keywords-operation.js.map