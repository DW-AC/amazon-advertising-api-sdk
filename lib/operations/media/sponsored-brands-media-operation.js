"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredBrandsMediaOperation = void 0;
const operation_1 = require("../operation");
const types_1 = require("./types");
const decorators_1 = require("../../decorators");
class SponsoredBrandsMediaOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = `${this.version}/media`;
    }
    /**
     * Creates an ephemeral resource (upload location) to upload Media for an Ad Program.
     * The upload location is short lived and expires in 15 minutes.
     *
     * @param param -
     * @returns
     */
    createUploadLocation(param) {
        return this.client.post(`${this.resource}/upload`, param);
    }
    /**
     * The API should be called once the media is uploaded to the location provided by the /media/upload API endpoint.
     * The API creates a Media resource for the uploaded media.
     * Media resource is comprised of Media Identifier. The Media Identifier can be used to attach media to Ad Program (Sponsored Brands).
     *
     * The API internally kicks off the asynchronous validation and processing workflow of the uploaded media.
     * As a result, Media may not be immediately available for usage (to create Sponsored Brands Video Campaign) as soon as the response is received.
     * See /media/describe API doc for instructions on when media is ready for campaign creation.
     */
    completeMedia(param) {
        return this.client.put(`${this.resource}/complete`, param);
    }
    /**
     * API to poll for media status.
     * In order to attach media to campaign, media should be in either PendingDeepValidation or Available status.
     * Available status guarantees that media has completed processing and published for usage.
     * Though media can be attached to campaign once the status of the media transitions to PendingDeepValidation, media could still fail additional validation and transition to Failed status.
     * For example in the context of SBV, SBV campaign can be created when status transitions to PendingDeepValidation, it could result in SBV campaign to be rejected later if media transitions to Failed status.
     */
    describeMedia(mediaId) {
        return this.client.get(this.paramsFilterTransformer('/describe', { mediaId }));
    }
}
__decorate([
    (0, decorators_1.Decode)(types_1.UploadLocation)
], SponsoredBrandsMediaOperation.prototype, "createUploadLocation", null);
__decorate([
    (0, decorators_1.Decode)(types_1.MediaId)
], SponsoredBrandsMediaOperation.prototype, "completeMedia", null);
__decorate([
    (0, decorators_1.Decode)(types_1.MediaResource)
], SponsoredBrandsMediaOperation.prototype, "describeMedia", null);
exports.SponsoredBrandsMediaOperation = SponsoredBrandsMediaOperation;
//# sourceMappingURL=sponsored-brands-media-operation.js.map