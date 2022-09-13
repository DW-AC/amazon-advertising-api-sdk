import { Operation } from '../operation';
import { SponsoredBrandsListTargetsRequest, SponsoredBrandsUpdateTargetsRequest, SponsoredBrandsCreateTargetsRequest, TargetId, SponsoredBrandsBatchGetTargetsRequest } from './types';
export declare class SponsoredBrandsProductTargetingOperation extends Operation {
    protected targetResource: string;
    protected negativeTargetResource: string;
    /**
     * Gets a list of product targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
     *
     * @param params -
     * @returns
     */
    listTargets(params: SponsoredBrandsListTargetsRequest): Promise<{
        nextToken: string;
        targets: {
            targetId: number;
            adGroupId: number;
            campaignId: number;
            expressions: {
                type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                value: string;
            };
            resolvedExpressions: {
                type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                value: string;
            };
            state: "enabled" | "paused" | "archived" | "pending" | "draft";
            bid: number;
        }[];
    }>;
    /**
     * Updates one or more targets.
     *
     * @param params -
     * @returns
     */
    updateTargets(params: SponsoredBrandsUpdateTargetsRequest[]): Promise<{
        updateTargetSuccessResults: {
            targetId: number;
            targetRequestIndex: number;
        }[];
        updateTargetErrorResults: {
            code: string;
            details: string;
            targetId: number;
            targetRequestIndex: number;
        }[];
    }>;
    /**
     * Create one or more new targets.
     *
     * @param params -
     * @returns
     */
    createTargets(params: SponsoredBrandsCreateTargetsRequest): Promise<{
        createTargetSuccessResults: {
            targetRequestIndex: number;
            targetId: number;
        }[];
        createTargetErrorResults: {
            code: string;
            details: string;
            targetId: number;
            targetRequestIndex: number;
        }[];
    }>;
    /**
     * Gets a target specified by identifier.
     *
     * @param targetId -
     * @returns
     */
    getTarget(targetId: TargetId): Promise<{
        targetId: number;
        adGroupId: number;
        campaignId: number;
        expressions: {
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
            value: string;
        };
        resolvedExpressions: {
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
            value: string;
        };
        state: "enabled" | "paused" | "archived" | "pending" | "draft";
        bid: number;
    }>;
    /**
     * Archives a target specified by identifier. Note that archiving is permanent, and once a target has been archived it can't be made active again.
     *
     * @param targetId -
     * @returns
     */
    archiveTarget(targetId: TargetId): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Gets one or more product targets specified by identifiers.
     *
     * @param params -
     * @returns
     */
    batchGetTargets(params: SponsoredBrandsBatchGetTargetsRequest): Promise<{
        batchGetTargetSuccessResults: {
            targetingClause: {
                targetId: number;
                adGroupId: number;
                campaignId: number;
                expressions: {
                    type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                    value: string;
                };
                resolvedExpressions: {
                    type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                    value: string;
                };
                state: "enabled" | "paused" | "archived" | "pending" | "draft";
                bid: number;
            };
            targetRequestIndex: number;
        }[];
        batchGetTargetErrorResults: {
            code: string;
            details: string;
            targetId: number;
            targetRequestIndex: number;
        }[];
    }>;
}
