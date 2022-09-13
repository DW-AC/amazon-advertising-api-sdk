export interface HttpClientAuth {
    accessToken: string;
    clientId: string;
    scope: number;
}
export declare type RequestBody = object | object[];
export declare type Headers = Record<string, string>;
export declare class HttpClient {
    private readonly uri;
    private readonly auth;
    private readonly sandbox;
    private get headers();
    readonly httpStatus: {
        getStatusCode: typeof import("http-status-codes").getStatusCode;
        getStatusText: typeof import("http-status-codes").getReasonPhrase;
        ACCEPTED: number;
        BAD_GATEWAY: number;
        BAD_REQUEST: number;
        CONFLICT: number;
        CONTINUE: number;
        CREATED: number;
        EXPECTATION_FAILED: number;
        FORBIDDEN: number;
        GATEWAY_TIMEOUT: number;
        GONE: number;
        HTTP_VERSION_NOT_SUPPORTED: number;
        IM_A_TEAPOT: number;
        INSUFFICIENT_SPACE_ON_RESOURCE: number;
        INSUFFICIENT_STORAGE: number;
        INTERNAL_SERVER_ERROR: number;
        LENGTH_REQUIRED: number;
        LOCKED: number;
        METHOD_FAILURE: number;
        METHOD_NOT_ALLOWED: number;
        MOVED_PERMANENTLY: number;
        MOVED_TEMPORARILY: number;
        MULTI_STATUS: number;
        MULTIPLE_CHOICES: number;
        NETWORK_AUTHENTICATION_REQUIRED: number;
        NO_CONTENT: number;
        NON_AUTHORITATIVE_INFORMATION: number;
        NOT_ACCEPTABLE: number;
        NOT_FOUND: number;
        NOT_IMPLEMENTED: number;
        NOT_MODIFIED: number;
        OK: number;
        PARTIAL_CONTENT: number;
        PAYMENT_REQUIRED: number;
        PERMANENT_REDIRECT: number;
        PRECONDITION_FAILED: number;
        PRECONDITION_REQUIRED: number;
        PROCESSING: number;
        PROXY_AUTHENTICATION_REQUIRED: number;
        REQUEST_HEADER_FIELDS_TOO_LARGE: number;
        REQUEST_TIMEOUT: number;
        REQUEST_TOO_LONG: number;
        REQUEST_URI_TOO_LONG: number;
        REQUESTED_RANGE_NOT_SATISFIABLE: number;
        RESET_CONTENT: number;
        SEE_OTHER: number;
        SERVICE_UNAVAILABLE: number;
        SWITCHING_PROTOCOLS: number;
        TEMPORARY_REDIRECT: number;
        TOO_MANY_REQUESTS: number;
        UNAUTHORIZED: number;
        UNPROCESSABLE_ENTITY: number;
        UNSUPPORTED_MEDIA_TYPE: number;
        USE_PROXY: number;
    };
    constructor(uri: string, auth: HttpClientAuth, sandbox?: boolean);
    private request;
    private handleApiResponse;
    private apiUri;
    private apiRequest;
    get<T>(resource: string, extraHeaders?: Headers): Promise<T>;
    put<T>(resource: string, body: RequestBody, extraHeaders?: Headers): Promise<T>;
    post<T>(resource: string, body: RequestBody, extraHeaders?: Headers): Promise<T>;
    delete<T>(resource: string, extraHeaders?: Headers): Promise<T>;
    download<T>(resource: string, headers?: Headers): Promise<T>;
}
