"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsProductTargetingOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsProductTargetingOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.targetResource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/targets`;
        this.negativeTargetsResource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`;
    }
    /**
     * Retrieve a targeting clause with a specific target ID.
     *
     * @param targetId -
     * @returns
     */
    getTargetingClause(targetId) {
        return this.client.get(`${this.targetResource}/${targetId}`);
    }
    /**
     * Retrieve a targeting clause with additional attributes using a specific target ID.
     *
     * @param targetId -
     * @returns
     */
    getTargetingClauseExtended(targetId) {
        return this.client.get(`${this.targetResource}/extended/${targetId}`);
    }
    /**
     * Retrieves a list of targeting clauses.
     *
     * @param params -
     * @returns
     */
    listTargetingClauses(params) {
        return this.client.get(this.paramsFilterTransformer(this.targetResource, params));
    }
    /**
     * Retrieve a list of targeting clauses with extended properties.
     *
     * @param params -
     * @returns
     */
    listTargetingClausesExtended(params) {
        return this.client.get(this.paramsFilterTransformer(`${this.targetResource}/extended`, params));
    }
    /**
     * Creates one or more targeting expressions.
     *
     * @param params -
     * @returns
     */
    createTargetingClauses(params) {
        return this.client.post(this.targetResource, params);
    }
    /**
     * Update one or more targeting clauses.
     *
     * @param params -
     * @returns
     */
    updateTargetingClauses(params) {
        return this.client.put(this.targetResource, params);
    }
    /**
     * Set the status of targeting clauses to archived.
     * This same operation can also be performed via an update (PUT method), but is included for completeness.
     * Archived entities cannot be made active again.
     *
     * @param targetId -
     * @returns
     */
    archiveTargetingClause(targetId) {
        return this.client.delete(`${this.targetResource}/${targetId}`);
    }
    /**
     * Generate list of recommended products to target, based on the ASIN that is input.
     * Successful response will be a list of recommended ASINs to target.
     *
     * @param params -
     * @returns
     */
    createTargetRecommendations(params) {
        return this.client.post(`${this.targetResource}/productRecommendations`, params);
    }
    /**
     * Gets the list of targeting categories.
     *
     * @param asins -
     * @returns
     */
    getTargetingCategories(asins) {
        return this.client.get(this.paramsFilterTransformer(`${this.targetResource}/categories`, { asins }));
    }
    /**
     * Get refinements for a single category.
     * Categories and Refinements are determined based on marketplaceId of the profile in the request.
     * Note that refinements will differ between marketplaces.
     *
     * @param categoryId -
     * @returns
     */
    getRefinementsForCategory(categoryId) {
        return this.client.get(this.paramsFilterTransformer(`${this.targetResource}/categories/refinements`, { categoryId }));
    }
    /**
     * Get recommended brands for Sponsored Products.
     * Only one parameter (keyword or categoryId) per request is allowed.
     *
     * @param params -
     * @returns
     */
    getBrandRecommendations(params) {
        return this.client.get(this.paramsFilterTransformer(`${this.targetResource}/brands`, params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.TargetingClause)
], SponsoredProductsProductTargetingOperation.prototype, "getTargetingClause", null);
__decorate([
    (0, decorators_1.Decode)(types_1.TargetingClauseExtended)
], SponsoredProductsProductTargetingOperation.prototype, "getTargetingClauseExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.TargetingClause)
], SponsoredProductsProductTargetingOperation.prototype, "listTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.TargetingClauseExtended)
], SponsoredProductsProductTargetingOperation.prototype, "listTargetingClausesExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.TargetingClauseResponse)
], SponsoredProductsProductTargetingOperation.prototype, "createTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.TargetingClauseResponse)
], SponsoredProductsProductTargetingOperation.prototype, "updateTargetingClauses", null);
__decorate([
    (0, decorators_1.Decode)(types_1.TargetingClauseResponse)
], SponsoredProductsProductTargetingOperation.prototype, "archiveTargetingClause", null);
__decorate([
    (0, decorators_1.Decode)(types_1.ProductRecommendationResponse)
], SponsoredProductsProductTargetingOperation.prototype, "createTargetRecommendations", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CategoryResponse)
], SponsoredProductsProductTargetingOperation.prototype, "getTargetingCategories", null);
__decorate([
    (0, decorators_1.Decode)(types_1.RefinementsResponse)
], SponsoredProductsProductTargetingOperation.prototype, "getRefinementsForCategory", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.BrandResponse)
], SponsoredProductsProductTargetingOperation.prototype, "getBrandRecommendations", null);
exports.SponsoredProductsProductTargetingOperation = SponsoredProductsProductTargetingOperation;
//# sourceMappingURL=sponsored-products-product-targeting-operation.js.map