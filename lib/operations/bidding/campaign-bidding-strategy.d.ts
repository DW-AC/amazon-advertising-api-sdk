/**
 * Copyright (C) 2019, Scale Leap
 */
import * as t from 'io-ts';
export declare const CampaignBiddingStrategy: t.UnionC<[t.LiteralC<"legacyForSales">, t.LiteralC<"autoForSales">, t.LiteralC<"manual">]>;
export declare type CampaignBiddingStrategy = t.TypeOf<typeof CampaignBiddingStrategy>;
