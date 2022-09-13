import { Operation } from '../operation';
import { GetAdGroupSuggestedKeywordsParams, GetAdGroupSuggestedKeywordsExtendedParams } from './types';
import { AdGroupId } from '../ad-groups/types';
export declare class SponsoredProductsSuggestedKeywordsOperation extends Operation {
    private resourcePostfix;
    private adGroupResource;
    private asinResource;
    /**
     * Retrieve suggested keyword data for the specified adGroupId.
     *
     * @param adGroupId -
     * @param params -
     * @returns
     */
    getAdGroupSuggestedKeywords(adGroupId: AdGroupId, params?: GetAdGroupSuggestedKeywordsParams): Promise<{
        adGroupId: number;
        suggestedKeywords: {
            keywordText: string;
            matchType: string;
        }[];
    }>;
    /**
     * Retrieve extended suggested keyword data for the specified adGroupId.
     *
     * @param adGroupId -
     * @param params -
     * @returns
     */
    getAdGroupSuggestedKeywordsExtended(adGroupId: AdGroupId, params?: GetAdGroupSuggestedKeywordsExtendedParams): Promise<({
        adGroupId: number;
        campaignId: number;
        keywordText: string;
        matchType: string;
        state: string;
    } & {
        bid?: number | undefined;
    })[]>;
    /**
     * Provides suggested keywords for specified ASIN.
     * Suggested keywords are ordered by most effective to least effective.
     *
     * @param asinValue -
     * @param maxNumSuggestions -
     * @returns
     */
    getAsinSuggestedKeywords(asinValue: string, maxNumSuggestions?: number): Promise<{
        keywordText: string;
        matchType: string;
    }[]>;
    /**
     * Provides keyword suggestions for specified list of ASINs.
     * Suggested keywords are ordered by most effective to least effective.
     *
     * @param asinValue -
     * @param maxNumSuggestions -
     * @returns
     */
    bulkGetAsinSuggestedKeywords(asinValue: Array<string>, maxNumSuggestions?: number): Promise<{
        keywordText: string;
        matchType: string;
    }[]>;
}
