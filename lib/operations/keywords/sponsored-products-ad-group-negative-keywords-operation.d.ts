import { Operation } from '../operation';
import { KeywordId, ListNegativeKeywordsParam, UpdateNegativeKeywordsParam, CreateNegativeKeywordsParam } from './types';
export declare class SponsoredProductsAdGroupNegativeKeywordsOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves a negative keyword by ID.
     * Note that this call returns the minimal set of keyword fields, but is more efficient than getNegativeKeywordEx.
     *
     * @param keywordId -
     * @returns
     */
    getNegativeKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    }>;
    /**
     * Retrieves a negative keyword and its extended fields by ID.
     * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getNegativeKeyword.
     *
     * @param keywordId -
     * @returns
     */
    getNegativeKeywordExtended(keywordId: KeywordId): Promise<{
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    }>;
    /**
     * Creates one or more negative keywords.
     * Successfully created keywords will be assigned a unique keywordId.
     *
     * @param keywords -
     * @returns
     */
    createNegativeKeywords(keywords: CreateNegativeKeywordsParam[]): Promise<({
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        keywordId?: number | undefined;
        description?: string | undefined;
        details?: string | undefined;
    })[]>;
    /**
     * Updates one or more negative keywords.
     * Keywords are identified using their keywordId.
     *
     * @param keywords -
     * @returns
     */
    updateNegativeKeywords(keywords: UpdateNegativeKeywordsParam[]): Promise<({
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        keywordId?: number | undefined;
        description?: string | undefined;
        details?: string | undefined;
    })[]>;
    /**
     * Archive a single negative ad group-level keyword.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveNegativeKeyword(keywordId: KeywordId): Promise<{
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        keywordId?: number | undefined;
        description?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Retrieves a list of negative keywords satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listNegativeKeywords(params?: ListNegativeKeywordsParam): Promise<{
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    }[]>;
    /**
     * Retrieves a list of negative keywords with extended fields satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listNegativeKeywordsExtended(params?: ListNegativeKeywordsParam): Promise<({
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "enabled" | "paused" | "archived";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    })[]>;
}
