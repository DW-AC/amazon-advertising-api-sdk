"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOperation = void 0;
const operation_1 = require("../operation");
const types_1 = require("./types");
const decorators_1 = require("../../decorators");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
class ProfileOperation extends operation_1.Operation {
    constructor() {
        super(...arguments);
        this.resource = 'profiles';
    }
    /**
     * Retrieves one or more profiles associated with the authorization passed in the request header.
     *
     * @returns
     */
    listProfiles() {
        return this.client.get(`${this.version}/${this.resource}`);
    }
    /**
     * Retrieves a single profile specified by identifier.
     *
     * @param profileId -
     * @returns
     */
    getProfile(profileId) {
        return this.client.get(`${this.version}/${this.resource}/${profileId}`);
    }
    /**
     * Updates one or more profiles.
     *
     * @param profiles -
     * @returns
     */
    updateProfiles(profiles) {
        return this.client.put(`${this.version}/${this.resource}`, profiles);
    }
    /**
     * Registers a profile in the sandbox environment.
     * If this call is made to a production endpoint an error is returned.
     *
     * @param countryCode -
     * @returns
     */
    registerProfile(countryCode = amazon_marketplaces_1.AmazonMarketplaceAdvertisingCountryCode.US) {
        return this.client.put(`${this.version}/${this.resource}/register`, {
            countryCode,
        });
    }
    /**
     * Registers a brand in the sandbox environment. If this call is made to a production endpoint an error is returned.
     *
     * @param registerBrand -
     * @returns
     */
    registerBrand(registerBrand) {
        return this.client.put(`${this.version}/${this.resource}/registerBrand`, registerBrand);
    }
    /**
     * Gets an array of Brand data objects for the Brand associated with the profile ID passed in the header.
     * For more information about Brands, see Brand Services.
     *
     * @returns
     */
    getBrands() {
        return this.client.get(`${this.version}/brands`);
    }
}
__decorate([
    (0, decorators_1.DecodeArray)(types_1.Profile)
], ProfileOperation.prototype, "listProfiles", null);
__decorate([
    (0, decorators_1.Decode)(types_1.Profile)
], ProfileOperation.prototype, "getProfile", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.ProfileResponse)
], ProfileOperation.prototype, "updateProfiles", null);
__decorate([
    (0, decorators_1.Decode)(types_1.RegisterProfileResponse)
], ProfileOperation.prototype, "registerProfile", null);
__decorate([
    (0, decorators_1.Decode)(types_1.ProfileRegistrationResponse)
], ProfileOperation.prototype, "registerBrand", null);
__decorate([
    (0, decorators_1.DecodeArray)(types_1.Brand)
], ProfileOperation.prototype, "getBrands", null);
exports.ProfileOperation = ProfileOperation;
//# sourceMappingURL=profile-operation.js.map