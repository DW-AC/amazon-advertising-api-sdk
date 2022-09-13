"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsProductTargetingOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredBrandsProductTargetingOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.targetResource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/targets`;
        this.negativeTargetResource = `sb/negativeTargets`;
    }
    /**
     * Gets a list of product targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
     *
     * @param params -
     * @returns
     */
    listTargets(params) {
        return this.client.post(this.targetResource, params);
    }
    /**
     * Updates one or more targets.
     *
     * @param params -
     * @returns
     */
    updateTargets(params) {
        return this.client.put(this.targetResource, params);
    }
    /**
     * Create one or more new targets.
     *
     * @param params -
     * @returns
     */
    createTargets(params) {
        return this.client.post(this.targetResource, params);
    }
    /**
     * Gets a target specified by identifier.
     *
     * @param targetId -
     * @returns
     */
    getTarget(targetId) {
        return this.client.get(`${this.targetResource}/${targetId}`);
    }
    /**
     * Archives a target specified by identifier. Note that archiving is permanent, and once a target has been archived it can't be made active again.
     *
     * @param targetId -
     * @returns
     */
    archiveTarget(targetId) {
        return this.client.delete(`${this.targetResource}/${targetId}`);
    }
    /**
     * Gets one or more product targets specified by identifiers.
     *
     * @param params -
     * @returns
     */
    batchGetTargets(params) {
        return this.client.post(this.targetResource, params);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsListTargetsResponse)
], SponsoredBrandsProductTargetingOperation.prototype, "listTargets", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsUpdateTargetsResponse)
], SponsoredBrandsProductTargetingOperation.prototype, "updateTargets", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsCreateTargetsResponse)
], SponsoredBrandsProductTargetingOperation.prototype, "createTargets", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsTargetingClause)
], SponsoredBrandsProductTargetingOperation.prototype, "getTarget", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsTargetingClauseResponse)
], SponsoredBrandsProductTargetingOperation.prototype, "archiveTarget", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsBatchGetTargetsResponse)
], SponsoredBrandsProductTargetingOperation.prototype, "batchGetTargets", null);
exports.SponsoredBrandsProductTargetingOperation = SponsoredBrandsProductTargetingOperation;
//# sourceMappingURL=sponsored-brands-product-targeting-operation.js.map