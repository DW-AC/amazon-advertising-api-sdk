"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsNegativeTargetingOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsNegativeTargetingOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/negativeTargets`;
    }
    /**
     * Get a specific negative targeting clause by targetId.
     *
     * @param targetId -
     * @returns
     */
    getNegativeTargetingClause(targetId) {
        return this.client.get(`${this.resource}/${targetId}`);
    }
    /**
     * Retrieve a negative targeting clause with additional attributes using a specific target ID.
     *
     * @param targetId -
     * @returns
     */
    getNegativeTargetingClauseExtended(targetId) {
        return this.client.get(`${this.resource}/extended/${targetId}`);
    }
    /**
     * Create negative targeting clauses at the campaign level.
     *
     * @param params -
     * @returns
     */
    createNegativeTargetingClauses(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Retrieves a list of negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClauses(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieve a list of targeting clauses with extended properties.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClausesExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
    /**
     * Archive negative targeting clauses.
     *
     * @param targetId -
     * @returns
     */
    archiveNegativeTargetingClause(targetId) {
        return this.client.delete(`${this.resource}/${targetId}`);
    }
    /**
     * Update negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    updateNegativeTargetingClauses(params) {
        return this.client.put(this.resource, params);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeTargetingClause)
], SponsoredProductsNegativeTargetingOperation.prototype, "getNegativeTargetingClause", null);
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeTargetingClauseExtended)
], SponsoredProductsNegativeTargetingOperation.prototype, "getNegativeTargetingClauseExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeTargetingClauseResponse)
], SponsoredProductsNegativeTargetingOperation.prototype, "createNegativeTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeTargetingClause)
], SponsoredProductsNegativeTargetingOperation.prototype, "listNegativeTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeTargetingClauseExtended)
], SponsoredProductsNegativeTargetingOperation.prototype, "listNegativeTargetingClausesExtended", null);
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeTargetingClauseResponse)
], SponsoredProductsNegativeTargetingOperation.prototype, "archiveNegativeTargetingClause", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeTargetingClauseResponse)
], SponsoredProductsNegativeTargetingOperation.prototype, "updateNegativeTargetingClauses", null);
exports.SponsoredProductsNegativeTargetingOperation = SponsoredProductsNegativeTargetingOperation;
//# sourceMappingURL=sponsored-products-negative-targeting-operation.js.map