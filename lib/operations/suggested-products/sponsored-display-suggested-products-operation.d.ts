import { Operation } from '../operation';
import { ListSuggestedProductsParams, ProductReadinessRequest } from './types';
export declare class SponsoredDisplaySuggestedProductsOperation extends Operation {
    protected resource: string;
    /**
     * Gets a list of all products eligible for advertising using the specified tactic type. Each product in the list includes an associated readiness status.
     *
     * @param params -
     * @returns
     */
    listSuggestedProducts(params: ListSuggestedProductsParams): Promise<{
        readinessStatus: "HIGH" | "MEDIUM" | "LOW" | "NOT_APPLICABLE";
        asins: string[];
    }[]>;
    /**
     * Gets the readiness status for a specified list of up to 100 products.
     *
     * @param params -
     * @returns
     */
    getProductReadiness(params: ProductReadinessRequest): Promise<{
        asin: string;
        readinessStatus: "HIGH" | "MEDIUM" | "LOW" | "NOT_APPLICABLE";
    }[]>;
}
