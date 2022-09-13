"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredProductsCampaignOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredProductsCampaignOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredProducts}/campaigns`;
    }
    /**
     * Retrieves a list of Sponsored Products campaigns satisfying optional filtering criteria.
     *
     * @param params -
     * @returns
     */
    listCampaigns(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Retrieves a list of Sponsored Products campaigns with extended fields satisfying optional filtering criteria.
     *
     * @param params -
     * @returns
     */
    listCampaignsExtended(params) {
        return this.client.get(this.paramsFilterTransformer('/extended', params));
    }
    /**
     * Retrieves a campaign by campaignId.
     * Note that this call returns the minimal set of campaign fields, but is more efficient than getCampaignEx
     *
     * @param campaignId -
     * @returns
     */
    getCampaign(campaignId) {
        return this.client.get(`${this.resource}/${campaignId}`);
    }
    /**
     * Retrieves a campaign and its extended fields by campaignId.
     * Note that this call returns the complete set of campaign fields (including serving status and other read-only fields), but is less efficient than getCampaign
     *
     * @param campaignId -
     * @returns
     */
    getCampaignExtended(campaignId) {
        return this.client.get(`${this.resource}/extended/${campaignId}`);
    }
    /**
     * Creates one or more campaigns.
     * Successfully created campaigns will be assigned a unique campaignId.
     *
     * @param campaigns -
     * @returns
     */
    createCampaigns(campaigns) {
        return this.client.post(this.resource, campaigns);
    }
    /**
     * Updates one or more campaigns.
     *
     * @param campaigns -
     * @returns
     */
    updateCampaigns(campaigns) {
        return this.client.put(this.resource, campaigns);
    }
    /**
     * Sets the campaign status to archived.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param campaignId -
     * @returns
     */
    archiveCampaign(campaignId) {
        return this.client.delete(`${this.resource}/${campaignId}`);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.Campaign)
], SponsoredProductsCampaignOperation.prototype, "listCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignExtended)
], SponsoredProductsCampaignOperation.prototype, "listCampaignsExtended", null);
__decorate([
    (0, decorators_1.Decode)(types_1.Campaign)
], SponsoredProductsCampaignOperation.prototype, "getCampaign", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignExtended)
], SponsoredProductsCampaignOperation.prototype, "getCampaignExtended", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignResponse)
], SponsoredProductsCampaignOperation.prototype, "createCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignResponse)
], SponsoredProductsCampaignOperation.prototype, "updateCampaigns", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignResponse)
], SponsoredProductsCampaignOperation.prototype, "archiveCampaign", null);
exports.SponsoredProductsCampaignOperation = SponsoredProductsCampaignOperation;
//# sourceMappingURL=sponsored-products-campaign-operation.js.map