import { Operation } from '../operation';
import { SnapshotResponse, RequestSnapshotParams, SnapshotId, SponsoredProductsRecordType, SuccessSnapshotResponse, SnapshotResultType } from './types';
export declare class SponsoredProductsSnapshotOperation extends Operation {
    protected resource: string;
    /**
     * Downloads the snapshot corresponding to the success snapshot response specified
     *
     * @param snapshot -
     * @returns
     */
    downloadSnapshot<T extends SnapshotResultType[]>(snapshot: SuccessSnapshotResponse): Promise<T>;
    /**
     * Request a file-based snapshot of all entities of the specified type in the account satisfying the filtering criteria
     *
     * @param recordType -
     * @param params -
     * @returns
     */
    requestSnapshot(recordType: SponsoredProductsRecordType, params: RequestSnapshotParams): Promise<SnapshotResponse>;
    /**
     * Retrieve status, metadata and location of previously requested snapshot
     *
     * @param id -
     * @returns
     */
    getSnapshot(id: SnapshotId): Promise<SnapshotResponse>;
}
