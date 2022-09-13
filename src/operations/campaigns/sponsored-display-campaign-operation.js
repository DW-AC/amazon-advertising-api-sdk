"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredDisplayCampaignOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredDisplayCampaignOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredDisplay}/campaigns`;
    }
    /**
     * Gets an array of Campaign objects for a requested set of Sponsored Display campaigns.
     * Note that the Campaign object is designed for performance, and includes a small set of commonly used fields to reduce size.
     * If the extended set of fields is required, use the campaign operations that return the CampaignResponseEx object.
     *
     * @param campaignId -
     * @returns
     */
    listCampaigns(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Gets an array of CampaignResponseEx objects for a set of requested campaigns.
     *
     * @param params -
     * @returns
     */
    listCampaignsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
    /**
     * Updates one or more campaigns.
     *
     * @param params -
     * @returns
     */
    updateCampaigns(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Creates one or more campaigns.
     * Successfully created campaigns will be assigned a unique campaignId.
     *
     * @param params -
     * @returns
     */
    createCampaigns(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Returns a Campaign object for a requested campaign.
     * Note that the Campaign object is designed for performance, with a small set of commonly used campaign fields to reduce size.
     * If the extended set of fields is required, use the campaign operations that return the CampaignResponseEx object.
     *
     * @param id -
     * @returns
     */
    getCampaign(id) {
        return this.client.get(`${this.resource}/${id}`);
    }
    /**
     * Gets an array of CampaignResponseEx objects for a set of requested campaigns.
     *
     * @param id -
     * @returns
     */
    getCampaignExtended(id) {
        return this.client.get(`${this.resource}/extended/${id}`);
    }
    /**
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone.
     * See Developer Notes for more information.
     *
     * @param id -
     * @returns
     */
    archiveCampaign(id) {
        return this.client.delete(`${this.resource}/${id}`);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredDisplayCampaign)
], SponsoredDisplayCampaignOperation.prototype, "listCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredDisplayCampaignExtended)
], SponsoredDisplayCampaignOperation.prototype, "listCampaignsExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignResponse)
], SponsoredDisplayCampaignOperation.prototype, "updateCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignResponse)
], SponsoredDisplayCampaignOperation.prototype, "createCampaigns", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredDisplayCampaign)
], SponsoredDisplayCampaignOperation.prototype, "getCampaign", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredDisplayCampaignExtended)
], SponsoredDisplayCampaignOperation.prototype, "getCampaignExtended", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignResponse)
], SponsoredDisplayCampaignOperation.prototype, "archiveCampaign", null);
exports.SponsoredDisplayCampaignOperation = SponsoredDisplayCampaignOperation;
//# sourceMappingURL=sponsored-display-campaign-operation.js.map