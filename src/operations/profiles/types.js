"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = exports.RegisterProfileResponse = exports.RegisterProfileResponseStatus = exports.ProfileRegistrationResponse = exports.RegisterBrand = exports.Profile = exports.AccountInfo = exports.AccountInfoSubType = exports.AccountInfoType = exports.ProfileResponse = exports.ProfileId = void 0;
const t = __importStar(require("io-ts"));
const types_1 = require("../commons/types");
exports.ProfileId = t.number;
exports.ProfileResponse = t.intersection([
    t.type({
        /**
         * The ID of the profile that was updated, if successful.
         */
        profileId: exports.ProfileId,
        /**
         * An enumerated success or error code for machine use.
         */
        code: t.string,
    }),
    t.partial({
        /**
         * A human-readable description of the error, if unsuccessful
         */
        details: t.string,
    }),
]);
/**
 * The type of account being called
 */
exports.AccountInfoType = t.union([
    t.literal('seller'),
    t.literal('vendor'),
    t.literal('agency'),
]);
/**
 * The account subtype.
 */
exports.AccountInfoSubType = t.union([
    t.literal('KDP_AUTHOR'),
    t.literal('AMAZON_ATTRIBUTION'),
]);
exports.AccountInfo = t.intersection([
    t.type({
        /**
         * The string identifier for the marketplace associated with this profile.
         * This is the same identifier used by MWS
         */
        marketplaceStringId: t.string,
        /**
         * The string identifier for the ID associated with this account.
         */
        id: t.string,
        /**
         * The type of account being called.
         */
        type: exports.AccountInfoType,
    }),
    t.partial({
        /**
         * The string identifier for the account name.
         */
        name: t.string,
        /**
         * The account subtype.
         */
        subType: exports.AccountInfoSubType,
    }),
]);
exports.Profile = t.intersection([
    t.type({
        /**
         * The ID of the profile.
         */
        profileId: exports.ProfileId,
        /**
         * The country code identifying the publisher(s) on which ads will run.
         */
        countryCode: types_1.AmazonMarketplaceAdvertisingCountryCodeType,
        /**
         * The currency used for all monetary values for entities under this profile.
         */
        currencyCode: types_1.AmazonMarketplaceAdvertisingCurrencyType,
        /**
         * The tz database time zone used for all date-based campaign management and reporting.
         */
        timezone: types_1.AmazonMarketplaceAdvertisingTimeZoneType,
        /**
         * Account info.
         */
        accountInfo: exports.AccountInfo,
    }),
    t.partial({
        /**
         * The optional budget shared by all entities created under this profile.
         * TODO: setup a check for minimums.
         */
        dailyBudget: t.number,
    }),
]);
/**
 * Registers a brand in sandbox. If this call is made to a production endpoint you will receive an error.
 */
exports.RegisterBrand = t.strict({
    /**
     * The country in which you wish to register the profile. Can be one of: US, CA, UK, DE, FR, IT, ES, JP, AU
     */
    countryCode: types_1.AmazonMarketplaceAdvertisingCountryCodeType,
    /**
     * REQUIRED. Brand name.
     */
    brand: t.string,
});
/**
 * TODO: The docs don't mention them. Need check on API
 */
exports.ProfileRegistrationResponse = t.strict({
    profileId: exports.ProfileId,
    code: t.string,
    description: t.string,
});
exports.RegisterProfileResponseStatus = t.union([
    t.literal('IN_PROGRESS'),
    t.literal('SUCCESS'),
]);
exports.RegisterProfileResponse = t.intersection([
    t.type({
        status: exports.RegisterProfileResponseStatus,
        statusDetails: t.string,
    }),
    t.partial({
        profileId: exports.ProfileId,
    }),
]);
exports.Brand = t.strict({
    /**
     * The Brand identifier.
     */
    brandId: t.string,
    /**
     * The Brand entity identifier.
     */
    brandEntityId: t.string,
    /**
     * The Brand name.
     */
    brandRegistryName: t.string,
});
//# sourceMappingURL=types.js.map