"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsKeywordsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const types_1 = require("./types");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
class SponsoredBrandsKeywordsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/keywords`;
    }
    /**
     * Gets an array of keywords, filtered by optional criteria
     *
     * @param params -
     * @returns
     */
    listKeywords(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Updates one or more keywords.
     * Keywords submitted for update have state set to pending while under moderation review.
     * Note that moderation may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    updateKeywords(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Creates one or more keywords.
     * Note that state can't be set at keyword creation.
     * Keywords submitted for creation have state set to pending while under moderation review.
     * Note that moderation review may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    createKeywords(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Gets a keyword specified by identifier.
     *
     * @param keywordId -
     * @returns
     */
    getKeyword(keywordId) {
        return this.client.get(`${this.resource}/${keywordId}`);
    }
    /**
     * Archives a keyword specified by identifier.
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone. See Developer Notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveKeyword(keywordId) {
        return this.client.delete(`${this.resource}/${keywordId}`);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsKeyword)
], SponsoredBrandsKeywordsOperation.prototype, "listKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsKeywordResponse)
], SponsoredBrandsKeywordsOperation.prototype, "updateKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsKeywordResponse)
], SponsoredBrandsKeywordsOperation.prototype, "createKeywords", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsKeyword)
], SponsoredBrandsKeywordsOperation.prototype, "getKeyword", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsKeyword)
], SponsoredBrandsKeywordsOperation.prototype, "archiveKeyword", null);
exports.SponsoredBrandsKeywordsOperation = SponsoredBrandsKeywordsOperation;
//# sourceMappingURL=sponsored-brands-keywords-operation.js.map