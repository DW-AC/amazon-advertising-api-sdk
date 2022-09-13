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
describe('AdGroup', () => {
    it('should pass getAdGroup response', () => {
        const res = t.AdGroup.decode({
            adGroupId: 138818764235694,
            name: 'New Name',
            campaignId: 31299234922913,
            defaultBid: 1,
            state: 'archived',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('AdGroupExtended', () => {
    it('should pass getAdGroupEx response', () => {
        const res = t.AdGroupExtended.decode({
            adGroupId: 138818764235694,
            name: 'New Name',
            campaignId: 31299234922913,
            defaultBid: 1,
            state: 'archived',
            servingStatus: 'PORTFOLIO_PENDING_START_DATE',
            creationDate: 1550902562000,
            lastUpdatedDate: 1550904242000,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('AdGroupResponse', () => {
    it('should pass createAdGroups, updateAdGroups, archiveAdGroup response', () => {
        const res = t.AdGroupResponse.decode({
            code: 'SUCCESS',
            adGroupId: 138818764235694,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('AdGroupExtendedEdgeCase1', () => {
    it('should pass getAdGroupEx response when servingStatus is "ENDED"', () => {
        const res = t.AdGroupExtended.decode({
            adGroupId: 138818764235694,
            name: 'New Name',
            campaignId: 31299234922913,
            defaultBid: 1,
            state: 'archived',
            servingStatus: 'ENDED',
            creationDate: 1550902562000,
            lastUpdatedDate: 1550904242000,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('AdGroupExtendedEdgeCase2', () => {
    it('should pass getAdGroupEx response when servingStatus is "AD_GROUP_INCOMPLETE"', () => {
        const res = t.AdGroupExtended.decode({
            adGroupId: 138818764235694,
            name: 'New Name',
            campaignId: 31299234922913,
            defaultBid: 1,
            state: 'archived',
            servingStatus: 'AD_GROUP_INCOMPLETE',
            creationDate: 1550902562000,
            lastUpdatedDate: 1550904242000,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map