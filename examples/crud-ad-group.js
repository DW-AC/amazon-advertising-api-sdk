"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const sponsoredBrandsAdGroupOperation = auth_1.amazonAdvertising.sponsoredBrandsAdGroup;
const sponsoredProductsAdGroupOperation = auth_1.amazonAdvertising.sponsoredProductsAdGroup;
// Gets an array of ad groups associated with the client identifier passed in the authorization header, filtered by specified criteria.
sponsoredBrandsAdGroupOperation.getAdGroup(123);
// Gets an ad group specified by identifier.
sponsoredBrandsAdGroupOperation.listAdGroups();
// Sets the ad group status to archived.
sponsoredProductsAdGroupOperation.archiveAdGroup(123);
// Creates one or more ad groups.
const sponsoredProductsAdGroup = [
    {
        adGroupId: 138818764235694,
        name: 'New Name',
        campaignId: 31299234922913,
        defaultBid: 1,
        state: 'archived',
    },
];
sponsoredProductsAdGroupOperation.createAdGroups(sponsoredProductsAdGroup);
// Retrieves an ad group by ID.
sponsoredProductsAdGroupOperation.getAdGroup(123);
// Retrieves an ad group and its extended fields by ID.
sponsoredProductsAdGroupOperation.getAdGroupExtended(123);
// Retrieves a list of ad groups satisfying optional criteria.
sponsoredProductsAdGroupOperation.listAdGroups();
// Retrieves a list of ad groups satisfying optional criteria.
sponsoredProductsAdGroupOperation.listAdGroupsExtended();
// Updates one or more ad groups. Ad groups are identified using their adGroupId
sponsoredProductsAdGroupOperation.updateAdGroups(sponsoredProductsAdGroup);
//# sourceMappingURL=crud-ad-group.js.map