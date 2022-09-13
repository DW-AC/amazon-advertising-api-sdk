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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./operations/operation"), exports);
__exportStar(require("./operations/operation-provider"), exports);
__exportStar(require("./operations/ad-groups/base-ad-group-operation"), exports);
__exportStar(require("./operations/ad-groups/sponsored-brands-ad-group-operation"), exports);
__exportStar(require("./operations/ad-groups/sponsored-display-ad-group-operation"), exports);
__exportStar(require("./operations/ad-groups/sponsored-products-ad-group-operation"), exports);
__exportStar(require("./operations/bidding/sponsored-products-bid-recommendation-operation"), exports);
__exportStar(require("./operations/campaigns/sponsored-brands-campaign-operation"), exports);
__exportStar(require("./operations/campaigns/sponsored-display-campaign-operation"), exports);
__exportStar(require("./operations/campaigns/sponsored-products-campaign-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-brands-keyword-recommendations-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-brands-keywords-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-brands-negative-keywords-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-products-ad-group-keywords-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-products-ad-group-negative-keywords-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-products-campaign-negative-keywords-operation"), exports);
__exportStar(require("./operations/keywords/sponsored-products-suggested-keywords-operation"), exports);
__exportStar(require("./operations/media/sponsored-brands-media-operation"), exports);
__exportStar(require("./operations/negative-targeting/sponsored-brands-negative-targeting-operation"), exports);
__exportStar(require("./operations/negative-targeting/sponsored-display-negative-targeting-operation"), exports);
__exportStar(require("./operations/negative-targeting/sponsored-products-negative-targeting-operation"), exports);
__exportStar(require("./operations/portfolios/portfolio-operation"), exports);
__exportStar(require("./operations/product-ads/sponsored-display-product-ads-operation"), exports);
__exportStar(require("./operations/product-ads/sponsored-products-product-ads-operation"), exports);
__exportStar(require("./operations/product-targeting/sponsored-brands-product-targeting-operation"), exports);
__exportStar(require("./operations/product-targeting/sponsored-products-product-targeting-operation"), exports);
__exportStar(require("./operations/profiles/profile-operation"), exports);
__exportStar(require("./operations/test-accounts/test-account-operation"), exports);
__exportStar(require("./operations/recommendations/sponsored-brands-bid-recommendations-operation"), exports);
__exportStar(require("./operations/recommendations/sponsored-brands-targeting-recommendations-operation"), exports);
__exportStar(require("./operations/reports/sponsored-brands/sponsored-brands-report-operation"), exports);
__exportStar(require("./operations/reports/sponsored-products/sponsored-products-report-operation"), exports);
__exportStar(require("./operations/snapshots/sponsored-products-snapshot-operation"), exports);
__exportStar(require("./operations/drafts/sponsored-brands-drafts-operation"), exports);
__exportStar(require("./operations/snapshots/sponsored-brands-snapshot-operation"), exports);
__exportStar(require("./operations/snapshots/sponsored-display-snapshot-operation"), exports);
__exportStar(require("./operations/stores/sponsored-brands-stores-info-operation"), exports);
__exportStar(require("./operations/suggested-products/sponsored-display-suggested-products-operation"), exports);
__exportStar(require("./operations/amazon-ad-type-uri-prefix"), exports);
__exportStar(require("./operations/ad-groups/types"), exports);
__exportStar(require("./operations/bidding/types"), exports);
__exportStar(require("./operations/bidding/campaign-bidding-adjustments-predicate"), exports);
__exportStar(require("./operations/bidding/campaign-bidding-strategy"), exports);
__exportStar(require("./operations/commons/types"), exports);
__exportStar(require("./operations/campaigns/types"), exports);
__exportStar(require("./operations/drafts/types"), exports);
__exportStar(require("./operations/keywords/types"), exports);
__exportStar(require("./operations/media/types"), exports);
__exportStar(require("./operations/negative-targeting/types"), exports);
__exportStar(require("./operations/portfolios/types"), exports);
__exportStar(require("./operations/product-ads/types"), exports);
__exportStar(require("./operations/product-targeting/types"), exports);
__exportStar(require("./operations/profiles/types"), exports);
__exportStar(require("./operations/recommendations/types"), exports);
__exportStar(require("./operations/reports/index"), exports);
__exportStar(require("./operations/snapshots/types"), exports);
__exportStar(require("./operations/stores/types"), exports);
__exportStar(require("./operations/suggested-products/types"), exports);
__exportStar(require("./amazon-advertising"), exports);
__exportStar(require("./decorators"), exports);
__exportStar(require("./errors"), exports);
__exportStar(require("./gunzip"), exports);
__exportStar(require("./http-client"), exports);
__exportStar(require("./maketplace"), exports);
__exportStar(require("./o-auth-client"), exports);
//# sourceMappingURL=index.js.map