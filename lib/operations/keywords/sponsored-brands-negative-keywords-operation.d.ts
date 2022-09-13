import { Operation } from '../operation';
import { KeywordId, UpdateSponsoredBrandsNegativeKeywordParams, CreateSponsoredBrandsNegativeKeywordParams } from './types';
export declare class SponsoredBrandsNegativeKeywordsOperation extends Operation {
    protected resource: string;
    /**
     * Updates one or more negative keywords.
     * Negative keywords submitted for update have state set to pending while under moderation review.
     * Note that moderation may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    updateNegativeKeywords(params: UpdateSponsoredBrandsNegativeKeywordParams[]): Promise<({
        keywordId: number;
        code: string;
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Creates one or more negative keywords.
     * Note that bid and state can't be set at negative keyword creation.
     * Negative keywords submitted for creation have state set to pending while under moderation review.
     * Note that moderation review may take up to 72 hours.
     *
     * @param params -
     * @returns
     */
    createNegativeKeywords(params: CreateSponsoredBrandsNegativeKeywordParams[]): Promise<({
        keywordId: number;
        code: string;
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Gets a negative keyword specified by identifier.
     *
     * @param keywordId -
     * @returns
     */
    getNegativeKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        adGroupId: number;
        campaignId: number;
        keywordText: string;
        matchType: "negativeExact" | "negativePhrase";
        state: "enabled" | "archived" | "pending" | "draft";
    }>;
    /**
     * Archives a negative keyword specified by identifier.
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone. See Developer Notes for more information.
     *
     * @param keywordId -
     * @returns
     */
    archiveNegativeKeyword(keywordId: KeywordId): Promise<{
        keywordId: number;
        code: string;
    } & {
        details?: string | undefined;
    }>;
}
