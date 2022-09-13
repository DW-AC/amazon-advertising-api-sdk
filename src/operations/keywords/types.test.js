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
describe('Keyword', () => {
    it('should pass getBiddableKeyword response', () => {
        const res = t.Keyword.decode({
            keywordId: 16577721726418,
            adGroupId: 149522344269714,
            campaignId: 164069484151709,
            keywordText: 'Apple',
            matchType: 'broad',
            state: 'paused',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('UpdateSponsoredBrandsNegativeKeywordParams', () => {
    it('should pass update sb negative keyword params', () => {
        const res = t.UpdateSponsoredBrandsNegativeKeywordParams.decode({
            keywordId: 0,
            adGroupId: 0,
            campaignId: 0,
            state: 'enabled',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('CreateSponsoredBrandsNegativeKeywordParams', () => {
    it('should pass create sb negative keyword params', () => {
        const res = t.CreateSponsoredBrandsNegativeKeywordParams.decode({
            adGroupId: 0,
            campaignId: 0,
            keywordText: 'string',
            matchType: 'negativeExact',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsKeywordResponse', () => {
    it('should pass create, update, archive sb negative keyword response', () => {
        const res = t.SponsoredBrandsKeywordResponse.decode({
            keywordId: 0,
            code: 'string',
            details: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsNegativeKeyword', () => {
    it('should pass get sb negative keyword response', () => {
        const res = t.SponsoredBrandsNegativeKeyword.decode({
            keywordId: 0,
            adGroupId: 0,
            campaignId: 0,
            keywordText: 'string',
            matchType: 'negativeExact',
            state: 'enabled',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsKeywordRecommendation', () => {
    it('should pass getKeywordRecommendations response', () => {
        const res = t.SponsoredBrandsKeywordRecommendation.decode({
            recommendationId: 'addKeyword',
            value: 'string',
            matchType: 'broad',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('NegativeKeywordResponse', () => {
    it('should pass SUCCESS createNegativeKeywords response', () => {
        const res = t.NegativeKeywordResponse.decode({
            code: 'SUCCESS',
            keywordId: 59796344109969,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should pass INVALID_ARGUMENT createNegativeKeywords response with description', () => {
        const res = t.NegativeKeywordResponse.decode({
            code: 'INVALID_ARGUMENT',
            description: 'Targetingclause (keyword) is invalid',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should pass INVALID_ARGUMENT createNegativeKeywords response with details', () => {
        const res = t.NegativeKeywordResponse.decode({
            code: 'INVALID_ARGUMENT',
            details: 'The request input is invalid. Targetingclause (keyword) name is empty Targetingclause (keyword) is invalid',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map