"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsored_display_product_ads_operation_1 = require("../../../src/operations/product-ads/sponsored-display-product-ads-operation");
const src_1 = require("../../../src");
const http_client_factory_1 = require("../../http-client-factory");
describe('SponsoredDisplayProductAdsOperation', () => {
    const client = new src_1.HttpClient(http_client_factory_1.SANDBOX_URI, { ...http_client_factory_1.auth, scope: 2973802954634317 }, true);
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_display_product_ads_operation_1.SponsoredDisplayProductAdsOperation);
    const CAMPAIGN_ID = 169989740510339;
    const AD_GROUP_ID = 164444192239500;
    const PRODUCT_ADS_ID = 264577793668550;
    const ASIN = 'B07663Z46Z';
    describe('createProductAds', () => {
        it(`should creates one or more product ads`, async () => {
            const params = [
                {
                    campaignId: CAMPAIGN_ID,
                    adGroupId: AD_GROUP_ID,
                    state: 'enabled',
                    asin: ASIN,
                },
            ];
            const [res] = await operation.createProductAds(params);
            expect(res.code).toBe('SUCCESS');
        });
    });
    describe('getProductAd', () => {
        it(`should retrieve a product ad by ID`, async () => {
            const res = await operation.getProductAd(PRODUCT_ADS_ID);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.adId).toEqual(PRODUCT_ADS_ID);
        });
    });
    describe('getProductAdExtended', () => {
        it(`should retrieve a product ad and its extended fields by ID`, async () => {
            const res = await operation.getProductAdExtended(PRODUCT_ADS_ID);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.adId).toEqual(PRODUCT_ADS_ID);
        });
    });
    describe('updateProductAds', () => {
        it(`should updates one or more product ads`, async () => {
            const params = [
                {
                    adId: PRODUCT_ADS_ID,
                    state: 'paused',
                },
            ];
            const res = await operation.updateProductAds(params);
            expect(Array.isArray(res)).toBeTruthy();
        });
    });
    describe('listProductAds', () => {
        it(`should retrieve a list of product ads`, async () => {
            const [res] = await operation.listProductAds();
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.adId).toEqual(PRODUCT_ADS_ID);
        });
        it(`should retrieve a list of product ads satisfying optional criteria`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                campaignIdFilter: [CAMPAIGN_ID],
                adGroupIdFilter: [AD_GROUP_ID],
                adIdFilter: [PRODUCT_ADS_ID],
            };
            const [res] = await operation.listProductAds(params);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.adId).toEqual(PRODUCT_ADS_ID);
        });
    });
    describe('listProductAdsExtended', () => {
        it(`should retrieve a list of product ads `, async () => {
            const [res] = await operation.listProductAdsExtended();
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.adId).toEqual(PRODUCT_ADS_ID);
        });
        it(`should retrieve a list of product ads satisfying optional criteria`, async () => {
            const params = {
                startIndex: 0,
                count: 1,
                campaignIdFilter: [CAMPAIGN_ID],
                adGroupIdFilter: [AD_GROUP_ID],
                adIdFilter: [PRODUCT_ADS_ID],
            };
            const [res] = await operation.listProductAdsExtended(params);
            expect(res.campaignId).toEqual(CAMPAIGN_ID);
            expect(res.adGroupId).toEqual(AD_GROUP_ID);
            expect(res.adId).toEqual(PRODUCT_ADS_ID);
        });
    });
    describe('archiveProductAd', () => {
        it(`should set the product ad status to archived`, async () => {
            const res = await operation.archiveProductAd(PRODUCT_ADS_ID);
            expect(res.code).toBe('SUCCESS');
            expect(res.adId).toBe(PRODUCT_ADS_ID);
        });
    });
});
//# sourceMappingURL=sponsored-display-product-ads-operation.test.js.map