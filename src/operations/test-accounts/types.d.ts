import * as t from 'io-ts';
export declare const RequestId: t.StringC;
export declare type RequestId = t.TypeOf<typeof RequestId>;
export declare const VendorCode: t.StringC;
export declare type VendorCode = t.TypeOf<typeof VendorCode>;
export declare const AccountMetaData: t.TypeC<{
    vendorCode: t.StringC;
}>;
export declare type AccountMetaData = t.TypeOf<typeof AccountMetaData>;
export declare const AccountInfoType: t.UnionC<[t.LiteralC<"AUTHOR">, t.LiteralC<"VENDOR">]>;
export declare type AccountInfoType = t.TypeOf<typeof AccountInfoType>;
export declare const CreateAccount: t.IntersectionC<[t.TypeC<{
    /**
     * The country code identifying the publisher(s) on which ads will run.
     */
    countryCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCountryCode>;
    /**
     * Account info.
     */
    accountType: t.UnionC<[t.LiteralC<"AUTHOR">, t.LiteralC<"VENDOR">]>;
}>, t.PartialC<{
    accountMetaData: t.TypeC<{
        vendorCode: t.StringC;
    }>;
}>]>;
export declare type CreateAccount = t.TypeOf<typeof CreateAccount>;
export declare const CreateAccountResponseStatus: t.UnionC<[t.LiteralC<"IN_PROGRESS">, t.LiteralC<"COMPLETED">, t.LiteralC<"FAILED">]>;
export declare type CreateAccountResponseStatus = t.TypeOf<typeof CreateAccountResponseStatus>;
export declare const CreateAccountResponse: t.TypeC<{
    /**
     * The RequestId of the account that was created
     */
    requestId: t.StringC;
}>;
export declare type CreateAccountResponse = t.TypeOf<typeof CreateAccountResponse>;
export declare const Account: t.TypeC<{
    countryCode: import("../commons/types").EnumType<import("@scaleleap/amazon-marketplaces").AmazonMarketplaceAdvertisingCountryCode>;
    asins: t.ArrayC<t.StringC>;
    accountType: t.UnionC<[t.LiteralC<"AUTHOR">, t.LiteralC<"VENDOR">]>;
    id: t.StringC;
    status: t.UnionC<[t.LiteralC<"IN_PROGRESS">, t.LiteralC<"COMPLETED">, t.LiteralC<"FAILED">]>;
}>;
export declare type Account = t.TypeOf<typeof Account>;
