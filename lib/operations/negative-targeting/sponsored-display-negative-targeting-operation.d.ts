import { Operation } from '../operation';
import { NegativeTargetId, CreateSponsoredDisplayNegativeTargetingClausesParams, UpdateSponsoredDisplayNegativeTargetingClausesParams, ListNegativeTargetingClausesParams } from './types';
export declare class SponsoredDisplayNegativeTargetingOperation extends Operation {
    protected resource: string;
    /**
     * Gets a negative targeting clause specified by identifier.
     *
     * @param id -
     * @returns
     */
    getNegativeTargetingClause(id: NegativeTargetId): Promise<{
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expressionType: "manual" | "auto";
        expression: {
            type: "asinBrandSameAs" | "asinSameAs";
            value: string;
        }[];
    } & {
        targetId: number;
    }>;
    /**
     * Gets extended information for a negative targeting clause.
     *
     * @param id -
     * @returns
     */
    getNegativeTargetingClauseExtended(id: NegativeTargetId): Promise<{
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expressionType: "manual" | "auto";
        expression: {
            type: "asinBrandSameAs" | "asinSameAs";
            value: string;
        }[];
    } & {
        targetId: number;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    }>;
    /**
     * Creates one or more negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    createNegativeTargetingClauses(params: CreateSponsoredDisplayNegativeTargetingClausesParams[]): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Updates one or more negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    updateNegativeTargetingClauses(params: UpdateSponsoredDisplayNegativeTargetingClausesParams[]): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Gets a list of negative targeting clauses.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClauses(params?: ListNegativeTargetingClausesParams): Promise<({
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expressionType: "manual" | "auto";
        expression: {
            type: "asinBrandSameAs" | "asinSameAs";
            value: string;
        }[];
    } & {
        targetId: number;
    })[]>;
    /**
     * Gets a list of negative targeting clause objects with extended fields.
     *
     * @param params -
     * @returns
     */
    listNegativeTargetingClausesExtended(params?: ListNegativeTargetingClausesParams): Promise<({
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        expressionType: "manual" | "auto";
        expression: {
            type: "asinBrandSameAs" | "asinSameAs";
            value: string;
        }[];
    } & {
        targetId: number;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    })[]>;
    /**
     * Sets the `state` of a negative targeting clause to `archived`.
     *
     * @param id -
     * @returns
     */
    archiveNegativeTargetingClause(id: NegativeTargetId): Promise<{
        targetId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
}
