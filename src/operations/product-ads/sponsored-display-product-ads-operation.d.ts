import { Operation } from '../operation';
import { CreateProductAdsParams, AdId, UpdateProductAdsParams, ListProductAdsParams } from './types';
export declare class SponsoredDisplayProductAdsOperation extends Operation {
    protected resource: string;
    /**
     * Gets a requested product ad.
     * Note that the ProductAd object is designed for performance, and includes a small set of commonly used fields to reduce size.
     * If the extended set of fields is required, use a product ad operations that returns the ProductAdResponseEx object.
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
     * Gets a list of product ads with extended fields.
     * Gets an array of ProductAdExtended objects for a set of requested ad groups.
     * The ProductAdExtended object includes the extended set of available fields.
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
     * This operation is equivalent to an update operation that sets the status field to 'archived'.
     * Note that setting the status field to 'archived' is permanent and can't be undone.
     * See Developer Notes for more information.
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
     * Gets a list of product ads.
     * Note that the ProductAd object is designed for performance, and includes a small set of commonly used fields to reduce size.
     * If the extended set of fields is required, use a product ad operation that returns the ProductAdExtended object.
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
     * Gets a list of product ads with extended fields.
     * The ProductAdExtended object includes the extended set of available fields.
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
