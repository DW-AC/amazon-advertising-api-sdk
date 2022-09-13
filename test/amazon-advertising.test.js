"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amazon_advertising_1 = require("../src/amazon-advertising");
const amazon_marketplaces_1 = require("@scaleleap/amazon-marketplaces");
const http_client_factory_1 = require("./http-client-factory");
const sponsored_brands_ad_group_operation_1 = require("../src/operations/ad-groups/sponsored-brands-ad-group-operation");
const sponsored_display_ad_group_operation_1 = require("../src/operations/ad-groups/sponsored-display-ad-group-operation");
const sponsored_products_ad_group_operation_1 = require("../src/operations/ad-groups/sponsored-products-ad-group-operation");
const sponsored_products_bid_recommendation_operation_1 = require("../src/operations/bidding/sponsored-products-bid-recommendation-operation");
const sponsored_brands_campaign_operation_1 = require("../src/operations/campaigns/sponsored-brands-campaign-operation");
const sponsored_display_campaign_operation_1 = require("../src/operations/campaigns/sponsored-display-campaign-operation");
const sponsored_products_campaign_operation_1 = require("../src/operations/campaigns/sponsored-products-campaign-operation");
const sponsored_brands_drafts_operation_1 = require("../src/operations/drafts/sponsored-brands-drafts-operation");
const sponsored_brands_keyword_recommendations_operation_1 = require("../src/operations/keywords/sponsored-brands-keyword-recommendations-operation");
const sponsored_brands_keywords_operation_1 = require("../src/operations/keywords/sponsored-brands-keywords-operation");
const sponsored_brands_negative_keywords_operation_1 = require("../src/operations/keywords/sponsored-brands-negative-keywords-operation");
const sponsored_products_ad_group_keywords_operation_1 = require("../src/operations/keywords/sponsored-products-ad-group-keywords-operation");
const sponsored_products_ad_group_negative_keywords_operation_1 = require("../src/operations/keywords/sponsored-products-ad-group-negative-keywords-operation");
const sponsored_products_campaign_negative_keywords_operation_1 = require("../src/operations/keywords/sponsored-products-campaign-negative-keywords-operation");
const sponsored_products_suggested_keywords_operation_1 = require("../src/operations/keywords/sponsored-products-suggested-keywords-operation");
const portfolio_operation_1 = require("../src/operations/portfolios/portfolio-operation");
const sponsored_display_product_ads_operation_1 = require("../src/operations/product-ads/sponsored-display-product-ads-operation");
const sponsored_products_product_ads_operation_1 = require("../src/operations/product-ads/sponsored-products-product-ads-operation");
const sponsored_brands_product_targeting_operation_1 = require("../src/operations/product-targeting/sponsored-brands-product-targeting-operation");
const sponsored_display_negative_targeting_operation_1 = require("../src/operations/negative-targeting/sponsored-display-negative-targeting-operation");
const sponsored_products_product_targeting_operation_1 = require("../src/operations/product-targeting/sponsored-products-product-targeting-operation");
const profile_operation_1 = require("../src/operations/profiles/profile-operation");
const test_account_operation_1 = require("../src/operations/test-accounts/test-account-operation");
const sponsored_brands_bid_recommendations_operation_1 = require("../src/operations/recommendations/sponsored-brands-bid-recommendations-operation");
const sponsored_brands_targeting_recommendations_operation_1 = require("../src/operations/recommendations/sponsored-brands-targeting-recommendations-operation");
const sponsored_brands_report_operation_1 = require("../src/operations/reports/sponsored-brands/sponsored-brands-report-operation");
const sponsored_display_report_operation_1 = require("../src/operations/reports/sponsored-display/sponsored-display-report-operation");
const sponsored_products_report_operation_1 = require("../src/operations/reports/sponsored-products/sponsored-products-report-operation");
const sponsored_brands_snapshot_operation_1 = require("../src/operations/snapshots/sponsored-brands-snapshot-operation");
const sponsored_products_snapshot_operation_1 = require("../src/operations/snapshots/sponsored-products-snapshot-operation");
const sponsored_brands_stores_info_operation_1 = require("../src/operations/stores/sponsored-brands-stores-info-operation");
const sponsored_brands_media_operation_1 = require("../src/operations/media/sponsored-brands-media-operation");
const test_utils_1 = require("./test-utils");
const amazonAdvertising = new amazon_advertising_1.AmazonAdvertising((0, test_utils_1.getAdvertising)(amazon_marketplaces_1.amazonMarketplaces.JP), http_client_factory_1.auth);
describe('AmazonAdvertising', () => {
    it('should return SponsoredBrandsAdGroupOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsAdGroup;
        expect(operation).toBeInstanceOf(sponsored_brands_ad_group_operation_1.SponsoredBrandsAdGroupOperation);
    });
    it('should return SponsoredDisplayAdGroupOperation', () => {
        const operation = amazonAdvertising.sponsoredDisplayAdGroup;
        expect(operation).toBeInstanceOf(sponsored_display_ad_group_operation_1.SponsoredDisplayAdGroupOperation);
    });
    it('should return SponsoredProductsAdGroupOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsAdGroup;
        expect(operation).toBeInstanceOf(sponsored_products_ad_group_operation_1.SponsoredProductsAdGroupOperation);
    });
    it('should return SponsoredProductsBidRecommendationOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsBidRecommendation;
        expect(operation).toBeInstanceOf(sponsored_products_bid_recommendation_operation_1.SponsoredProductsBidRecommendationOperation);
    });
    it('should return SponsoredBrandsCampaignOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsCampaign;
        expect(operation).toBeInstanceOf(sponsored_brands_campaign_operation_1.SponsoredBrandsCampaignOperation);
    });
    it('should return SponsoredDisplayCampaignOperation', () => {
        const operation = amazonAdvertising.sponsoredDisplayCampaign;
        expect(operation).toBeInstanceOf(sponsored_display_campaign_operation_1.SponsoredDisplayCampaignOperation);
    });
    it('should return SponsoredProductsCampaignOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsCampaign;
        expect(operation).toBeInstanceOf(sponsored_products_campaign_operation_1.SponsoredProductsCampaignOperation);
    });
    it('should return SponsoredBrandsDraftsOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsDrafts;
        expect(operation).toBeInstanceOf(sponsored_brands_drafts_operation_1.SponsoredBrandsDraftsOperation);
    });
    it('should return SponsoredBrandsKeywordRecommendationsOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsKeywordRecommendations;
        expect(operation).toBeInstanceOf(sponsored_brands_keyword_recommendations_operation_1.SponsoredBrandsKeywordRecommendationsOperation);
    });
    it('should return SponsoredBrandsKeywordsOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsKeywords;
        expect(operation).toBeInstanceOf(sponsored_brands_keywords_operation_1.SponsoredBrandsKeywordsOperation);
    });
    it('should return SponsoredBrandsNegativeKeywordsOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsNegativeKeywords;
        expect(operation).toBeInstanceOf(sponsored_brands_negative_keywords_operation_1.SponsoredBrandsNegativeKeywordsOperation);
    });
    it('should return SponsoredProductsAdGroupKeywordsOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsAdGroupKeywords;
        expect(operation).toBeInstanceOf(sponsored_products_ad_group_keywords_operation_1.SponsoredProductsAdGroupKeywordsOperation);
    });
    it('should return SponsoredProductsAdGroupNegativeKeywordsOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsAdGroupNegativeKeywords;
        expect(operation).toBeInstanceOf(sponsored_products_ad_group_negative_keywords_operation_1.SponsoredProductsAdGroupNegativeKeywordsOperation);
    });
    it('should return SponsoredProductsCampaignNegativeKeywordsOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsCampaignNegativeKeywords;
        expect(operation).toBeInstanceOf(sponsored_products_campaign_negative_keywords_operation_1.SponsoredProductsCampaignNegativeKeywordsOperation);
    });
    it('should return SponsoredProductsSuggestedKeywordsOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsSuggestedKeywords;
        expect(operation).toBeInstanceOf(sponsored_products_suggested_keywords_operation_1.SponsoredProductsSuggestedKeywordsOperation);
    });
    it('should return PortfolioOperation', () => {
        const operation = amazonAdvertising.portfolio;
        expect(operation).toBeInstanceOf(portfolio_operation_1.PortfolioOperation);
    });
    it('should return SponsoredDisplayProductAdsOperation', () => {
        const operation = amazonAdvertising.sponsoredDisplayProductAds;
        expect(operation).toBeInstanceOf(sponsored_display_product_ads_operation_1.SponsoredDisplayProductAdsOperation);
    });
    it('should return SponsoredProductsProductAdsOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsProductAds;
        expect(operation).toBeInstanceOf(sponsored_products_product_ads_operation_1.SponsoredProductsProductAdsOperation);
    });
    it('should return SponsoredBrandsProductTargetingOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsProductTargeting;
        expect(operation).toBeInstanceOf(sponsored_brands_product_targeting_operation_1.SponsoredBrandsProductTargetingOperation);
    });
    it('should return SponsoredDisplayNegativeTargetingOperation', () => {
        const operation = amazonAdvertising.sponsoredDisplayNegativeTargeting;
        expect(operation).toBeInstanceOf(sponsored_display_negative_targeting_operation_1.SponsoredDisplayNegativeTargetingOperation);
    });
    it('should return SponsoredProductsProductTargetingOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsProductTargeting;
        expect(operation).toBeInstanceOf(sponsored_products_product_targeting_operation_1.SponsoredProductsProductTargetingOperation);
    });
    it('should return ProfileOperation', () => {
        const operation = amazonAdvertising.profile;
        expect(operation).toBeInstanceOf(profile_operation_1.ProfileOperation);
    });
    it('should return TestAccountOperation', () => {
        const operation = amazonAdvertising.testAccount;
        expect(operation).toBeInstanceOf(test_account_operation_1.TestAccountOperation);
    });
    it('should return SponsoredBrandsBidRecommendationsOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsBidRecommendations;
        expect(operation).toBeInstanceOf(sponsored_brands_bid_recommendations_operation_1.SponsoredBrandsBidRecommendationsOperation);
    });
    it('should return SponsoredBrandsTargetingRecommendationsOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsTargetingRecommendations;
        expect(operation).toBeInstanceOf(sponsored_brands_targeting_recommendations_operation_1.SponsoredBrandsTargetingRecommendationsOperation);
    });
    it('should return SponsoredBrandsReportOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsReport;
        expect(operation).toBeInstanceOf(sponsored_brands_report_operation_1.SponsoredBrandsReportOperation);
    });
    it('should return SponsoredDisplayReportOperation', () => {
        const operation = amazonAdvertising.sponsoredDisplayReport;
        expect(operation).toBeInstanceOf(sponsored_display_report_operation_1.SponsoredDisplayReportOperation);
    });
    it('should return SponsoredProductsReportOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsReport;
        expect(operation).toBeInstanceOf(sponsored_products_report_operation_1.SponsoredProductsReportOperation);
    });
    it('should return SponsoredBrandsSnapshotOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsSnapshot;
        expect(operation).toBeInstanceOf(sponsored_brands_snapshot_operation_1.SponsoredBrandsSnapshotOperation);
    });
    it('should return SponsoredProductsSnapshotOperation', () => {
        const operation = amazonAdvertising.sponsoredProductsSnapshot;
        expect(operation).toBeInstanceOf(sponsored_products_snapshot_operation_1.SponsoredProductsSnapshotOperation);
    });
    it('should return SponsoredBrandsStoresInfoOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsStoresInfo;
        expect(operation).toBeInstanceOf(sponsored_brands_stores_info_operation_1.SponsoredBrandsStoresInfoOperation);
    });
    it('should return SponsoredBrandsMediaOperation', () => {
        const operation = amazonAdvertising.sponsoredBrandsMedia;
        expect(operation).toBeInstanceOf(sponsored_brands_media_operation_1.SponsoredBrandsMediaOperation);
    });
});
//# sourceMappingURL=amazon-advertising.test.js.map