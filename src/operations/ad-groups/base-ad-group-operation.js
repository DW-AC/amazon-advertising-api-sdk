"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAdGroupOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class BaseAdGroupOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.uriPrefix = amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts;
        this.resource = `${this.version}/${this.uriPrefix}/adGroups`;
    }
    /**
     * Retrieves an ad group by ID.
     * Note that this call returns the minimal set of ad group fields, but is more efficient than getAdGroupExtended
     *
     * @param adGroupId -
     * @returns
     */
    getAdGroup(adGroupId) {
        return this.client.get(`${this.resource}/${adGroupId}`);
    }
    /**
     * Retrieves an ad group and its extended fields by ID.
     * Note that this call returns the complete set of ad group fields (including serving status and other read-only fields), but is less efficient than getAdGroup
     *
     * @param adGroupId -
     * @returns
     */
    getAdGroupExtended(adGroupId) {
        return this.client.get(`${this.resource}/extended/${adGroupId}`);
    }
    /**
     * Creates one or more ad groups. Successfully created ad groups will be assigned a unique adGroupId
     *
     * @param adGroups -
     * @returns
     */
    createAdGroups(adGroups) {
        return this.client.post(this.resource, adGroups);
    }
    /**
     * Updates one or more ad groups. Ad groups are identified using their adGroupId
     *
     * @param adGroups -
     * @returns
     */
    updateAdGroups(adGroups) {
        return this.client.put(this.resource, adGroups);
    }
    /**
     * Sets the ad group status to archived.
     * This same operation can be performed via an update, but is included for completeness
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param adGroupId -
     * @returns
     */
    archiveAdGroup(adGroupId) {
        return this.client.delete(`${this.resource}/${adGroupId}`);
    }
    /**
     * Retrieves a list of ad groups satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listAdGroups(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieves a list of ad groups with extended fields satisfying optional filtering criteria.
     *
     * @param params -
     * @returns
     */
    listAdGroupsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.AdGroup)
], BaseAdGroupOperation.prototype, "getAdGroup", null);
__decorate([
    (0, decorators_1.Decode)(types_1.AdGroupExtended)
], BaseAdGroupOperation.prototype, "getAdGroupExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdGroupResponse)
], BaseAdGroupOperation.prototype, "createAdGroups", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdGroupResponse)
], BaseAdGroupOperation.prototype, "updateAdGroups", null);
__decorate([
    (0, decorators_1.Decode)(types_1.AdGroupResponse)
], BaseAdGroupOperation.prototype, "archiveAdGroup", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdGroup)
], BaseAdGroupOperation.prototype, "listAdGroups", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.AdGroupExtended)
], BaseAdGroupOperation.prototype, "listAdGroupsExtended", null);
exports.BaseAdGroupOperation = BaseAdGroupOperation;
//# sourceMappingURL=base-ad-group-operation.js.map