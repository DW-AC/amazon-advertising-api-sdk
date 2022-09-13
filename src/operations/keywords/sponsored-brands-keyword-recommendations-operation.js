"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsKeywordRecommendationsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const types_1 = require("./types");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
class SponsoredBrandsKeywordRecommendationsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/recommendations/keyword`;
    }
    /**
     * Gets an array of keyword recommendation objects for a set of ASINs included either on a landing page or a Store page.
     * Vendors may also specify a custom landing page.
     *
     * @param params -
     * @returns
     */
    getKeywordRecommendations(params) {
        return this.client.post(this.resource, params);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsKeywordRecommendation)
], SponsoredBrandsKeywordRecommendationsOperation.prototype, "getKeywordRecommendations", null);
exports.SponsoredBrandsKeywordRecommendationsOperation = SponsoredBrandsKeywordRecommendationsOperation;
//# sourceMappingURL=sponsored-brands-keyword-recommendations-operation.js.map