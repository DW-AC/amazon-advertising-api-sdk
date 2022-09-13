"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsProductAdsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsProductAdsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/productAds`;
    }
    /**
     * Retrieves a product ad by ID.
     * Note that this call returns the minimal set of product ad fields, but is more efficient than getProductAdEx.
     *
     * @param adId -
     * @returns
     */
    getProductAd(adId) {
        return this.client.get(`${this.resource}/${adId}`);
    }
    /**
     * Retrieves a product ad and its extended fields by ID.
     * Note that this call returns the complete set of product ad fields (including serving status and other read-only fields), but is less efficient than getProductAd.
     *
     * @param adId -
     * @returns
     */
    getProductAdExtended(adId) {
        return this.client.get(`${this.resource}/extended/${adId}`);
    }
    /**
     * Creates one or more product ads.
     * Successfully created product ads will be assigned a unique adId.
     *
     * @param params -
     * @returns
     */
    createProductAds(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Updates one or more product ads.
     * Product ads are identified using their adId.
     *
     * @param params -
     * @returns
     */
    updateProductAds(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Sets the product ad status to archived.
     * This same operation can be performed via an update, but is included for completeness.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param adId -
     * @returns
     */
    archiveProductAd(adId) {
        return this.client.delete(`${this.resource}/${adId}`);
    }
    /**
     * Retrieves a list of product ads satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listProductAds(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieves a list of product ads with extended fields satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listProductAdsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.ProductAd)
], SponsoredProductsProductAdsOperation.prototype, "getProductAd", null);
__decorate([
    (0, decorators_1.Decode)(types_1.ProductAdExtended)
], SponsoredProductsProductAdsOperation.prototype, "getProductAdExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdResponse)
], SponsoredProductsProductAdsOperation.prototype, "createProductAds", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdResponse)
], SponsoredProductsProductAdsOperation.prototype, "updateProductAds", null);
__decorate([
    (0, decorators_1.Decode)(types_1.AdResponse)
], SponsoredProductsProductAdsOperation.prototype, "archiveProductAd", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.ProductAd)
], SponsoredProductsProductAdsOperation.prototype, "listProductAds", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.ProductAdExtended)
], SponsoredProductsProductAdsOperation.prototype, "listProductAdsExtended", null);
exports.SponsoredProductsProductAdsOperation = SponsoredProductsProductAdsOperation;
//# sourceMappingURL=sponsored-products-product-ads-operation.js.map