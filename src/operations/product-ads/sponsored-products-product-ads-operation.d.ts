import { Operation } from '../operation';
import { AdId, CreateProductAdsParams, UpdateProductAdsParams, ListProductAdsParams } from './types';
export declare class SponsoredProductsProductAdsOperation extends Operation {
    protected resource: string;
    /**
     * Retrieves a product ad by ID.
     * Note that this call returns the minimal set of product ad fields, but is more efficient than getProductAdEx.
     *
     * @param adId -
     * @returns
     */
    getProductAd(adId: AdId): Promise<({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        sku: string;
    }) | ({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        asin: string;
    })>;
    /**
     * Retrieves a product ad and its extended fields by ID.
     * Note that this call returns the complete set of product ad fields (including serving status and other read-only fields), but is less efficient than getProductAd.
     *
     * @param adId -
     * @returns
     */
    getProductAdExtended(adId: AdId): Promise<(({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        sku: string;
    }) | ({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        asin: string;
    })) & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "AD_POLICING_SUSPENDED" | "AD_ARCHIVED" | "AD_PAUSED" | "AD_STATUS_LIVE" | "MISSING_DECORATION" | "NOT_BUYABLE";
    }>;
    /**
     * Creates one or more product ads.
     * Successfully created product ads will be assigned a unique adId.
     *
     * @param params -
     * @returns
     */
    createProductAds(params: CreateProductAdsParams[]): Promise<{
        adId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Updates one or more product ads.
     * Product ads are identified using their adId.
     *
     * @param params -
     * @returns
     */
    updateProductAds(params: UpdateProductAdsParams[]): Promise<{
        adId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }[]>;
    /**
     * Sets the product ad status to archived.
     * This same operation can be performed via an update, but is included for completeness.
     * Archived entities cannot be made active again. See developer notes for more information.
     *
     * @param adId -
     * @returns
     */
    archiveProductAd(adId: AdId): Promise<{
        adId?: number | undefined;
        code?: string | undefined;
        details?: string | undefined;
    }>;
    /**
     * Retrieves a list of product ads satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listProductAds(params?: ListProductAdsParams): Promise<(({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        sku: string;
    }) | ({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        asin: string;
    }))[]>;
    /**
     * Retrieves a list of product ads with extended fields satisfying optional criteria.
     *
     * @param params -
     * @returns
     */
    listProductAdsExtended(params?: ListProductAdsParams): Promise<((({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        sku: string;
    }) | ({
        adId: number;
        campaignId: number;
        adGroupId: number;
        state: "paused" | "enabled" | "archived";
    } & {
        asin: string;
    })) & {
        creationDate: Date;
        lastUpdatedDate: Date;
        servingStatus: "CAMPAIGN_ARCHIVED" | "CAMPAIGN_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "CAMPAIGN_OUT_OF_BUDGET" | "ACCOUNT_OUT_OF_BUDGET" | "PORTFOLIO_ENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_PAUSED" | "AD_POLICING_SUSPENDED" | "AD_ARCHIVED" | "AD_PAUSED" | "AD_STATUS_LIVE" | "MISSING_DECORATION" | "NOT_BUYABLE";
    })[]>;
}
