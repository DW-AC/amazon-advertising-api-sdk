"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const sponsoredBrandsStoresInfoOperation = auth_1.amazonAdvertising.sponsoredBrandsStoresInfo;
const BRAND_ENTITY_ID = 'ENTITY6SICSOL71XVX';
// Request store information for a given brandEntityId.
sponsoredBrandsStoresInfoOperation.getStore(BRAND_ENTITY_ID);
// List store information for all registered stores under an advertiser.
sponsoredBrandsStoresInfoOperation.listStores();
//# sourceMappingURL=crud-stores.js.map