/**
 * Copyright (C) 2019, Scale Leap
 */
import * as t from 'io-ts';
/**
 * You can enable controls to adjust your bid based on the placement location.
 * Specify a location where you want to use bid controls.
 * The percentage value set is the percentage of the original bid for which you want to have your
 * bid adjustment increased. For example, a 50% adjustment on a $1.00 bid would increase the bid
 * to $1.50 for the opportunity to win a specified placement.
 */
export declare const CampaignBiddingAdjustmentsPredicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
export declare type CampaignBiddingAdjustmentsPredicate = t.TypeOf<typeof CampaignBiddingAdjustmentsPredicate>;
export declare const CampaignBiddingAdjustments: t.ArrayC<t.IntersectionC<[t.TypeC<{
    predicate: t.UnionC<[t.LiteralC<"placementTop">, t.LiteralC<"placementProductPage">]>;
}>, t.PartialC<{
    percentage: t.NumberC;
}>]>>;
export declare type CampaignBiddingAdjustments = t.TypeOf<typeof CampaignBiddingAdjustments>;
