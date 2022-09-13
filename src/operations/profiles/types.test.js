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
const Either_1 = require("fp-ts/lib/Either");
const t = __importStar(require("./types"));
describe('ProfileResponse', () => {
    it('should pass', () => {
        const res = t.ProfileResponse.decode({
            code: 'SUCCESS',
            profileId: 2984328618318898,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.ProfileResponse.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('Profile', () => {
    it('should pass', () => {
        const res = t.Profile.decode({
            profileId: 2984328618318898,
            countryCode: 'US',
            currencyCode: 'USD',
            dailyBudget: 340,
            timezone: 'America/Los_Angeles',
            accountInfo: {
                marketplaceStringId: 'ATVPDKIKX0DER',
                id: 'AUZWHWR0590BC',
                type: 'seller',
            },
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.Profile.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('RegisterBrand', () => {
    it('should pass', () => {
        const res = t.RegisterBrand.decode({
            brand: 'yay',
            countryCode: 'US',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.RegisterBrand.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('ProfileRegistrationResponse', () => {
    it('should pass', () => {
        const res = t.ProfileRegistrationResponse.decode({
            code: 'SUCCESS',
            description: 'Brand yay is registered',
            profileId: 2973802954634317,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should fail', () => {
        const res = t.ProfileRegistrationResponse.decode({});
        expect((0, Either_1.isRight)(res)).toBeFalsy();
    });
});
describe('Brand', () => {
    it('should pass', () => {
        const res = t.Brand.decode({
            brandId: 'string',
            brandEntityId: 'string',
            brandRegistryName: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map