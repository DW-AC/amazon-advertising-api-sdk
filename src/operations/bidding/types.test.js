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
describe('SuggestedBid', () => {
    it('should pass suggestedBid field of getAdGroupBidRecommendations response ', () => {
        const res = t.SuggestedBid.decode({
            rangeEnd: 1.17,
            rangeStart: 0.25,
            suggested: 0.59,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('AdGroupBidRecommendationsResponse', () => {
    it('should pass getAdGroupBidRecommendations response ', () => {
        const res = t.AdGroupBidRecommendationsResponse.decode({
            adGroupId: 229181242630073,
            suggestedBid: {
                rangeEnd: 1.17,
                rangeStart: 0.25,
                suggested: 0.59,
            },
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('KeywordBidRecommendationsResponse', () => {
    it('should pass getKeywordBidRecommendations response ', () => {
        const res = t.KeywordBidRecommendationsResponse.decode({
            keywordId: 15590130271788,
            adGroupId: 264272438240075,
            suggestedBid: {
                rangeEnd: 0.34,
                rangeStart: 0.27,
                suggested: 0.29,
            },
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('KeywordBidRecommendationsData', () => {
    it('should pass createKeywordBidRecommendations param ', () => {
        const res = t.KeywordBidRecommendationsData.decode({
            adGroupId: 264272438240075,
            keywords: [
                {
                    keyword: 'keyword one',
                    matchType: 'broad',
                },
                {
                    keyword: 'keyword two',
                    matchType: 'broad',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('BidRecommendationsResponse', () => {
    it('should pass createKeywordBidRecommendations response ', () => {
        const res = t.BidRecommendationsResponse.decode({
            adGroupId: 264272438240075,
            recommendations: [
                {
                    code: 'SUCCESS',
                    keyword: 'keyword one',
                    matchType: 'broad',
                    suggestedBid: {
                        rangeEnd: 0.8,
                        rangeStart: 0.5,
                        suggested: 0.5,
                    },
                },
                {
                    code: 'SUCCESS',
                    keyword: 'keyword two',
                    matchType: 'broad',
                    suggestedBid: {
                        rangeEnd: 0.48,
                        rangeStart: 0.32,
                        suggested: 0.44,
                    },
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('BidRecommendationRequest', () => {
    it('should pass getBidRecommendations Keywords Example param', () => {
        const res = t.BidRecommendationRequest.decode({
            expressions: [
                {
                    type: 'queryExactMatches',
                    value: 'oranges',
                },
            ],
            adGroupId: 217706707887211,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should pass getBidRecommendations Auto Example param', () => {
        const res = t.BidRecommendationRequest.decode({
            expressions: [
                {
                    type: 'queryBroadRelMatches',
                    value: 'apples',
                },
            ],
            adGroupId: 163368712670649,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
    it('should pass getBidRecommendations Product Example param', () => {
        const res = t.BidRecommendationRequest.decode({
            expressions: [
                {
                    type: 'asinCategorySameAs',
                    value: '166099011',
                },
                {
                    type: 'asinReviewRatingBetween',
                    value: '4.5-5',
                },
            ],
            adGroupId: 163368712670649,
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map