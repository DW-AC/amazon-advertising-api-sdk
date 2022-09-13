import { Operation } from '../operation';
import { CreateTargetingClausesParams, TargetId, ListTargetingClausesParams, UpdateTargetingClausesParams, ProductRecommendationRequest, CategoryId, GetBrandRecommendationsParams } from './types';
export declare class SponsoredProductsProductTargetingOperation extends Operation {
    protected targetResource: string;
    protected negativeTargetsResource: string;
    /**
     * Retrieve a targeting clause with a specific target ID.
     *
     * @param targetId -
     * @returns
     */
    getTargetingClause(targetId: TargetId): Promise<{
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "auto" | "manual";
    } & {
        bid?: number | undefined;
    }>;
    /**
     * Retrieve a targeting clause with additional attributes using a specific target ID.
     *
     * @param targetId -
     * @returns
     */
    getTargetingClauseExtended(targetId: TargetId): Promise<{
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "auto" | "manual";
    } & {
        bid?: number | undefined;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    }>;
    /**
     * Retrieves a list of targeting clauses.
     *
     * @param params -
     * @returns
     */
    listTargetingClauses(params?: ListTargetingClausesParams): Promise<({
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "auto" | "manual";
    } & {
        bid?: number | undefined;
    })[]>;
    /**
     * Retrieve a list of targeting clauses with extended properties.
     *
     * @param params -
     * @returns
     */
    listTargetingClausesExtended(params?: ListTargetingClausesParams): Promise<({
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "auto" | "manual";
    } & {
        bid?: number | undefined;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    })[]>;
    /**
     * Creates one or more targeting expressions.
     *
     * @param params -
     * @returns
     */
    createTargetingClauses(params: CreateTargetingClausesParams[]): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Update one or more targeting clauses.
     *
     * @param params -
     * @returns
     */
    updateTargetingClauses(params: UpdateTargetingClausesParams[]): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Set the status of targeting clauses to archived.
     * This same operation can also be performed via an update (PUT method), but is included for completeness.
     * Archived entities cannot be made active again.
     *
     * @param targetId -
     * @returns
     */
    archiveTargetingClause(targetId: TargetId): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Generate list of recommended products to target, based on the ASIN that is input.
     * Successful response will be a list of recommended ASINs to target.
     *
     * @param params -
     * @returns
     */
    createTargetRecommendations(params: ProductRecommendationRequest): Promise<{
        totalResultCount: number;
        recommendedProducts: {
            recommendedTargetAsin: string;
        }[];
    }>;
    /**
     * Gets the list of targeting categories.
     *
     * @param asins -
     * @returns
     */
    getTargetingCategories(asins: string[]): Promise<{
        id: number;
        name: string;
        isTargetable: boolean;
        path: string;
    }[]>;
    /**
     * Get refinements for a single category.
     * Categories and Refinements are determined based on marketplaceId of the profile in the request.
     * Note that refinements will differ between marketplaces.
     *
     * @param categoryId -
     * @returns
     */
    getRefinementsForCategory(categoryId: CategoryId): Promise<{
        categoryId: number;
        ageRanges: {
            id: number;
            name: string;
        }[];
        brands: {
            id: number;
            name: string;
        }[];
    }>;
    /**
     * Get recommended brands for Sponsored Products.
     * Only one parameter (keyword or categoryId) per request is allowed.
     *
     * @param params -
     * @returns
     */
    getBrandRecommendations(params: GetBrandRecommendationsParams): Promise<{
        id: number;
        name: string;
    }>;
}
