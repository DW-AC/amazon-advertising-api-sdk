"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsAdGroupKeywordsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsAdGroupKeywordsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/keywords`;
    }
    /**
     * Retrieves a keyword by ID.
     * Note that this call returns the minimal set of keyword fields, but is more efficient than getBiddableKeywordEx
     *
     * @param keywordId -
     * @returns
     */
    getBiddableKeyword(keywordId) {
        return this.client.get(`${this.resource}/${keywordId}`);
    }
    /**
     * Retrieves a keyword and its extended fields by ID.
     * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getBiddableKeyword.
     * There is no extended keywords interface for Sponsored Brands.
     *
     * @param keywordId -
     * @returns
     */
    getBiddableKeywordExtended(keywordId) {
        return this.client.get(`${this.resource}/extended/${keywordId}`);
    }
    /**
     * Creates one or more keywords.
     * Successfully created keywords will be assigned a unique keywordId.
     *
     * @param keywords -
     * @returns
     */
    createKeywords(keywords) {
        return this.client.post(this.resource, keywords);
    }
    /**
     * Updates one or more keywords.
     * While keywords are in a pending state you can only update the bid amount, or archive them. You cannot change the state from pending
     *
     * @param keywords -
     * @returns
     */
    updateKeywords(keywords) {
        return this.client.put(this.resource, keywords);
    }
    /**
     * Sets the keyword status to archived.
     * This same operation can be performed via an update, but is included for completeness.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveBiddableKeyword(keywordId) {
        return this.client.delete(`${this.resource}/${keywordId}`);
    }
    /**
     * Retrieves a list of keywords satisfying optional criteria for Sponsored Products.
     * List keyword operations are not supported for Sponsored Brands.
     *
     * @param params -
     * @returns
     */
    listBiddableKeywords(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieves a list of keywords and its extended fields satisfying optional criteria for Sponsored Products.
     * List keyword operations are not supported for Sponsored Brands.
     *
     * @param params -
     * @returns
     */
    listBiddableKeywordsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.Keyword)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "getBiddableKeyword", null);
__decorate([
    (0, decorators_1.Decode)(types_1.KeywordExtended)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "getBiddableKeywordExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.KeywordResponse)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "createKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.KeywordResponse)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "updateKeywords", null);
__decorate([
    (0, decorators_1.Decode)(types_1.KeywordResponse)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "archiveBiddableKeyword", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.Keyword)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "listBiddableKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.KeywordExtended)
], SponsoredProductsAdGroupKeywordsOperation.prototype, "listBiddableKeywordsExtended", null);
exports.SponsoredProductsAdGroupKeywordsOperation = SponsoredProductsAdGroupKeywordsOperation;
//# sourceMappingURL=sponsored-products-ad-group-keywords-operation.js.map