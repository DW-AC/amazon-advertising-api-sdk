import { HttpClient } from '../http-client';
import { Operation } from './operation';
export declare class OperationProvider {
    private client;
    constructor(client: HttpClient);
    create<T extends Operation>(ops: new (client: HttpClient) => T): T;
}
