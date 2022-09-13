import * as t from 'io-ts';
export declare const BrandEntityId: t.StringC;
export declare type BrandEntityId = t.TypeOf<typeof BrandEntityId>;
export declare const StorePageInfo: t.ExactC<t.TypeC<{
    /**
     * The ID of the store.
     */
    storePageId: t.StringC;
    /**
     * The store url page. Can be used for SB campaigns as a possible landing page.
     */
    storePageUrl: t.StringC;
    /**
     * The page name. Defaults to Home for the main store page.
     */
    storePageName: t.StringC;
}>>;
export declare type StorePageInfo = t.TypeOf<typeof StorePageInfo>;
export declare const StoreInfoResponse: t.ExactC<t.TypeC<{
    /**
     * The response code.
     */
    code: t.StringC;
    /**
     * The entity ID.
     */
    entityId: t.StringC;
    /**
     * The name of the store.
     */
    storeName: t.StringC;
    /**
     * ID used in campaign creation and asset registration.
     */
    brandEntityId: t.StringC;
    /**
     * The information related to the store.
     */
    storePageInfo: t.ArrayC<t.ExactC<t.TypeC<{
        /**
         * The ID of the store.
         */
        storePageId: t.StringC;
        /**
         * The store url page. Can be used for SB campaigns as a possible landing page.
         */
        storePageUrl: t.StringC;
        /**
         * The page name. Defaults to Home for the main store page.
         */
        storePageName: t.StringC;
    }>>>;
}>>;
export declare type StoreInfoResponse = t.TypeOf<typeof StoreInfoResponse>;
