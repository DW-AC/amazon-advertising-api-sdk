import { Operation } from '../operation';
import { ListSponsoredBrandsKeywordParams, CreateSponsoredBrandsKeywordParams, UpdateSponsoredBrandsKeywordParams, KeywordId } from './types';
export declare class SponsoredBrandsKeywordsOperation extends Operation {
    protected resource: string;
    /**
     * Gets an array of keywords, filtered by optional criteria
     *
     * @param params -
     * @returns
     */
    listKeywords(params?: ListSponsoredBrandsKeywordParams): Promise<{
        keywordId: number;
        adGroupId: number;
        campaignId: number;
        keywordText: string;
        matchType: "exact" | "broad" | "phrase";
        state: "paused" | "pending" | "enabled" | "archived" | "draft";
        bid: number;
    }[]>;
    /**
     * Updates one or more keywords.
     * Keywords submitted for update have state set to pending while under moderation review.
     * Note that moderation may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    updateKeywords(params: UpdateSponsoredBrandsKeywordParams[]): Promise<({
        keywordId: number;
        code: string;
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Creates one or more keywords.
     * Note that state can't be set at keyword creation.
     * Keywords submitted for creation have state set to pending while under moderation review.
     * Note that moderation review may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    createKeywords(params: CreateSponsoredBrandsKeywordParams[]): Promise<({
        keywordId: number;
        code: string;
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Gets a keyword specified by identifier.
     *
     * @param keywordId -
     * @returns
     */
    getKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        adGroupId: number;
        campaignId: number;
        keywordText: string;
        matchType: "exact" | "broad" | "phrase";
        state: "paused" | "pending" | "enabled" | "archived" | "draft";
        bid: number;
    }>;
    /**
     * Archives a keyword specified by identifier.
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone. See Developer Notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        code: string;
    } & {
        details?: string | undefined;
    }>;
}
