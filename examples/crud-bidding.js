"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const sponsoredProductsBidRecommendationOperation = auth_1.amazonAdvertising.sponsoredProductsBidRecommendation;
// Request bid recommendations for a list of up to 100 keywords.
const keywordBidRecommendations = {
    adGroupId: 123,
    keywords: [
        {
            keyword: 'Apple',
            matchType: 'broad',
        },
    ],
};
sponsoredProductsBidRecommendationOperation.createKeywordBidRecommendations(keywordBidRecommendations);
// Request bid recommendations for specified ad group.
sponsoredProductsBidRecommendationOperation.getAdGroupBidRecommendations(123);
// Retrieve a list of bid recommendations for keyword, product, or auto targeting expressions by adGroupId.
const bidRecommendationRequest = {
    expressions: [
        {
            type: 'queryExactMatches',
            value: 'oranges',
        },
    ],
    adGroupId: 217706707887211,
};
sponsoredProductsBidRecommendationOperation.getBidRecommendations(bidRecommendationRequest);
// Request bid recommendations for specified keyword.
sponsoredProductsBidRecommendationOperation.getKeywordBidRecommendations(123);
//# sourceMappingURL=crud-bidding.js.map