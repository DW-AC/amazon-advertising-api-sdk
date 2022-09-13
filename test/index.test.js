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
const index = __importStar(require("../src/index"));
const entrypointClass = __importStar(require("../src/amazon-advertising"));
const adGroupTypes = __importStar(require("../src/operations/ad-groups/types"));
const campaign_bidding_adjustments_predicate_1 = require("../src/operations/bidding/campaign-bidding-adjustments-predicate");
const campaign_bidding_strategy_1 = require("../src/operations/bidding/campaign-bidding-strategy");
const biddingTypes = __importStar(require("../src/operations/bidding/types"));
const campaignTypes = __importStar(require("../src/operations/campaigns/types"));
const types_1 = require("../src/operations/drafts/types");
const keywordTypes = __importStar(require("../src/operations/keywords/types"));
const portfolioTypes = __importStar(require("../src/operations/portfolios/types"));
const productAdsTypes = __importStar(require("../src/operations/product-ads/types"));
const productTargetingTypes = __importStar(require("../src/operations/product-targeting/types"));
const nargetingTypes = __importStar(require("../src/operations/negative-targeting/types"));
const profileTypes = __importStar(require("../src/operations/profiles/types"));
const recommendationTypes = __importStar(require("../src/operations/recommendations/types"));
const reportTypes = __importStar(require("../src/operations/reports/index"));
const snapshotTypes = __importStar(require("../src/operations/snapshots/types"));
describe('index', () => {
    describe('amazon advertising', () => {
        it('should export main entry class', () => {
            expect(index.AmazonAdvertising).toEqual(entrypointClass.AmazonAdvertising);
        });
    });
    describe('ad group', () => {
        it('should export all enums', () => {
            expect(index.AdGroupState).toEqual(adGroupTypes.AdGroupState);
            expect(index.AdGroupResponseStatus).toEqual(adGroupTypes.AdGroupResponseStatus);
            expect(index.AdGroupServingStatus).toEqual(adGroupTypes.AdGroupServingStatus);
        });
    });
    describe('bidding', () => {
        it('should export all enums', () => {
            expect(index.CampaignBiddingAdjustmentsPredicate).toEqual(campaign_bidding_adjustments_predicate_1.CampaignBiddingAdjustmentsPredicate);
            expect(index.CampaignBiddingStrategy).toEqual(campaign_bidding_strategy_1.CampaignBiddingStrategy);
            expect(index.BiddingAutoPredicateType).toEqual(biddingTypes.BiddingAutoPredicateType);
            expect(index.BiddingKeywordPredicateType).toEqual(biddingTypes.BiddingKeywordPredicateType);
            expect(index.BiddingProductPredicateType).toEqual(biddingTypes.BiddingProductPredicateType);
            expect(index.KeywordBidRecommendationsMatchType).toEqual(biddingTypes.KeywordBidRecommendationsMatchType);
        });
    });
    describe('campaigns', () => {
        it('should export all enums', () => {
            expect(index.CampaignServingStatus).toEqual(campaignTypes.CampaignServingStatus);
            expect(index.CampaignState).toEqual(campaignTypes.CampaignState);
            expect(index.CampaignTargetingType).toEqual(campaignTypes.CampaignTargetingType);
            expect(index.CampaignType).toEqual(campaignTypes.CampaignType);
        });
    });
    describe('draft', () => {
        it('should export all enums', () => {
            expect(index.BudgetType).toEqual(types_1.BudgetType);
        });
    });
    describe('keyword', () => {
        it('should export all enums', () => {
            expect(index.CampaignNegativeKeywordMatchType).toEqual(keywordTypes.CampaignNegativeKeywordMatchType);
            expect(index.CampaignNegativeKeywordResponseStatus).toEqual(keywordTypes.CampaignNegativeKeywordResponseStatus);
            expect(index.CampaignNegativeKeywordServingStatus).toEqual(keywordTypes.CampaignNegativeKeywordServingStatus);
            expect(index.CampaignNegativeKeywordState).toEqual(keywordTypes.CampaignNegativeKeywordState);
            expect(index.KeywordMatchType).toEqual(keywordTypes.KeywordMatchType);
            expect(index.KeywordResponseStatus).toEqual(keywordTypes.KeywordResponseStatus);
            expect(index.KeywordServingStatus).toEqual(keywordTypes.KeywordServingStatus);
            expect(index.KeywordState).toEqual(keywordTypes.KeywordState);
            expect(index.NegativeKeywordMatchType).toEqual(keywordTypes.NegativeKeywordMatchType);
            expect(index.NegativeKeywordResponseStatus).toEqual(keywordTypes.NegativeKeywordResponseStatus);
            expect(index.NegativeKeywordServingStatus).toEqual(keywordTypes.NegativeKeywordServingStatus);
            expect(index.NegativeKeywordState).toEqual(keywordTypes.NegativeKeywordState);
            expect(index.SponsoredBrandsKeywordState).toEqual(keywordTypes.SponsoredBrandsKeywordState);
            expect(index.SponsoredBrandsNegativeKeywordState).toEqual(keywordTypes.SponsoredBrandsNegativeKeywordState);
            expect(index.SuggestBids).toEqual(keywordTypes.SuggestBids);
        });
    });
    describe('portfolio', () => {
        it('should export all enums', () => {
            expect(index.PortfolioState).toEqual(portfolioTypes.PortfolioState);
            expect(index.PortfolioResponseStatus).toEqual(portfolioTypes.PortfolioResponseStatus);
        });
    });
    describe('product ads', () => {
        it('should export all enums', () => {
            expect(index.ProductAdServingStatus).toEqual(productAdsTypes.ProductAdServingStatus);
            expect(index.ProductAdState).toEqual(productAdsTypes.ProductAdState);
        });
    });
    describe('product targeting', () => {
        it('should export all enums', () => {
            expect(index.ExpressionType).toEqual(productTargetingTypes.ExpressionType);
            expect(index.SponsoredBrandsProductPredicateType).toEqual(productTargetingTypes.SponsoredBrandsProductPredicateType);
            expect(index.SponsoredBrandsExpressionState).toEqual(productTargetingTypes.SponsoredBrandsExpressionState);
            expect(index.SponsoredBrandsFilterType).toEqual(productTargetingTypes.SponsoredBrandsFilterType);
            expect(index.SponsoredBrandsNegativeExpressionType).toEqual(nargetingTypes.SponsoredBrandsNegativeExpressionType);
            expect(index.SponsoredBrandsTargetState).toEqual(productTargetingTypes.SponsoredBrandsTargetState);
            expect(index.TargetingClauseServingStatus).toEqual(productTargetingTypes.TargetingClauseServingStatus);
            expect(index.TargetingClauseState).toEqual(productTargetingTypes.TargetingClauseState);
            expect(index.TargetingExpressionType).toEqual(productTargetingTypes.TargetingExpressionType);
        });
    });
    describe('profile', () => {
        it('should export all enums', () => {
            expect(index.AccountInfoType).toEqual(profileTypes.AccountInfoType);
            expect(index.RegisterProfileResponseStatus).toEqual(profileTypes.RegisterProfileResponseStatus);
        });
    });
    describe('recommendation', () => {
        it('should export all enums', () => {
            expect(index.SponsoredBrandsKeywordExpressionType).toEqual(recommendationTypes.SponsoredBrandsKeywordExpressionType);
            expect(index.SponsoredBrandsProductRecommendationFilterType).toEqual(recommendationTypes.SponsoredBrandsProductRecommendationFilterType);
        });
    });
    describe('report', () => {
        it('should export all enums', () => {
            expect(index.SponsoredProductsAdGroupReportMetrics).toEqual(reportTypes.SponsoredProductsAdGroupReportMetrics);
            expect(index.SponsoredProductsAsinsReportMetrics).toEqual(reportTypes.SponsoredProductsAsinsReportMetrics);
            expect(index.SponsoredProductsCampaignReportMetrics).toEqual(reportTypes.SponsoredProductsCampaignReportMetrics);
            expect(index.SponsoredProductsKeywordReportMetrics).toEqual(reportTypes.SponsoredProductsKeywordReportMetrics);
            expect(index.SponsoredProductsProductAdsReportMetrics).toEqual(reportTypes.SponsoredProductsProductAdsReportMetrics);
            expect(index.SponsoredProductsProductTargetingReportMetrics).toEqual(reportTypes.SponsoredProductsProductTargetingReportMetrics);
            expect(index.ReportResponseStatus).toEqual(reportTypes.ReportResponseStatus);
            expect(index.ReportSegments).toEqual(reportTypes.ReportSegments);
            expect(index.SponsoredBrandsReportType).toEqual(reportTypes.SponsoredBrandsReportType);
            expect(index.SponsoredProductsReportType).toEqual(reportTypes.SponsoredProductsReportType);
            expect(index.SponsoredBrandsAdGroupReportMetrics).toEqual(reportTypes.SponsoredBrandsAdGroupReportMetrics);
            expect(index.SponsoredBrandsCampaignReportMetrics).toEqual(reportTypes.SponsoredBrandsCampaignReportMetrics);
            expect(index.SponsoredBrandsKeywordReportMetrics).toEqual(reportTypes.SponsoredBrandsKeywordReportMetrics);
            expect(index.SponsoredBrandsTargetReportMetrics).toEqual(reportTypes.SponsoredBrandsTargetReportMetrics);
        });
    });
    describe('snapshot', () => {
        it('should export all enums', () => {
            expect(index.SponsoredProductsRecordType).toEqual(snapshotTypes.SponsoredProductsRecordType);
            expect(index.SponsoredBrandsRecordType).toEqual(snapshotTypes.SponsoredBrandsRecordType);
            expect(index.SnapshotState).toEqual(snapshotTypes.SnapshotState);
            expect(index.SponsoredBrandsRecordType).toEqual(snapshotTypes.SponsoredBrandsRecordType);
        });
    });
});
//# sourceMappingURL=index.test.js.map