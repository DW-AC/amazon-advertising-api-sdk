import * as t from 'io-ts';
export declare const ReportResponseStatus: t.UnionC<[t.LiteralC<"IN_PROGRESS">, t.LiteralC<"SUCCESS">, t.LiteralC<"FAILURE">]>;
export declare type ReportResponseStatus = t.TypeOf<typeof ReportResponseStatus>;
export declare const ReportId: t.StringC;
export declare type ReportId = t.TypeOf<typeof ReportId>;
export declare const ReportResponse: t.IntersectionC<[t.TypeC<{
    /**
     * The ID of the report that was requested.
     */
    reportId: t.StringC;
    /**
     * The status of the generation of the report, it can be IN_PROGRESS, SUCCESS or FAILURE.
     */
    status: t.UnionC<[t.LiteralC<"IN_PROGRESS">, t.LiteralC<"SUCCESS">, t.LiteralC<"FAILURE">]>;
    /**
     * Description of the status.
     */
    statusDetails: t.StringC;
}>, t.PartialC<{
    /**
     * The record type of the report. It can be campaigns, adGroups, productAds or keywords.
     */
    recordType: t.StringC;
    /**
     * The URI from the API service from which a redirect to the report can be found. It's only available if status is SUCCESS.
     */
    location: t.StringC;
    /**
     * The size of the report file in bytes. It's only available if status is SUCCESS.
     */
    fileSize: t.NumberC;
}>]>;
export declare type ReportResponse = t.TypeOf<typeof ReportResponse>;
