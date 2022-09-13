"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsAdGroupOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredBrandsAdGroupOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/adGroups`;
    }
    /**
     * Gets an ad group specified by identifier.
     *
     * @param adGroupId -
     * @returns
     */
    getAdGroup(adGroupId) {
        return this.client.get(`${this.resource}/${adGroupId}`);
    }
    /**
     * Gets an array of ad groups associated with the client identifier passed in the authorization header, filtered by specified criteria
     *
     * @param params -
     * @returns
     */
    listAdGroups(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.AdGroup)
], SponsoredBrandsAdGroupOperation.prototype, "getAdGroup", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdGroup)
], SponsoredBrandsAdGroupOperation.prototype, "listAdGroups", null);
exports.SponsoredBrandsAdGroupOperation = SponsoredBrandsAdGroupOperation;
//# sourceMappingURL=sponsored-brands-ad-group-operation.js.map