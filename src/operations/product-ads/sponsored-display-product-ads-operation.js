"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredDisplayProductAdsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredDisplayProductAdsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredDisplay}/productAds`;
    }
    /**
     * Gets a requested product ad.
     * Note that the ProductAd object is designed for performance, and includes a small set of commonly used fields to reduce size.
     * If the extended set of fields is required, use a product ad operations that returns the ProductAdResponseEx object.
     *
     * @param adId -
     * @returns
     */
    getProductAd(adId) {
        return this.client.get(`${this.resource}/${adId}`);
    }
    /**
     * Gets a list of product ads with extended fields.
     * Gets an array of ProductAdExtended objects for a set of requested ad groups.
     * The ProductAdExtended object includes the extended set of available fields.
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
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone.
     * See Developer Notes for more information.
     *
     * @param adId -
     * @returns
     */
    archiveProductAd(adId) {
        return this.client.delete(`${this.resource}/${adId}`);
    }
    /**
     * Gets a list of product ads.
     * Note that the ProductAd object is designed for performance, and includes a small set of commonly used fields to reduce size.
     * If the extended set of fields is required, use a product ad operation that returns the ProductAdExtended object.
     *
     * @param params -
     * @returns
     */
    listProductAds(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Gets a list of product ads with extended fields.
     * The ProductAdExtended object includes the extended set of available fields.
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
], SponsoredDisplayProductAdsOperation.prototype, "getProductAd", null);
__decorate([
    (0, decorators_1.Decode)(types_1.ProductAdExtended)
], SponsoredDisplayProductAdsOperation.prototype, "getProductAdExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdResponse)
], SponsoredDisplayProductAdsOperation.prototype, "createProductAds", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdResponse)
], SponsoredDisplayProductAdsOperation.prototype, "updateProductAds", null);
__decorate([
    (0, decorators_1.Decode)(types_1.AdResponse)
], SponsoredDisplayProductAdsOperation.prototype, "archiveProductAd", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.ProductAd)
], SponsoredDisplayProductAdsOperation.prototype, "listProductAds", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.ProductAdExtended)
], SponsoredDisplayProductAdsOperation.prototype, "listProductAdsExtended", null);
exports.SponsoredDisplayProductAdsOperation = SponsoredDisplayProductAdsOperation;
//# sourceMappingURL=sponsored-display-product-ads-operation.js.map