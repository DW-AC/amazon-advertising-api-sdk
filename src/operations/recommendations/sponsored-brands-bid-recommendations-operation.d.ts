import { Operation } from '../operation';
import { SponsoredBrandsBidsRecommendationRequest } from './types';
export declare class SponsoredBrandsBidRecommendationsOperation extends Operation {
    protected resource: string;
    /**
     * Get a list of bid recommendation objects for a specified list of keywords or products.
     *
     * @param params -
     * @returns
     */
    getBidRecommendations(params: SponsoredBrandsBidsRecommendationRequest): Promise<{
        keywordsBidsRecommendationSuccessResults: {
            recommendationId: string;
            recommendedBid: {
                rangeStart: number;
                rangeEnd: number;
                recommended: number;
            };
            keyword: {
                matchType: "exact" | "broad" | "phrase";
                keywordText: string;
            };
            keywordIndex: number;
        }[];
        keywordsBidsRecommendationErrorResults: {
            code: string;
            details: string;
            keyword: {
                value: string;
                type: "exact" | "broad" | "phrase";
            };
            keywordIndex: number;
        }[];
        targetsBidsRecommendationSuccessResults: {
            recommendationId: string;
            recommendedBid: {
                rangeStart: number;
                rangeEnd: number;
                recommended: number;
            };
            targets: {
                type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                value: string;
            }[];
            targetsIndex: number;
        }[];
        targetsBidsRecommendationErrorResults: {
            code: string;
            details: string;
            targets: {
                type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                value: string;
            }[];
            targetsIndex: number;
        }[];
    }>;
}
