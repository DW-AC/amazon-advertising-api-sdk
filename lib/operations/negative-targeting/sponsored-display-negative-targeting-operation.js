"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredDisplayNegativeTargetingOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredDisplayNegativeTargetingOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredDisplay}/negativeTargets`;
    }
    /**
     * Gets a negative targeting clause specified by identifier.
     *
     * @param id -
     * @returns
     */
    getNegativeTargetingClause(id) {
        return this.client.get(`${this.resource}/${id}`);
    }
    /**
     * Gets extended information for a negative targeting clause.
     *
     * @param id -
     * @returns
     */
    getNegativeTargetingClauseExtended(id) {
        return this.client.get(`${this.resource}/extended/${id}`);
    }
    /**
     * Creates one or more negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    createNegativeTargetingClauses(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Updates one or more negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    updateNegativeTargetingClauses(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Gets a list of negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClauses(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Gets a list of negative targeting clause objects with extended fields.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClausesExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
    /**
     * Sets the `state` of a negative targeting clause to `archived`.
     *
     * @param id -
     * @returns
     */
    archiveNegativeTargetingClause(id) {
        return this.client.delete(`${this.resource}/${id}`);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredDisplayNegativeTargetingClause)
], SponsoredDisplayNegativeTargetingOperation.prototype, "getNegativeTargetingClause", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredDisplayNegativeTargetingClauseExtended)
], SponsoredDisplayNegativeTargetingOperation.prototype, "getNegativeTargetingClauseExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeTargetingClauseResponse)
], SponsoredDisplayNegativeTargetingOperation.prototype, "createNegativeTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.NegativeTargetingClauseResponse)
], SponsoredDisplayNegativeTargetingOperation.prototype, "updateNegativeTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredDisplayNegativeTargetingClause)
], SponsoredDisplayNegativeTargetingOperation.prototype, "listNegativeTargetingClauses", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredDisplayNegativeTargetingClauseExtended)
], SponsoredDisplayNegativeTargetingOperation.prototype, "listNegativeTargetingClausesExtended", null);
__decorate([
    (0, decorators_1.Decode)(types_1.NegativeTargetingClauseResponse)
], SponsoredDisplayNegativeTargetingOperation.prototype, "archiveNegativeTargetingClause", null);
exports.SponsoredDisplayNegativeTargetingOperation = SponsoredDisplayNegativeTargetingOperation;
//# sourceMappingURL=sponsored-display-negative-targeting-operation.js.map