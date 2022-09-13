import ClientOAuth2 from 'client-oauth2';
import { Options } from 'client-oauth2';
import { Marketplace } from './maketplace';
export declare class OAuthClient {
    private readonly opts;
    private client;
    constructor(opts: Options, marketplace: Marketplace);
    get getUri(): (options?: ClientOAuth2.Options | undefined) => string;
    get getToken(): (uri: string | ClientOAuth2.UrlObject, options?: ClientOAuth2.Options | undefined) => Promise<ClientOAuth2.Token>;
    createToken(accessToken: string, refreshToken: string): ClientOAuth2.Token;
}
