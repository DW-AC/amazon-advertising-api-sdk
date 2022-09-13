"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonAdvertising = void 0;
const lazy_get_decorator_1 = require("lazy-get-decorator");
const http_client_1 = require("./http-client");
const operation_provider_1 = require("./operations/operation-provider");
const sponsored_brands_ad_group_operation_1 = require("./operations/ad-groups/sponsored-brands-ad-group-operation");
const sponsored_display_ad_group_operation_1 = require("./operations/ad-groups/sponsored-display-ad-group-operation");
const sponsored_products_ad_group_operation_1 = require("./operations/ad-groups/sponsored-products-ad-group-operation");
const sponsored_products_bid_recommendation_operation_1 = require("./operations/bidding/sponsored-products-bid-recommendation-operation");
const sponsored_brands_campaign_operation_1 = require("./operations/campaigns/sponsored-brands-campaign-operation");
const sponsored_display_campaign_operation_1 = require("./operations/campaigns/sponsored-display-campaign-operation");
const sponsored_products_campaign_operation_1 = require("./operations/campaigns/sponsored-products-campaign-operation");
const sponsored_brands_drafts_operation_1 = require("./operations/drafts/sponsored-brands-drafts-operation");
const sponsored_brands_keyword_recommendations_operation_1 = require("./operations/keywords/sponsored-brands-keyword-recommendations-operation");
const sponsored_brands_keywords_operation_1 = require("./operations/keywords/sponsored-brands-keywords-operation");
const sponsored_brands_negative_keywords_operation_1 = require("./operations/keywords/sponsored-brands-negative-keywords-operation");
const sponsored_products_ad_group_keywords_operation_1 = require("./operations/keywords/sponsored-products-ad-group-keywords-operation");
const sponsored_products_ad_group_negative_keywords_operation_1 = require("./operations/keywords/sponsored-products-ad-group-negative-keywords-operation");
const sponsored_products_campaign_negative_keywords_operation_1 = require("./operations/keywords/sponsored-products-campaign-negative-keywords-operation");
const sponsored_products_suggested_keywords_operation_1 = require("./operations/keywords/sponsored-products-suggested-keywords-operation");
const portfolio_operation_1 = require("./operations/portfolios/portfolio-operation");
const sponsored_display_product_ads_operation_1 = require("./operations/product-ads/sponsored-display-product-ads-operation");
const sponsored_products_product_ads_operation_1 = require("./operations/product-ads/sponsored-products-product-ads-operation");
const sponsored_brands_negative_targeting_operation_1 = require("./operations/negative-targeting/sponsored-brands-negative-targeting-operation");
const sponsored_brands_product_targeting_operation_1 = require("./operations/product-targeting/sponsored-brands-product-targeting-operation");
const sponsored_display_negative_targeting_operation_1 = require("./operations/negative-targeting/sponsored-display-negative-targeting-operation");
const sponsored_products_negative_targeting_operation_1 = require("./operations/negative-targeting/sponsored-products-negative-targeting-operation");
const sponsored_products_product_targeting_operation_1 = require("./operations/product-targeting/sponsored-products-product-targeting-operation");
const profile_operation_1 = require("./operations/profiles/profile-operation");
const test_account_operation_1 = require("./operations/test-accounts/test-account-operation");
const sponsored_brands_bid_recommendations_operation_1 = require("./operations/recommendations/sponsored-brands-bid-recommendations-operation");
const sponsored_brands_targeting_recommendations_operation_1 = require("./operations/recommendations/sponsored-brands-targeting-recommendations-operation");
const sponsored_brands_report_operation_1 = require("./operations/reports/sponsored-brands/sponsored-brands-report-operation");
const sponsored_display_report_operation_1 = require("./operations/reports/sponsored-display/sponsored-display-report-operation");
const sponsored_products_report_operation_1 = require("./operations/reports/sponsored-products/sponsored-products-report-operation");
const sponsored_brands_snapshot_operation_1 = require("./operations/snapshots/sponsored-brands-snapshot-operation");
const sponsored_products_snapshot_operation_1 = require("./operations/snapshots/sponsored-products-snapshot-operation");
const sponsored_display_snapshot_operation_1 = require("./operations/snapshots/sponsored-display-snapshot-operation");
const sponsored_brands_stores_info_operation_1 = require("./operations/stores/sponsored-brands-stores-info-operation");
const sponsored_display_suggested_products_operation_1 = require("./operations/suggested-products/sponsored-display-suggested-products-operation");
const sponsored_brands_media_operation_1 = require("./operations/media/sponsored-brands-media-operation");
class AmazonAdvertising {
    constructor(marketplace, auth) {
        this.marketplace = marketplace;
        this.auth = auth;
        const httpClient = new http_client_1.HttpClient(marketplace.advertising.region.endpoint, auth);
        this.operationProvider = new operation_provider_1.OperationProvider(httpClient);
    }
    get sponsoredBrandsAdGroup() {
        return this.operationProvider.create(sponsored_brands_ad_group_operation_1.SponsoredBrandsAdGroupOperation);
    }
    get sponsoredDisplayAdGroup() {
        return this.operationProvider.create(sponsored_display_ad_group_operation_1.SponsoredDisplayAdGroupOperation);
    }
    get sponsoredProductsAdGroup() {
        return this.operationProvider.create(sponsored_products_ad_group_operation_1.SponsoredProductsAdGroupOperation);
    }
    get sponsoredProductsBidRecommendation() {
        return this.operationProvider.create(sponsored_products_bid_recommendation_operation_1.SponsoredProductsBidRecommendationOperation);
    }
    get sponsoredBrandsCampaign() {
        return this.operationProvider.create(sponsored_brands_campaign_operation_1.SponsoredBrandsCampaignOperation);
    }
    get sponsoredDisplayCampaign() {
        return this.operationProvider.create(sponsored_display_campaign_operation_1.SponsoredDisplayCampaignOperation);
    }
    get sponsoredProductsCampaign() {
        return this.operationProvider.create(sponsored_products_campaign_operation_1.SponsoredProductsCampaignOperation);
    }
    get sponsoredBrandsDrafts() {
        return this.operationProvider.create(sponsored_brands_drafts_operation_1.SponsoredBrandsDraftsOperation);
    }
    get sponsoredBrandsKeywordRecommendations() {
        return this.operationProvider.create(sponsored_brands_keyword_recommendations_operation_1.SponsoredBrandsKeywordRecommendationsOperation);
    }
    get sponsoredBrandsKeywords() {
        return this.operationProvider.create(sponsored_brands_keywords_operation_1.SponsoredBrandsKeywordsOperation);
    }
    get sponsoredBrandsNegativeKeywords() {
        return this.operationProvider.create(sponsored_brands_negative_keywords_operation_1.SponsoredBrandsNegativeKeywordsOperation);
    }
    get sponsoredProductsAdGroupKeywords() {
        return this.operationProvider.create(sponsored_products_ad_group_keywords_operation_1.SponsoredProductsAdGroupKeywordsOperation);
    }
    get sponsoredProductsAdGroupNegativeKeywords() {
        return this.operationProvider.create(sponsored_products_ad_group_negative_keywords_operation_1.SponsoredProductsAdGroupNegativeKeywordsOperation);
    }
    get sponsoredProductsCampaignNegativeKeywords() {
        return this.operationProvider.create(sponsored_products_campaign_negative_keywords_operation_1.SponsoredProductsCampaignNegativeKeywordsOperation);
    }
    get sponsoredProductsSuggestedKeywords() {
        return this.operationProvider.create(sponsored_products_suggested_keywords_operation_1.SponsoredProductsSuggestedKeywordsOperation);
    }
    get portfolio() {
        return this.operationProvider.create(portfolio_operation_1.PortfolioOperation);
    }
    get sponsoredDisplayProductAds() {
        return this.operationProvider.create(sponsored_display_product_ads_operation_1.SponsoredDisplayProductAdsOperation);
    }
    get sponsoredProductsProductAds() {
        return this.operationProvider.create(sponsored_products_product_ads_operation_1.SponsoredProductsProductAdsOperation);
    }
    get sponsoredBrandsNegativeTargeting() {
        return this.operationProvider.create(sponsored_brands_negative_targeting_operation_1.SponsoredBrandsNegativeTargetingOperation);
    }
    get sponsoredBrandsProductTargeting() {
        return this.operationProvider.create(sponsored_brands_product_targeting_operation_1.SponsoredBrandsProductTargetingOperation);
    }
    get sponsoredDisplayNegativeTargeting() {
        return this.operationProvider.create(sponsored_display_negative_targeting_operation_1.SponsoredDisplayNegativeTargetingOperation);
    }
    get sponsoredProductsNegativeTargeting() {
        return this.operationProvider.create(sponsored_products_negative_targeting_operation_1.SponsoredProductsNegativeTargetingOperation);
    }
    get sponsoredProductsProductTargeting() {
        return this.operationProvider.create(sponsored_products_product_targeting_operation_1.SponsoredProductsProductTargetingOperation);
    }
    get profile() {
        return this.operationProvider.create(profile_operation_1.ProfileOperation);
    }
    get testAccount() {
        return this.operationProvider.create(test_account_operation_1.TestAccountOperation);
    }
    get sponsoredBrandsBidRecommendations() {
        return this.operationProvider.create(sponsored_brands_bid_recommendations_operation_1.SponsoredBrandsBidRecommendationsOperation);
    }
    get sponsoredBrandsTargetingRecommendations() {
        return this.operationProvider.create(sponsored_brands_targeting_recommendations_operation_1.SponsoredBrandsTargetingRecommendationsOperation);
    }
    get sponsoredBrandsReport() {
        return this.operationProvider.create(sponsored_brands_report_operation_1.SponsoredBrandsReportOperation);
    }
    get sponsoredDisplayReport() {
        return this.operationProvider.create(sponsored_display_report_operation_1.SponsoredDisplayReportOperation);
    }
    get sponsoredProductsReport() {
        return this.operationProvider.create(sponsored_products_report_operation_1.SponsoredProductsReportOperation);
    }
    get sponsoredBrandsSnapshot() {
        return this.operationProvider.create(sponsored_brands_snapshot_operation_1.SponsoredBrandsSnapshotOperation);
    }
    get sponsoredProductsSnapshot() {
        return this.operationProvider.create(sponsored_products_snapshot_operation_1.SponsoredProductsSnapshotOperation);
    }
    get sponsoredDisplaySnapshot() {
        return this.operationProvider.create(sponsored_display_snapshot_operation_1.SponsoredDisplaySnapshotOperation);
    }
    get sponsoredBrandsStoresInfo() {
        return this.operationProvider.create(sponsored_brands_stores_info_operation_1.SponsoredBrandsStoresInfoOperation);
    }
    get sponsoredDisplaySuggestedProducts() {
        return this.operationProvider.create(sponsored_display_suggested_products_operation_1.SponsoredDisplaySuggestedProductsOperation);
    }
    get sponsoredBrandsMedia() {
        return this.operationProvider.create(sponsored_brands_media_operation_1.SponsoredBrandsMediaOperation);
    }
}
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsAdGroup", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplayAdGroup", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsAdGroup", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsBidRecommendation", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsCampaign", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplayCampaign", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsCampaign", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsDrafts", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsKeywordRecommendations", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsKeywords", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsNegativeKeywords", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsAdGroupKeywords", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsAdGroupNegativeKeywords", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsCampaignNegativeKeywords", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsSuggestedKeywords", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "portfolio", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplayProductAds", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsProductAds", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsNegativeTargeting", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsProductTargeting", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplayNegativeTargeting", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsNegativeTargeting", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsProductTargeting", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "profile", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "testAccount", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsBidRecommendations", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsTargetingRecommendations", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsReport", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplayReport", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsReport", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsSnapshot", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredProductsSnapshot", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplaySnapshot", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsStoresInfo", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredDisplaySuggestedProducts", null);
__decorate([
    (0, lazy_get_decorator_1.LazyGetter)()
], AmazonAdvertising.prototype, "sponsoredBrandsMedia", null);
exports.AmazonAdvertising = AmazonAdvertising;
//# sourceMappingURL=amazon-advertising.js.map