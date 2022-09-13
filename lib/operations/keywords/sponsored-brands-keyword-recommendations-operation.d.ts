import { Operation } from '../operation';
import { SponsoredBrandsKeywordRecommendationParams } from './types';
export declare class SponsoredBrandsKeywordRecommendationsOperation extends Operation {
    protected resource: string;
    /**
     * Gets an array of keyword recommendation objects for a set of ASINs included either on a landing page or a Store page.
     * Vendors may also specify a custom landing page.
     *
     * @param params -
     * @returns
     */
    getKeywordRecommendations(params: SponsoredBrandsKeywordRecommendationParams): Promise<{
        recommendationId: string;
        value: string;
        matchType: "broad" | "exact" | "phrase";
    }[]>;
}
