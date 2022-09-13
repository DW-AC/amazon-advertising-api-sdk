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
describe('SponsoredBrandsListDraftCampaignResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsListDraftCampaignResponse.decode({
            draftCampaignId: 0,
            name: 'string',
            budget: 0,
            budgetType: 'lifetime',
            startDate: 'string',
            endDate: 'string',
            bidOptimization: true,
            bidMultiplier: 0,
            portfolioId: 0,
            creative: {
                brandName: 'string',
                brandLogoAssetID: 'string',
                brandLogoUrl: 'string',
                headline: 'string',
                asins: ['string'],
                shouldOptimizeAsins: false,
            },
            landingPage: {
                url: 'string',
            },
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsDraftCampaign', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsDraftCampaign.decode({
            draftCampaignId: 0,
            name: 'string',
            budget: 0,
            budgetType: 'lifetime',
            startDate: 'string',
            endDate: 'string',
            brandEntityId: 'string',
            bidOptimization: true,
            bidMultiplier: 0,
            portfolioId: 0,
            creative: {
                brandName: 'string',
                brandLogoAssetID: 'string',
                brandLogoUrl: 'string',
                headline: 'string',
                asins: ['string'],
                shouldOptimizeAsins: false,
            },
            landingPage: {
                asins: ['string'],
                url: 'string',
            },
            keywords: [
                {
                    keywordText: 'string',
                    matchType: 'broad',
                    bid: 0,
                },
            ],
            negativeKeywords: [
                {
                    keywordText: 'string',
                    matchType: 'negativeExact',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsDraftCampaignResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsDraftCampaignResponse.decode({
            draftCampaignId: 0,
            keywordResponses: [
                {
                    keywordId: 0,
                    code: 'string',
                    details: 'string',
                },
            ],
            code: 'string',
            details: 'string',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map