"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const sponsoredBrandsDraftsOperation = auth_1.amazonAdvertising.sponsoredBrandsDrafts;
// Archives a draft campaign specified by identifier.
sponsoredBrandsDraftsOperation.archiveDraftCampaign(123);
// Creates one or more new draft campaigns.
const createParams = [
    {
        name: 'Draft Campaign 1',
        budget: 1,
        budgetType: 'lifetime',
        startDate: '20201001',
        endDate: '20201031',
        bidOptimization: true,
        bidMultiplier: 0,
        portfolioId: 0,
        creative: {
            brandName: 'string',
            brandLogoAssetID: 'string',
            brandLogoUrl: 'https://www.google.com',
            headline: 'string',
            asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
            shouldOptimizeAsins: false,
        },
        landingPage: {
            asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
            url: 'https://www.google.com',
        },
        keywords: [
            {
                keywordText: 'string1',
                matchType: 'broad',
                bid: 1,
            },
        ],
        negativeKeywords: [
            {
                keywordText: 'string2',
                matchType: 'negativeExact',
            },
        ],
    },
];
sponsoredBrandsDraftsOperation.createDraftCampaigns(createParams);
// Gets a draft campaign specified by identifier.
sponsoredBrandsDraftsOperation.getDraftCampaign(123);
// Gets a draft campaign specified by identifier.
const listDraftCampaignsParam = {
    startIndex: 1,
    count: 10,
    name: 'Draft Campaign 1',
};
sponsoredBrandsDraftsOperation.listDraftCampaigns(listDraftCampaignsParam);
// Submits one or more existing draft campaigns to the moderation approval queue.
sponsoredBrandsDraftsOperation.submitDraftCampaigns([123]);
// Updates one or more draft campaigns.
const updateParams = [
    {
        name: 'Draft Campaign 1',
        budget: 1,
        budgetType: 'lifetime',
        startDate: '20201001',
        endDate: '20201031',
        bidOptimization: true,
        bidMultiplier: 0,
        portfolioId: 0,
        creative: {
            brandName: 'string',
            brandLogoAssetID: 'string',
            brandLogoUrl: 'https://www.google.com',
            headline: 'string',
            asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
            shouldOptimizeAsins: false,
        },
        landingPage: {
            asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
            url: 'https://www.google.com',
        },
        keywords: [
            {
                keywordText: 'string1',
                matchType: 'broad',
                bid: 1,
            },
        ],
        negativeKeywords: [
            {
                keywordText: 'string2',
                matchType: 'negativeExact',
            },
        ],
    },
];
sponsoredBrandsDraftsOperation.updateDraftCampaigns(updateParams);
//# sourceMappingURL=crud-draft.js.map