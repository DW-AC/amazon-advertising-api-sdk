import { Operation } from '../operation';
import { AdGroupId, ListAdGroupsParams } from './types';
export declare class SponsoredBrandsAdGroupOperation extends Operation {
    protected resource: string;
    /**
     * Gets an ad group specified by identifier.
     *
     * @param adGroupId -
     * @returns
     */
    getAdGroup(adGroupId: AdGroupId): Promise<{
        campaignId: number;
        adGroupId: number;
        name: string;
        defaultBid: number;
        state: "enabled" | "paused" | "archived";
    }>;
    /**
     * Gets an array of ad groups associated with the client identifier passed in the authorization header, filtered by specified criteria
     *
     * @param params -
     * @returns
     */
    listAdGroups(params?: ListAdGroupsParams): Promise<{
        campaignId: number;
        adGroupId: number;
        name: string;
        defaultBid: number;
        state: "enabled" | "paused" | "archived";
    }[]>;
}
