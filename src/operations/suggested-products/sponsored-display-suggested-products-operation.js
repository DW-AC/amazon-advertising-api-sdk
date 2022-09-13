"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredDisplaySuggestedProductsOperation = void 0;
const operation_1 = require("../operation");
const types_1 = require("./types");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
class SponsoredDisplaySuggestedProductsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredDisplay}/suggestedProducts`;
    }
    /**
     * Gets a list of all products eligible for advertising using the specified tactic type. Each product in the list includes an associated readiness status.
     *
     * @param params -
     * @returns
     */
    listSuggestedProducts(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Gets the readiness status for a specified list of up to 100 products.
     *
     * @param params -
     * @returns
     */
    getProductReadiness(params) {
        return this.client.post(`${this.resource}/productReadinessStatus`, params);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SuggestedProduct)
], SponsoredDisplaySuggestedProductsOperation.prototype, "listSuggestedProducts", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.ProductReadinessResponse)
], SponsoredDisplaySuggestedProductsOperation.prototype, "getProductReadiness", null);
exports.SponsoredDisplaySuggestedProductsOperation = SponsoredDisplaySuggestedProductsOperation;
//# sourceMappingURL=sponsored-display-suggested-products-operation.js.map