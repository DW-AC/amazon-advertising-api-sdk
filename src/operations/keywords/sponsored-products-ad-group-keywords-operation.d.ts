import { Operation } from '../operation';
import { KeywordId, CreateKeywordsParam, UpdateKeywordsParam, ListBiddableKeywordsParam, ListBiddableKeywordsExtendedParam } from './types';
export declare class SponsoredProductsAdGroupKeywordsOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves a keyword by ID.
     * Note that this call returns the minimal set of keyword fields, but is more efficient than getBiddableKeywordEx
     *
     * @param keywordId -
     * @returns
     */
    getBiddableKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        keywordText: string;
        matchType: "exact" | "broad" | "phrase";
    } & {
        bid?: number | undefined;
    }>;
    /**
     * Retrieves a keyword and its extended fields by ID.
     * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getBiddableKeyword.
     * There is no extended keywords interface for Sponsored Brands.
     *
     * @param keywordId -
     * @returns
     */
    getBiddableKeywordExtended(keywordId: KeywordId): Promise<{
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        keywordText: string;
        matchType: "exact" | "broad" | "phrase";
    } & {
        bid?: number | undefined;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "CAMPAIGN_INCOMPLETE" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    }>;
    /**
     * Creates one or more keywords.
     * Successfully created keywords will be assigned a unique keywordId.
     *
     * @param keywords -
     * @returns
     */
    createKeywords(keywords: CreateKeywordsParam[]): Promise<({
        keywordId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Updates one or more keywords.
     * While keywords are in a pending state you can only update the bid amount, or archive them. You cannot change the state from pending
     *
     * @param keywords -
     * @returns
     */
    updateKeywords(keywords: UpdateKeywordsParam[]): Promise<({
        keywordId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Sets the keyword status to archived.
     * This same operation can be performed via an update, but is included for completeness.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveBiddableKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    }>;
    /**
     * Retrieves a list of keywords satisfying optional criteria for Sponsored Products.
     * List keyword operations are not supported for Sponsored Brands.
     *
     * @param params -
     * @returns
     */
    listBiddableKeywords(params?: ListBiddableKeywordsParam): Promise<({
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        keywordText: string;
        matchType: "exact" | "broad" | "phrase";
    } & {
        bid?: number | undefined;
    })[]>;
    /**
     * Retrieves a list of keywords and its extended fields satisfying optional criteria for Sponsored Products.
     * List keyword operations are not supported for Sponsored Brands.
     *
     * @param params -
     * @returns
     */
    listBiddableKeywordsExtended(params?: ListBiddableKeywordsExtendedParam): Promise<({
        keywordId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
        keywordText: string;
        matchType: "exact" | "broad" | "phrase";
    } & {
        bid?: number | undefined;
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "CAMPAIGN_INCOMPLETE" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    })[]>;
}
