"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaResource = exports.MediaStatusMetadata = exports.MediaStatus = exports.MediaId = exports.CompleteMediaParam = exports.UploadLocation = exports.CreateUploadLocaltionParam = void 0;
const t = __importStar(require("io-ts"));
exports.CreateUploadLocaltionParam = t.strict({
    programType: t.literal('SponsoredBrands'),
    creativeType: t.literal('Video'),
});
exports.UploadLocation = t.string;
exports.CompleteMediaParam = t.intersection([
    t.type({
        /**
         * The url to upload the media. The url expires in 15 minutes.
         * The upload location only supports PUT HTTP Method to upload the media content.
         */
        uploadLocation: exports.UploadLocation,
    }),
    t.partial({
        /**
         * The version id of the uploaded media.
         * The upload location retrieved from /media/upload API supports versioning and returns version id in the upload response through x-amz-version-id header.
         * API user can explicitly specify the version id corresponding to an upload through version property.
         * version is optional and if it is not specified, media corresponding to the most recent version at the time of API call will be used.
         */
        version: t.string,
    }),
]);
/**
 * The Media identifier.
 */
exports.MediaId = t.string;
exports.MediaStatus = t.union([
    /**
     * The media is being processed.
     */
    t.literal('Processing'),
    /**
     * The media is pending additional validation carried out during media conversion.
     */
    t.literal('PendingDeepValidation'),
    /**
     * Media has successfully finished validation and conversion and the media is published.
     */
    t.literal('Available'),
    /**
     * Media processing failed.
     */
    t.literal('Failed'),
]);
exports.MediaStatusMetadata = t.type({
    code: t.string,
    message: t.string,
});
/**
 * Media Resource.
 */
exports.MediaResource = t.intersection([
    t.type({
        /**
         * The Media identifier.
         */
        mediaId: exports.MediaId,
        /**
         * Media status.
         */
        status: exports.MediaStatus,
    }),
    t.partial({
        /**
         * Additional status metadata.
         * It is only available when status is Failed and statusMetadata provides additional detail on why media status is Failed.
         * statusMetadata is comprised of code and message.
         */
        statusMetadata: t.array(exports.MediaStatusMetadata),
        /**
         * The preview URL of the media.
         * It is only available when status is Available.
         */
        publishedMediaUrl: t.string,
    }),
]);
//# sourceMappingURL=types.js.map