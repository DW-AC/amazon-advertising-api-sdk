import { HttpClient } from '../http-client';
export declare type OperationParameterValues = any;
export interface OperationParameter {
    [key: string]: OperationParameterValues;
}
export declare type WithOperationParameterKeys<T extends OperationParameter> = {
    [K in keyof T]: OperationParameterValues;
};
export declare type OperationParameterTransformer<T> = (originalQuery: T, clonedQuery: WithOperationParameterKeys<T>) => WithOperationParameterKeys<T>;
export declare class Operation {
    protected client: HttpClient;
    protected version: string;
    protected resource: string;
    constructor(client: HttpClient);
    static create<T extends typeof Operation>(this: T, httpClient: HttpClient): InstanceType<T>;
    protected query<T extends OperationParameter>(resource: string, originalQuery?: T, transform?: OperationParameterTransformer<T>): string;
    private hasKey;
    protected paramsFilterTransformerReal<T>(params: T, keys?: string[]): WithOperationParameterKeys<T>;
    protected paramsFilterTransformer<T>(resource: string, params?: Partial<T>): string;
}
