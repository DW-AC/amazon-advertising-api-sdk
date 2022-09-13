import { Operation } from '../operation';
import { SponsoredBrandsProductRecommendationsRequest, SponsoredBrandsCategoryRecommendationsRequest, SponsoredBrandsBrandRecommendationsRequest } from './types';
export declare class SponsoredBrandsTargetingRecommendationsOperation extends Operation {
    protected resource: string;
    /**
     * Gets a list of recommended products for targeting.
     *
     * @param params -
     * @returns
     */
    getProductRecommendations(params: SponsoredBrandsProductRecommendationsRequest): Promise<{
        nextToken: string;
        recommendedProducts: {
            recommendedTargetAsin: string;
        }[];
    }>;
    /**
     * Gets a list of recommended categories for targeting.
     *
     * @param params -
     * @returns
     */
    getCategoryRecommendations(params: SponsoredBrandsCategoryRecommendationsRequest): Promise<{
        categoryRecommendationResults: {
            id: number;
            name: string;
            isTargetable: boolean;
            path: string;
        }[];
    }>;
    /**
     * Gets a list of brand suggestions.
     *
     * @param params -
     * @returns
     */
    getBrandRecommendations(params: SponsoredBrandsBrandRecommendationsRequest): Promise<{
        brandRecommendationResults: {
            id: number;
            name: string;
        }[];
    }>;
}
