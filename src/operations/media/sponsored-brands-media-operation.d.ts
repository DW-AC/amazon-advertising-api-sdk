import { Operation } from '../operation';
import { CompleteMediaParam, CreateUploadLocaltionParam, MediaId } from './types';
export declare class SponsoredBrandsMediaOperation extends Operation {
    protected resource: string;
    /**
     * Creates an ephemeral resource (upload location) to upload Media for an Ad Program.
     * The upload location is short lived and expires in 15 minutes.
     *
     * @param param -
     * @returns
     */
    createUploadLocation(param: CreateUploadLocaltionParam): Promise<string>;
    /**
     * The API should be called once the media is uploaded to the location provided by the /media/upload API endpoint.
     * The API creates a Media resource for the uploaded media.
     * Media resource is comprised of Media Identifier. The Media Identifier can be used to attach media to Ad Program (Sponsored Brands).
     *
     * The API internally kicks off the asynchronous validation and processing workflow of the uploaded media.
     * As a result, Media may not be immediately available for usage (to create Sponsored Brands Video Campaign) as soon as the response is received.
     * See /media/describe API doc for instructions on when media is ready for campaign creation.
     */
    completeMedia(param: CompleteMediaParam): Promise<string>;
    /**
     * API to poll for media status.
     * In order to attach media to campaign, media should be in either PendingDeepValidation or Available status.
     * Available status guarantees that media has completed processing and published for usage.
     * Though media can be attached to campaign once the status of the media transitions to PendingDeepValidation, media could still fail additional validation and transition to Failed status.
     * For example in the context of SBV, SBV campaign can be created when status transitions to PendingDeepValidation, it could result in SBV campaign to be rejected later if media transitions to Failed status.
     */
    describeMedia(mediaId: MediaId): Promise<{
        mediaId: string;
        status: "Processing" | "PendingDeepValidation" | "Available" | "Failed";
    } & {
        statusMetadata?: {
            code: string;
            message: string;
        }[] | undefined;
        publishedMediaUrl?: string | undefined;
    }>;
}
