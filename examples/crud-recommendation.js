"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const sponsoredBrandsBidRecommendationsOperation = auth_1.amazonAdvertising.sponsoredBrandsBidRecommendations;
const sponsoredBrandsTargetingRecommendationsOperation = auth_1.amazonAdvertising.sponsoredBrandsTargetingRecommendations;
const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'];
// Get a list of bid recommendation objects for a specified list of keywords or products.
const sponsoredBrandsBidsRecommendationRequest = {
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
};
sponsoredBrandsBidRecommendationsOperation.getBidRecommendations(sponsoredBrandsBidsRecommendationRequest);
// Gets a list of brand suggestions.
const sponsoredBrandsBrandRecommendationsRequest = {
    categoryId: 123,
};
sponsoredBrandsTargetingRecommendationsOperation.getBrandRecommendations(sponsoredBrandsBrandRecommendationsRequest);
// Gets a list of recommended categories for targeting.
const sponsoredBrandsCategoryRecommendationsRequest = {
    asins: ASINS,
};
sponsoredBrandsTargetingRecommendationsOperation.getCategoryRecommendations(sponsoredBrandsCategoryRecommendationsRequest);
// Gets a list of recommended products for targeting.
const sponsoredBrandsProductRecommendationsRequest = {
    nextToken: '',
    maxResults: 1,
    filters: [
        {
            filterType: 'ASINS',
            values: ASINS,
        },
    ],
};
sponsoredBrandsTargetingRecommendationsOperation.getProductRecommendations(sponsoredBrandsProductRecommendationsRequest);
//# sourceMappingURL=crud-recommendation.js.map