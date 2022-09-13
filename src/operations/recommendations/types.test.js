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
describe('SponsoredBrandsProductRecommendationsRequest', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsProductRecommendationsRequest.decode({
            nextToken: 'string',
            maxResults: 0,
            filters: [
                {
                    filterType: 'ASINS',
                    values: ['string'],
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsProductRecommendationsResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsProductRecommendationsResponse.decode({
            nextToken: 'string',
            recommendedProducts: [
                {
                    recommendedTargetAsin: 'string',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsCategoryRecommendationsRequest', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsCategoryRecommendationsRequest.decode({
            asins: ['string'],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsCategoryRecommendationsResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsCategoryRecommendationsResponse.decode({
            categoryRecommendationResults: [
                {
                    id: 0,
                    name: 'string',
                    isTargetable: true,
                    path: 'string',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsCategoryRecommendationsResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsBrandRecommendationsResponse.decode({
            brandRecommendationResults: [
                {
                    id: 0,
                    name: 'string',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsBidsRecommendationRequest', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsBidsRecommendationRequest.decode({
            campaignId: 0,
            targets: [
                {
                    type: 'asinCategorySameAs',
                    value: 'string',
                },
            ],
            keywords: [
                {
                    matchType: 'broad',
                    keywordText: 'string',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsBidsRecommendationResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsBidsRecommendationResponse.decode({
            keywordsBidsRecommendationSuccessResults: [
                {
                    recommendationId: 'string',
                    recommendedBid: {
                        rangeEnd: 0,
                        rangeStart: 0,
                        recommended: 0,
                    },
                    keyword: {
                        keywordText: 'string',
                        matchType: 'broad',
                    },
                    keywordIndex: 0,
                },
            ],
            keywordsBidsRecommendationErrorResults: [
                {
                    code: 'string',
                    details: 'string',
                    keyword: {
                        type: 'broad',
                        value: 'string',
                    },
                    keywordIndex: 0,
                },
            ],
            targetsBidsRecommendationSuccessResults: [
                {
                    recommendationId: 'string',
                    recommendedBid: {
                        rangeEnd: 0,
                        rangeStart: 0,
                        recommended: 0,
                    },
                    targets: [
                        {
                            type: 'asinCategorySameAs',
                            value: 'string',
                        },
                    ],
                    targetsIndex: 0,
                },
            ],
            targetsBidsRecommendationErrorResults: [
                {
                    code: 'string',
                    details: 'string',
                    targets: [
                        {
                            type: 'asinCategorySameAs',
                            value: 'string',
                        },
                    ],
                    targetsIndex: 0,
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map