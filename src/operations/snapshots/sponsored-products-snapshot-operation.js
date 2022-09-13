"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsSnapshotOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsSnapshotOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/`;
    }
    /**
     * Downloads the snapshot corresponding to the success snapshot response specified
     *
     * @param snapshot -
     * @returns
     */
    async downloadSnapshot(snapshot) {
        return this.client.download(`${this.version}/snapshots/${snapshot.snapshotId}/download`);
    }
    /**
     * Request a file-based snapshot of all entities of the specified type in the account satisfying the filtering criteria
     *
     * @param recordType -
     * @param params -
     * @returns
     */
    requestSnapshot(recordType, params) {
        return this.client.post(`${this.resource}${recordType}/snapshot`, params);
    }
    /**
     * Retrieve status, metadata and location of previously requested snapshot
     *
     * @param id -
     * @returns
     */
    getSnapshot(id) {
        return this.client.get(`${this.resource}snapshots/${id}`);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.SnapshotResponse)
], SponsoredProductsSnapshotOperation.prototype, "requestSnapshot", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SnapshotResponse)
], SponsoredProductsSnapshotOperation.prototype, "getSnapshot", null);
exports.SponsoredProductsSnapshotOperation = SponsoredProductsSnapshotOperation;
//# sourceMappingURL=sponsored-products-snapshot-operation.js.map