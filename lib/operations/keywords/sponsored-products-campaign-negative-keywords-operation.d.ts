import { Operation } from '../operation';
import { KeywordId, CreateCampaignNegativeKeywordsParam, UpdateCampaignNegativeKeywordsParam, ListCampaignNegativeKeywordsParam } from './types';
export declare class SponsoredProductsCampaignNegativeKeywordsOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves a campaign negative keyword by ID.
     * Note that this call returns the minimal set of keyword fields, but is more efficient than getCampaignNegativeKeywordEx.
     * Not available for vendors.
     *
     * @param keywordId -
     * @returns
     */
    getCampaignNegativeKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        campaignId: number;
        state: "enabled" | "deleted";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    }>;
    /**
     * Retrieves a campaign negative keyword and its extended fields by ID.
     * Note that this call returns the complete set of keyword fields (including serving status and other read-only fields), but is less efficient than getCampaignNegativeKeyword.
     * Not available for vendors.
     *
     * @param keywordId -
     * @returns
     */
    getCampaignNegativeKeywordExtended(keywordId: KeywordId): Promise<{
        keywordId: number;
        campaignId: number;
        state: "enabled" | "deleted";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    }>;
    /**
     * Creates one or more campaign negative keywords.
     * Successfully created keywords will be assigned a unique keywordId.
     * Not available for vendors.
     *
     * @param keywords -
     * @returns
     */
    createCampaignNegativeKeywords(keywords: CreateCampaignNegativeKeywordsParam[]): Promise<({
        keywordId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Updates one or more campaign negative keywords.
     * Keywords are identified using their keywordId.
     * Not available for vendors.
     *
     * @param keywords -
     * @returns
     */
    updateCampaignNegativeKeywords(keywords: UpdateCampaignNegativeKeywordsParam[]): Promise<({
        keywordId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Sets the campaign negative keyword status to deleted.
     * This same operation can be performed via an update to the status, but is included for completeness.
     * Not available for vendors.
     *
     * Note: While ad group-level keywords (both biddable and negative) support paused and archived status, campaign negative keywords only support enabled or deleted status.
     * Deleted status indicates permanent removal of the campaign negative keyword.
     * Retrieving a deleted entity by ID will result in a 404 error.
     *
     * @param keywordId -
     * @returns
     */
    archiveCampaignNegativeKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    }>;
    /**
     * Retrieves a list of campaign negative keywords satisfying optional criteria.
     * Not available for vendors.
     *
     * @param params -
     * @returns
     */
    listCampaignNegativeKeywords(params?: ListCampaignNegativeKeywordsParam): Promise<{
        keywordId: number;
        campaignId: number;
        state: "enabled" | "deleted";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    }[]>;
    /**
     * Retrieves a list of campaign negative keywords with extended fields satisfying optional criteria.
     * Not available for vendors.
     *
     * @param params -
     * @returns
     */
    listCampaignNegativeKeywordsExtended(params?: ListCampaignNegativeKeywordsParam): Promise<({
        keywordId: number;
        campaignId: number;
        state: "enabled" | "deleted";
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_STATUS_LIVE" | "TARGETING_CLAUSE_POLICING_SUSPENDED";
    })[]>;
}
