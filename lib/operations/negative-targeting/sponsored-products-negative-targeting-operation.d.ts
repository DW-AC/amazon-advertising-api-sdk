import { Operation } from '../operation';
import { NegativeTargetId, CreateNegativeTargetingClausesParams, ListNegativeTargetingClausesParams, UpdateNegativeTargetingClausesParams } from './types';
export declare class SponsoredProductsNegativeTargetingOperation extends Operation {
    protected resource: string;
    /**
     * Get a specific negative targeting clause by targetId.
     *
     * @param targetId -
     * @returns
     */
    getNegativeTargetingClause(targetId: NegativeTargetId): Promise<{
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "manual" | "auto";
    }>;
    /**
     * Retrieve a negative targeting clause with additional attributes using a specific target ID.
     *
     * @param targetId -
     * @returns
     */
    getNegativeTargetingClauseExtended(targetId: NegativeTargetId): Promise<{
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "manual" | "auto";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    }>;
    /**
     * Create negative targeting clauses at the campaign level.
     *
     * @param params -
     * @returns
     */
    createNegativeTargetingClauses(params: CreateNegativeTargetingClausesParams[]): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Retrieves a list of negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClauses(params?: ListNegativeTargetingClausesParams): Promise<{
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "manual" | "auto";
    }[]>;
    /**
     * Retrieve a list of targeting clauses with extended properties.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClausesExtended(params?: ListNegativeTargetingClausesParams): Promise<({
        targetId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expression: ({
            type: "asinCategorySameAs" | "asinBrandSameAs" | "asinPriceLessThan" | "asinPriceBetween" | "asinPriceGreaterThan" | "asinReviewRatingLessThan" | "asinReviewRatingBetween" | "asinReviewRatingGreaterThan" | "asinSameAs" | "queryBroadRelMatches" | "queryHighRelMatches" | "asinSubstituteRelated" | "asinAccessoryRelated" | "asinIsPrimeShippingEligible" | "asinAgeRangeSameAs" | "asinGenreSameAs";
        } & {
            value?: string | undefined;
        })[];
        expressionType: "manual" | "auto";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    })[]>;
    /**
     * Archive negative targeting clauses.
     *
     * @param targetId -
     * @returns
     */
    archiveNegativeTargetingClause(targetId: NegativeTargetId): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Update negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    updateNegativeTargetingClauses(params: UpdateNegativeTargetingClausesParams[]): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
}
