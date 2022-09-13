"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsDraftsOperation = void 0;
const operation_1 = require("../operation");
const decorators_1 = require("../../decorators");
const amazon_ad_type_uri_prefix_1 = require("../amazon-ad-type-uri-prefix");
const types_1 = require("./types");
class SponsoredBrandsDraftsOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/${amazon_ad_type_uri_prefix_1.AmazonAdTypeURIPrefix.SponsoredBrands}/drafts/campaigns`;
    }
    /**
     * Gets an array of draft campaign objects.
     *
     * @param params -
     * @returns
     */
    listDraftCampaigns(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Creates one or more new draft campaigns.
     *
     * @param params -
     * @returns
     */
    createDraftCampaigns(params) {
        return this.client.post(this.resource, params);
    }
    /**
     * Updates one or more draft campaigns.
     *
     * @param params -
     * @returns
     */
    updateDraftCampaigns(params) {
        return this.client.put(this.resource, params);
    }
    /**
     * Gets a draft campaign specified by identifier.
     *
     * @param draftCampaignId -
     * @returns
     */
    getDraftCampaign(draftCampaignId) {
        return this.client.get(`${this.resource}/${draftCampaignId}`);
    }
    /**
     * Archives a draft campaign specified by identifier.
     *
     * @param draftCampaignId -
     * @returns
     */
    archiveDraftCampaign(draftCampaignId) {
        return this.client.delete(`${this.resource}/${draftCampaignId}`);
    }
    /**
     * Submits one or more existing draft campaigns to the moderation approval queue.
     *
     * @param draftCampaignIds -
     * @returns
     */
    submitDraftCampaigns(draftCampaignIds) {
        return this.client.post(`${this.resource}/submit`, draftCampaignIds);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsListDraftCampaignResponse)
], SponsoredBrandsDraftsOperation.prototype, "listDraftCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsDraftCampaignResponse)
], SponsoredBrandsDraftsOperation.prototype, "createDraftCampaigns", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsDraftCampaignResponse)
], SponsoredBrandsDraftsOperation.prototype, "updateDraftCampaigns", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsDraftCampaign)
], SponsoredBrandsDraftsOperation.prototype, "getDraftCampaign", null);
__decorate([
    (0, decorators_1.Decode)(types_1.SponsoredBrandsDraftCampaignResponse)
], SponsoredBrandsDraftsOperation.prototype, "archiveDraftCampaign", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.SponsoredBrandsDraftCampaignResponse)
], SponsoredBrandsDraftsOperation.prototype, "submitDraftCampaigns", null);
exports.SponsoredBrandsDraftsOperation = SponsoredBrandsDraftsOperation;
//# sourceMappingURL=sponsored-brands-drafts-operation.js.map