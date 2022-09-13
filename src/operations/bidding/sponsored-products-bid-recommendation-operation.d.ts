import { Operation } from '../operation';
import { AdGroupId } from '../ad-groups/types';
import { KeywordBidRecommendationsData, BidRecommendationRequest } from './types';
import { KeywordId } from '../keywords/types';
export declare class SponsoredProductsBidRecommendationOperation extends Operation {
    protected resource: string;
    /**
     * Request bid recommendations for specified ad group.
     *
     * @param id -
     * @returns AdGroupBidRecommendationsResponse
     */
    getAdGroupBidRecommendations(id: AdGroupId): Promise<{
        adGroupId: number;
        suggestedBid: {
            rangeStart: number;
            rangeEnd: number;
            suggested: number;
        };
    }>;
    /**
     * Request bid recommendations for specified keyword.
     *
     * @param id -
     * @returns KeywordBidRecommendationsResponse
     */
    getKeywordBidRecommendations(id: KeywordId): Promise<{
        adGroupId: number;
        suggestedBid: {
            rangeStart: number;
            rangeEnd: number;
            suggested: number;
        };
    } & {
        keywordId: number;
    }>;
    /**
     * Request bid recommendations for a list of up to 100 keywords.
     *
     * @param params -
     * @returns BidRecommendationsResponse
     */
    createKeywordBidRecommendations(params: KeywordBidRecommendationsData): Promise<{
        adGroupId: number;
        recommendations: (({
            code: "SUCCESS";
            suggestedBid: {
                rangeStart: number;
                rangeEnd: number;
                suggested: number;
            };
        } & {
            keyword: string;
            matchType: "exact" | "broad" | "phrase";
        }) | {
            code: "NOT_FOUND";
        })[];
    }>;
    /**
     * Retrieve a list of bid recommendations for keyword, product, or auto targeting expressions by adGroupId.
     *
     * @param params -
     * @returns BidRecommendationForTargetsResponse
     */
    getBidRecommendations(params: BidRecommendationRequest): Promise<{
        adGroupId: number;
        recommendations: ({
            code: "NOT_FOUND";
        } | {
            suggestedBid: {
                rangeStart: number;
                rangeEnd: number;
                suggested: number;
            };
            expression: {
                value: string;
                type: "queryBroadMatches" | "queryPhraseMatches" | "queryExactMatches" | "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated";
            };
            code: "SUCCESS";
        } | {
            code: "INVALID_ARGUMENT";
        } | {
            code: "INTERNAL_ERROR";
        } | {
            code: "SERVER_IS_BUSY";
        } | {
            code: "UNAUTHORIZED";
        })[];
    }>;
}
