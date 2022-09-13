"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsStoresInfoOperation = void 0;
const operation_1 = require("../operation");
const types_1 = require("./types");
const decorators_1 = require("../../decorators");
class SponsoredBrandsStoresInfoOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = 'stores';
    }
    /**
     * List store information for all registered stores under an advertiser.
     *
     * @returns
     */
    listStores() {
        return this.client.get(`${this.version}/${this.resource}`);
    }
    /**
     * Request store information for a given brandEntityId.
     *
     * @param id -
     * @returns
     */
    getStore(id) {
        return this.client.get(`${this.version}/${this.resource}/${id}`);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.StoreInfoResponse)
], SponsoredBrandsStoresInfoOperation.prototype, "listStores", null);
__decorate([
    (0, decorators_1.Decode)(types_1.StoreInfoResponse)
], SponsoredBrandsStoresInfoOperation.prototype, "getStore", null);
exports.SponsoredBrandsStoresInfoOperation = SponsoredBrandsStoresInfoOperation;
//# sourceMappingURL=sponsored-brands-stores-info-operation.js.map