"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../../src");
const sponsored_display_negative_targeting_operation_1 = require("../../../src/operations/negative-targeting/sponsored-display-negative-targeting-operation");
const http_client_factory_1 = require("../../http-client-factory");
describe('SponsoredDisplayNegativeTargetingOperation', () => {
    const client = new src_1.HttpClient(http_client_factory_1.SANDBOX_URI, { ...http_client_factory_1.auth, scope: 2973802954634317 }, true);
    const operationProvider = new src_1.OperationProvider(client);
    const operation = operationProvider.create(sponsored_display_negative_targeting_operation_1.SponsoredDisplayNegativeTargetingOperation);
    const AD_GROUP_ID = 257081908560802;
    const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'];
    /**
     * Sandbox API returns "HTTP 403 Forbidden" error when request.
     * TODO: Need check again on Production API.
     */
    describe.skip('createNegativeTargetingClauses', () => {
        it(`should create one or more negative targeting clauses`, async () => {
            const params = [
                {
                    adGroupId: AD_GROUP_ID,
                    state: 'enabled',
                    expression: [
                        {
                            type: 'asinSameAs',
                            value: ASINS[0],
                        },
                    ],
                    expressionType: 'manual',
                },
            ];
            const [res] = await operation.createNegativeTargetingClauses(params);
            expect(res.code).toBe('SUCCESS');
        });
    });
});
//# sourceMappingURL=sponsored-display-negative-targeting-operation.test.js.map