"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsCampaignOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredBrandsCampaignOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/campaigns`;
    }
    /**
     * Gets a campaign specified by identifier
     *
     * @param campaignId -
     * @returns
     */
    getCampaign(campaignId) {
        return this.client.get(`${this.resource}/${campaignId}`);
    }
    /**
     * Gets an array of all campaigns associated with the client identifier passed in the authorization header, filtered by specified criteria.
     *
     * @param params -
     * @returns
     */
    listCampaigns(params) {
        return this.client.get(this.paramsFilterTransformer('', params));
    }
    /**
     * Creates one or more new Campaigns
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
     * Archives a campaign specified by identifier.
     *
     * @param campaignId -
     * @returns
     */
    archiveCampaign(campaignId) {
        return this.client.delete(`${this.resource}/${campaignId}`);
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsCampaign)
], SponsoredBrandsCampaignOperation.prototype, "getCampaign", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsCampaign)
], SponsoredBrandsCampaignOperation.prototype, "listCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignResponse)
], SponsoredBrandsCampaignOperation.prototype, "createCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.CampaignResponse)
], SponsoredBrandsCampaignOperation.prototype, "updateCampaigns", null);
__decorate([
    (0, decorators_1.Decode)(types_1.CampaignResponse)
], SponsoredBrandsCampaignOperation.prototype, "archiveCampaign", null);
exports.SponsoredBrandsCampaignOperation = SponsoredBrandsCampaignOperation;
//# sourceMappingURL=sponsored-brands-campaign-operation.js.map