/**
 * Copyright (C) 2019, Scale Leap
 */
import { ExtendableError } from 'ts-error';
import type { Headers } from './http-client';
export interface ErrorObject {
    code: string;
    details: string;
}
export declare class NullError extends ExtendableError {
    constructor(resource: string);
}
export declare class InvalidProgramStateError extends ExtendableError {
    constructor(additionalDetails?: string);
}
export declare class SnapshotDownloadError extends ExtendableError {
    constructor(snapshotId: string, snapshotStatus: string);
}
export declare class GenericError extends ExtendableError {
    code: string;
    requestId: string;
    constructor(err: ErrorObject, headers: Headers);
}
export declare class ThrottlingError extends GenericError {
    /**
     * The number of seconds that you should wait before submitting another API call.
     *
     * Rate limiting will occur dynamically based on the overall system load.
     *
     * Read [documentation](https://advertising.amazon.com/API/docs/en-us/get-started/developer-notes#Rate-limiting).
     */
    retryAfter: number;
    constructor(err: ErrorObject, headers: Headers);
}
export declare class UnauthorizedError extends GenericError {
}
export declare class BadRequestError extends GenericError {
}
export declare class UnprocessableEntityError extends GenericError {
}
export declare class ResourceNotFoundError extends GenericError {
}
export declare class NotAcceptableError extends GenericError {
}
export declare function apiErrorFactory(err: ErrorObject, headers: Headers): GenericError;
