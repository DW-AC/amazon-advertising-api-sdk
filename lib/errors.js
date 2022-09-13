"use strict";
/**
 * Copyright (C) 2019, Scale Leap
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorFactory = exports.NotAcceptableError = exports.ResourceNotFoundError = exports.UnprocessableEntityError = exports.BadRequestError = exports.UnauthorizedError = exports.ThrottlingError = exports.GenericError = exports.SnapshotDownloadError = exports.InvalidProgramStateError = exports.NullError = void 0;
const ts_error_1 = require("ts-error");
class NullError extends ts_error_1.ExtendableError {
    constructor(resource) {
        super(`Response result is null for "${resource}".`);
    }
}
exports.NullError = NullError;
class InvalidProgramStateError extends ts_error_1.ExtendableError {
    constructor(additionalDetails) {
        super([
            'This program state should never happen.',
            'If you encountered this error, please report it asap.',
            additionalDetails,
        ].join(' '));
    }
}
exports.InvalidProgramStateError = InvalidProgramStateError;
class SnapshotDownloadError extends ts_error_1.ExtendableError {
    constructor(snapshotId, snapshotStatus) {
        super([
            'Snapshot must have status equal to SUCCESS before downloading.',
            `Got snapshot ${snapshotId} with status ${snapshotStatus} instead.`,
        ].join(' '));
    }
}
exports.SnapshotDownloadError = SnapshotDownloadError;
class GenericError extends ts_error_1.ExtendableError {
    constructor(err, headers) {
        super(err.details);
        this.code = err.code;
        this.requestId = headers['x-amz-request-id'] || headers['x-amz-rid'] || '';
    }
}
exports.GenericError = GenericError;
class ThrottlingError extends GenericError {
    constructor(err, headers) {
        super(err, headers);
        this.retryAfter = Number(headers['retry-after']);
    }
}
exports.ThrottlingError = ThrottlingError;
class UnauthorizedError extends GenericError {
}
exports.UnauthorizedError = UnauthorizedError;
class BadRequestError extends GenericError {
}
exports.BadRequestError = BadRequestError;
class UnprocessableEntityError extends GenericError {
}
exports.UnprocessableEntityError = UnprocessableEntityError;
class ResourceNotFoundError extends GenericError {
}
exports.ResourceNotFoundError = ResourceNotFoundError;
class NotAcceptableError extends GenericError {
}
exports.NotAcceptableError = NotAcceptableError;
function apiErrorFactory(err, headers) {
    switch (err.code) {
        case 'UNAUTHORIZED':
            return new UnauthorizedError(err, headers);
        case 'NOT_FOUND':
            return new ResourceNotFoundError(err, headers);
        case '400':
            return new BadRequestError(err, headers);
        case '406':
            return new NotAcceptableError(err, headers);
        case '422':
            return new UnprocessableEntityError(err, headers);
        case '429':
            return new ThrottlingError(err, headers);
        default:
            return new GenericError(err, headers);
    }
}
exports.apiErrorFactory = apiErrorFactory;
//# sourceMappingURL=errors.js.map