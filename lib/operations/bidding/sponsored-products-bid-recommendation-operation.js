"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsBidRecommendationOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsBidRecommendationOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}`;
    }
    /**
     * Request bid recommendations for specified ad group.
     *
     * @param id -
     * @returns AdGroupBidRecommendationsResponse
     */
    getAdGroupBidRecommendations(id) {
        return this.client.get(`${this.resource}/adGroups/${id}/bidRecommendations`);
    }
    /**
     * Request bid recommendations for specified keyword.
     *
     * @param id -
     * @returns KeywordBidRecommendationsResponse
     */
    getKeywordBidRecommendations(id) {
        return this.client.get(`${this.resource}/keywords/${id}/bidRecommendations`);
    }
    /**
     * Request bid recommendations for a list of up to 100 keywords.
     *
     * @param params -
     * @returns BidRecommendationsResponse
     */
    createKeywordBidRecommendations(params) {
        return this.client.post(`${this.resource}/keywords/bidRecommendations`, params);
    }
    /**
     * Retrieve a list of bid recommendations for keyword, product, or auto targeting expressions by adGroupId.
     *
     * @param params -
     * @returns BidRecommendationForTargetsResponse
     */
    getBidRecommendations(params) {
        return this.client.post(`${this.resource}/targets/bidRecommendations`, params);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.AdGroupBidRecommendationsResponse)
], SponsoredProductsBidRecommendationOperation.prototype, "getAdGroupBidRecommendations", null);
__decorate([
    (0, decorators_1.Decode)(types_1.KeywordBidRecommendationsResponse)
], SponsoredProductsBidRecommendationOperation.prototype, "getKeywordBidRecommendations", null);
__decorate([
    (0, decorators_1.Decode)(types_1.BidRecommendationsResponse)
], SponsoredProductsBidRecommendationOperation.prototype, "createKeywordBidRecommendations", null);
__decorate([
    (0, decorators_1.Decode)(types_1.BidRecommendationForTargetsResponse)
], SponsoredProductsBidRecommendationOperation.prototype, "getBidRecommendations", null);
exports.SponsoredProductsBidRecommendationOperation = SponsoredProductsBidRecommendationOperation;
//# sourceMappingURL=sponsored-products-bid-recommendation-operation.js.map