"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsNegativeKeywordsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredBrandsNegativeKeywordsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/negativeKeywords`;
    }
    /**
     * Updates one or more negative keywords.
     * Negative keywords submitted for update have state set to pending while under moderation review.
     * Note that moderation may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    updateNegativeKeywords(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Creates one or more negative keywords.
     * Note that bid and state can't be set at negative keyword creation.
     * Negative keywords submitted for creation have state set to pending while under moderation review.
     * Note that moderation review may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    createNegativeKeywords(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Gets a negative keyword specified by identifier.
     *
     * @param keywordId -
     * @returns
     */
    getNegativeKeyword(keywordId) {
        return this.client.get(`${this.resource}/${keywordId}`);
    }
    /**
     * Archives a negative keyword specified by identifier.
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone. See Developer Notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveNegativeKeyword(keywordId) {
        return this.client.delete(`${this.resource}/${keywordId}`);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsNegativeKeywordResponse)
], SponsoredBrandsNegativeKeywordsOperation.prototype, "updateNegativeKeywords", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsNegativeKeywordResponse)
], SponsoredBrandsNegativeKeywordsOperation.prototype, "createNegativeKeywords", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsNegativeKeyword)
], SponsoredBrandsNegativeKeywordsOperation.prototype, "getNegativeKeyword", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsNegativeKeywordResponse)
], SponsoredBrandsNegativeKeywordsOperation.prototype, "archiveNegativeKeyword", null);
exports.SponsoredBrandsNegativeKeywordsOperation = SponsoredBrandsNegativeKeywordsOperation;
//# sourceMappingURL=sponsored-brands-negative-keywords-operation.js.map