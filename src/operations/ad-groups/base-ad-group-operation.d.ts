import { Operation } from '../operation';
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix';
import { AdGroupId, ListAdGroupsParams, CreateAdGroupsParams, UpdateAdGroupsParams } from './types';
export declare class BaseAdGroupOperation extends Operation {
    protected uriPrefix: AmazonAdTypeURIPrefix;
    protected resource: string;
    /**
     * Retrieves an ad group by ID.
     * Note that this call returns the minimal set of ad group fields, but is more efficient than getAdGroupExtended
     *
     * @param adGroupId -
     * @returns
     */
    getAdGroup(adGroupId: AdGroupId): Promise<{
        campaignId: number;
        adGroupId: number;
        name: string;
        defaultBid: number;
        state: "paused" | "enabled" | "archived";
    }>;
    /**
     * Retrieves an ad group and its extended fields by ID.
     * Note that this call returns the complete set of ad group fields (including serving status and other read-only fields), but is less efficient than getAdGroup
     *
     * @param adGroupId -
     * @returns
     */
    getAdGroupExtended(adGroupId: AdGroupId): Promise<{
        campaignId: number;
        adGroupId: number;
        name: string;
        defaultBid: number;
        state: "paused" | "enabled" | "archived";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "CAMPAIGN_INCOMPLETE" | "ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_PAUSED" | "AD_GROUP_STATUS_ENABLED" | "AD_POLICING_SUSPENDED" | "PORTFOLIO_PENDING_START_DATE";
    }>;
    /**
     * Creates one or more ad groups. Successfully created ad groups will be assigned a unique adGroupId
     *
     * @param adGroups -
     * @returns
     */
    createAdGroups(adGroups: CreateAdGroupsParams[]): Promise<({
        adGroupId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Updates one or more ad groups. Ad groups are identified using their adGroupId
     *
     * @param adGroups -
     * @returns
     */
    updateAdGroups(adGroups: UpdateAdGroupsParams[]): Promise<({
        adGroupId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    })[]>;
    /**
     * Sets the ad group status to archived.
     * This same operation can be performed via an update, but is included for completeness
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param adGroupId -
     * @returns
     */
    archiveAdGroup(adGroupId: AdGroupId): Promise<{
        adGroupId: number;
        code: "NOT_FOUND" | "SUCCESS" | "INVALID_ARGUMENT";
    } & {
        details?: string | undefined;
    }>;
    /**
     * Retrieves a list of ad groups satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listAdGroups(params?: ListAdGroupsParams): Promise<{
        campaignId: number;
        adGroupId: number;
        name: string;
        defaultBid: number;
        state: "paused" | "enabled" | "archived";
    }[]>;
    /**
     * Retrieves a list of ad groups with extended fields satisfying optional filtering criteria.
     *
     * @param params -
     * @returns
     */
    listAdGroupsExtended(params?: ListAdGroupsParams): Promise<({
        campaignId: number;
        adGroupId: number;
        name: string;
        defaultBid: number;
        state: "paused" | "enabled" | "archived";
    } & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "CAMPAIGN_INCOMPLETE" | "ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_PAUSED" | "AD_GROUP_STATUS_ENABLED" | "AD_POLICING_SUSPENDED" | "PORTFOLIO_PENDING_START_DATE";
    })[]>;
}
