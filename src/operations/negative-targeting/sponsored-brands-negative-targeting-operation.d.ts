import { Operation } from '../operation';
import { SponsoredBrandsListNegativeTargetsRequest, SponsoredBrandsUpdateNegativeTargetsRequest, SponsoredBrandsCreateNegativeTargetsRequest, NegativeTargetId, SponsoredBrandsBatchGetNegativeTargetsRequest } from './types';
export declare class SponsoredBrandsNegativeTargetingOperation extends Operation {
    protected resource: string;
    /**
     * Gets a list of product negative targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
     *
     * @param params -
     * @returns
     */
    listNegativeTargets(params: SponsoredBrandsListNegativeTargetsRequest): Promise<{
        nextToken: string;
        negativeTargets: {
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
            state: "paused" | "pending" | "enabled" | "archived" | "draft";
            bid: number;
        }[];
    }>;
    /**
     * Updates one or more negative targets.
     *
     * @param params -
     * @returns
     */
    updateNegativeTargets(params: SponsoredBrandsUpdateNegativeTargetsRequest): Promise<{
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
     * Create one or more new negative targets.
     *
     * @param params -
     * @returns
     */
    createNegativeTargets(params: SponsoredBrandsCreateNegativeTargetsRequest): Promise<{
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
     * Gets a negative target specified by identifier.
     *
     * @param negativeTargetId -
     * @returns
     */
    getNegativeTarget(negativeTargetId: NegativeTargetId): Promise<{
        targetId: number;
        adGroupId: number;
        campaignId: number;
        expressions: {
            type: "asinBrandSameAs" | "asinSameAs";
            value: string;
        };
        resolvedExpressions: {
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
            value: string;
        };
        state: "paused" | "pending" | "enabled" | "archived" | "draft";
    }>;
    /**
     * Archives a negative target specified by identifier.
     * Note that archiving is permanent, and once a negative target has been archived it can't be made active again.
     *
     * @param negativeTargetId -
     * @returns
     */
    archiveNegativeTarget(negativeTargetId: NegativeTargetId): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Gets one or more product negative targets specified by identifiers.
     *
     * @param params -
     * @returns
     */
    batchGetNegativeTargets(params: SponsoredBrandsBatchGetNegativeTargetsRequest): Promise<{
        batchGetNegativeTargetSuccessResults: {
            targetingClause: {
                targetId: number;
                adGroupId: number;
                campaignId: number;
                state: "ENABLED" | "PAUSED" | "PENDING" | "ARCHIVED" | "DRAFT";
                expressions: {
                    type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                    value: string;
                }[];
                resolvedExpressions: {
                    type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs";
                    value: string;
                }[];
            };
            targetRequestIndex: number;
        }[];
        batchGetNegativeTargetErrorResults: {
            code: string;
            details: string;
            targetId: number;
            targetRequestIndex: number;
        }[];
    }>;
}
