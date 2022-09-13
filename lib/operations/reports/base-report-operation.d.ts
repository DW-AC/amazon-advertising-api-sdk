import { Operation } from '../operation';
import { ReportId } from './report-response';
export declare class BaseReportOperation extends Operation {
    /**
     * Retrieve status, metadata and location of a previously requested performance report.
     *
     * @param reportId -
     * @returns
     */
    getReport(reportId: ReportId): Promise<{
        reportId: string;
        status: "SUCCESS" | "IN_PROGRESS" | "FAILURE";
        statusDetails: string;
    } & {
        recordType?: string | undefined;
        location?: string | undefined;
        fileSize?: number | undefined;
    }>;
    /**
     * Downloads the report corresponding to the reportId specified
     *
     * @param reportId -
     * @returns \{(Promise\<Partial\<Record\<T, 'number' | 'string'\>\>[]\>)\}
     */
    downloadReport<T extends string>(reportId: ReportId): Promise<Partial<Record<T, 'number' | 'string'>>[]>;
}
