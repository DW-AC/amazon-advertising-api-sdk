import * as t from 'io-ts';
export declare const CreateUploadLocaltionParam: t.ExactC<t.TypeC<{
    programType: t.LiteralC<"SponsoredBrands">;
    creativeType: t.LiteralC<"Video">;
}>>;
export declare type CreateUploadLocaltionParam = t.TypeOf<typeof CreateUploadLocaltionParam>;
export declare const UploadLocation: t.StringC;
export declare type UploadLocation = t.TypeOf<typeof UploadLocation>;
export declare const CompleteMediaParam: t.IntersectionC<[t.TypeC<{
    /**
     * The url to upload the media. The url expires in 15 minutes.
     * The upload location only supports PUT HTTP Method to upload the media content.
     */
    uploadLocation: t.StringC;
}>, t.PartialC<{
    /**
     * The version id of the uploaded media.
     * The upload location retrieved from /media/upload API supports versioning and returns version id in the upload response through x-amz-version-id header.
     * API user can explicitly specify the version id corresponding to an upload through version property.
     * version is optional and if it is not specified, media corresponding to the most recent version at the time of API call will be used.
     */
    version: t.StringC;
}>]>;
export declare type CompleteMediaParam = t.TypeOf<typeof CompleteMediaParam>;
/**
 * The Media identifier.
 */
export declare const MediaId: t.StringC;
export declare type MediaId = t.TypeOf<typeof MediaId>;
export declare const MediaStatus: t.UnionC<[t.LiteralC<"Processing">, t.LiteralC<"PendingDeepValidation">, t.LiteralC<"Available">, t.LiteralC<"Failed">]>;
export declare type MediaStatus = t.TypeOf<typeof MediaStatus>;
export declare const MediaStatusMetadata: t.TypeC<{
    code: t.StringC;
    message: t.StringC;
}>;
export declare type MediaStatusMetadata = t.TypeOf<typeof MediaStatusMetadata>;
/**
 * Media Resource.
 */
export declare const MediaResource: t.IntersectionC<[t.TypeC<{
    /**
     * The Media identifier.
     */
    mediaId: t.StringC;
    /**
     * Media status.
     */
    status: t.UnionC<[t.LiteralC<"Processing">, t.LiteralC<"PendingDeepValidation">, t.LiteralC<"Available">, t.LiteralC<"Failed">]>;
}>, t.PartialC<{
    /**
     * Additional status metadata.
     * It is only available when status is Failed and statusMetadata provides additional detail on why media status is Failed.
     * statusMetadata is comprised of code and message.
     */
    statusMetadata: t.ArrayC<t.TypeC<{
        code: t.StringC;
        message: t.StringC;
    }>>;
    /**
     * The preview URL of the media.
     * It is only available when status is Available.
     */
    publishedMediaUrl: t.StringC;
}>]>;
export declare type MediaResource = t.TypeOf<typeof MediaResource>;
