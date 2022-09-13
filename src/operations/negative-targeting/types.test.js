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
describe('SponsoredBrandsListNegativeTargetsResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsListNegativeTargetsResponse.decode({
            nextToken: 'string',
            negativeTargets: [
                {
                    targetId: 0,
                    adGroupId: 0,
                    campaignId: 0,
                    expressions: {
                        type: 'asinCategorySameAs',
                        value: 'string',
                    },
                    resolvedExpressions: {
                        type: 'asinCategorySameAs',
                        value: 'string',
                    },
                    state: 'enabled',
                    bid: 0,
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsUpdateNegativeTargetsRequest', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsUpdateNegativeTargetsRequest.decode({
            negativeTargets: [
                {
                    targetId: 0,
                    adGroupId: 0,
                    state: 'enabled',
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsCreateNegativeTargetsRequest', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsCreateNegativeTargetsRequest.decode({
            negativeTargets: [
                {
                    adGroupId: 0,
                    campaignId: 0,
                    expressions: {
                        type: 'asinBrandSameAs',
                        value: 'string',
                    },
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsCreateNegativeTargetsResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsCreateNegativeTargetsResponse.decode({
            createTargetSuccessResults: [
                {
                    targetRequestIndex: 0,
                    targetId: 0,
                },
            ],
            createTargetErrorResults: [
                {
                    code: 'string',
                    details: 'string',
                    targetRequestIndex: 0,
                    targetId: 0,
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsNegativeTargetingClause', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsNegativeTargetingClause.decode({
            targetId: 0,
            adGroupId: 0,
            campaignId: 0,
            expressions: {
                type: 'asinBrandSameAs',
                value: 'string',
            },
            resolvedExpressions: {
                type: 'asinCategorySameAs',
                value: 'string',
            },
            state: 'enabled',
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsBatchGetNegativeTargetsRequest', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsBatchGetNegativeTargetsRequest.decode({
            targetIds: [0],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
describe('SponsoredBrandsBatchGetNegativeTargetsResponse', () => {
    it('should pass', () => {
        const res = t.SponsoredBrandsBatchGetNegativeTargetsResponse.decode({
            batchGetNegativeTargetSuccessResults: [
                {
                    targetingClause: {
                        targetId: 0,
                        adGroupId: 0,
                        campaignId: 0,
                        state: 'ENABLED',
                        expressions: [
                            {
                                type: 'asinCategorySameAs',
                                value: 'string',
                            },
                        ],
                        resolvedExpressions: [
                            {
                                type: 'asinCategorySameAs',
                                value: 'string',
                            },
                        ],
                    },
                    targetRequestIndex: 0,
                },
            ],
            batchGetNegativeTargetErrorResults: [
                {
                    code: 'string',
                    details: 'string',
                    targetId: 0,
                    targetRequestIndex: 0,
                },
            ],
        });
        expect((0, Either_1.isRight)(res)).toBeTruthy();
    });
});
//# sourceMappingURL=types.test.js.map