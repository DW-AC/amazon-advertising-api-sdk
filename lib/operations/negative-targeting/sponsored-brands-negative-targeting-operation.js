"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsNegativeTargetingOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const types_1 = require("./types");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_2 = require("../product-targeting/types");
class SponsoredBrandsNegativeTargetingOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/negativeTargets`;
    }
    /**
     * Gets a list of product negative targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
     *
     * @param params -
     * @returns
     */
    listNegativeTargets(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Updates one or more negative targets.
     *
     * @param params -
     * @returns
     */
    updateNegativeTargets(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Create one or more new negative targets.
     *
     * @param params -
     * @returns
     */
    createNegativeTargets(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Gets a negative target specified by identifier.
     *
     * @param negativeTargetId -
     * @returns
     */
    getNegativeTarget(negativeTargetId) {
        return this.client.get(`${this.resource}/${negativeTargetId}`);
    }
    /**
     * Archives a negative target specified by identifier.
     * Note that archiving is permanent, and once a negative target has been archived it can't be made active again.
     *
     * @param negativeTargetId -
     * @returns
     */
    archiveNegativeTarget(negativeTargetId) {
        return this.client.delete(`${this.resource}/${negativeTargetId}`);
    }
    /**
     * Gets one or more product negative targets specified by identifiers.
     *
     * @param params -
     * @returns
     */
    batchGetNegativeTargets(params) {
        return this.client.post(this.resource, params);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsListNegativeTargetsResponse)
], SponsoredBrandsNegativeTargetingOperation.prototype, "listNegativeTargets", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsUpdateNegativeTargetsResponse)
], SponsoredBrandsNegativeTargetingOperation.prototype, "updateNegativeTargets", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsCreateNegativeTargetsResponse)
], SponsoredBrandsNegativeTargetingOperation.prototype, "createNegativeTargets", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsNegativeTargetingClause)
], SponsoredBrandsNegativeTargetingOperation.prototype, "getNegativeTarget", null);
__decorate([
    (0, decorators_1.Decode)(types_2.SponsoredBrandsTargetingClauseResponse)
], SponsoredBrandsNegativeTargetingOperation.prototype, "archiveNegativeTarget", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsBatchGetNegativeTargetsResponse)
], SponsoredBrandsNegativeTargetingOperation.prototype, "batchGetNegativeTargets", null);
exports.SponsoredBrandsNegativeTargetingOperation = SponsoredBrandsNegativeTargetingOperation;
//# sourceMappingURL=sponsored-brands-negative-targeting-operation.js.map