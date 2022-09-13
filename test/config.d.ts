import { BaseConfig } from '@scaleleap/config';
export declare class Config extends BaseConfig {
    readonly TEST_CLIENT_ID: string | undefined;
    readonly TEST_CLIENT_SECRET: string | undefined;
    readonly TEST_SCOPE: number | undefined;
    readonly TEST_ACCESS_TOKEN: string | undefined;
    readonly TEST_REFRESH_TOKEN: string | undefined;
    readonly TEST_OAUTH_REDIRECT_PORT: number;
}
export declare const config: Config;
