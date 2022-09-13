import { Operation } from '../operation';
import { BrandEntityId } from './types';
export declare class SponsoredBrandsStoresInfoOperation extends Operation {
    protected resource: string;
    /**
     * List store information for all registered stores under an advertiser.
     *
     * @returns
     */
    listStores(): Promise<{
        code: string;
        entityId: string;
        storeName: string;
        brandEntityId: string;
        storePageInfo: {
            storePageId: string;
            storePageUrl: string;
            storePageName: string;
        }[];
    }[]>;
    /**
     * Request store information for a given brandEntityId.
     *
     * @param id -
     * @returns
     */
    getStore(id: BrandEntityId): Promise<{
        code: string;
        entityId: string;
        storeName: string;
        brandEntityId: string;
        storePageInfo: {
            storePageId: string;
            storePageUrl: string;
            storePageName: string;
        }[];
    }>;
}
