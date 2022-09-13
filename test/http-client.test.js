"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const jest_polly_1 = require("@scaleleap/jest-polly");
const errors_1 = require("../src/errors");
const http_client_factory_1 = require("./http-client-factory");
describe('HttpClient', () => {
    let client;
    beforeEach(() => {
        client = (0, http_client_factory_1.httpClientFactory)();
    });
    describe('get', () => {
        it('should return a result', async () => {
            const res = await client.get('v2/profiles');
            expect(Array.isArray(res)).toBeTruthy();
        });
        it('should throw a known error object when encountering an error', () => {
            const server = jest_polly_1.jestPollyContext.polly.server;
            server.get(http_client_factory_1.SANDBOX_URI + '/encountering-an-error').on('beforeResponse', (req, res) => {
                res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR);
                res.send('');
            });
            return expect(client.get('encountering-an-error')).rejects.toBeInstanceOf(errors_1.GenericError);
        });
        it('should throw NullError when response body is null', () => {
            const server = jest_polly_1.jestPollyContext.polly.server;
            server.get(http_client_factory_1.SANDBOX_URI + '/null-body').on('beforeResponse', (req, res) => {
                res.status(http_status_codes_1.default.OK);
                res.send('');
            });
            return expect(client.get('null-body')).rejects.toThrow(errors_1.NullError);
        });
        it('should throw a ResourceNotFoundError when resource is not found', () => {
            const server = jest_polly_1.jestPollyContext.polly.server;
            server.get(http_client_factory_1.SANDBOX_URI + '/foobar').on('beforeResponse', (req, res) => {
                res.status(http_status_codes_1.default.NOT_FOUND);
                res.send({
                    code: 'NOT_FOUND',
                    details: 'Could not find resource for full path: https://advertising-api-test.amazon.com/foobar',
                });
            });
            return expect(client.get('foobar')).rejects.toThrow(errors_1.ResourceNotFoundError);
        });
        it('should throw ThrottlingError when encountering throttling', async () => {
            expect.assertions(2);
            const server = jest_polly_1.jestPollyContext.polly.server;
            server.get(http_client_factory_1.SANDBOX_URI + '/throttle').on('beforeResponse', (req, res) => {
                res.status(http_status_codes_1.default.TOO_MANY_REQUESTS);
                res.setHeader('Retry-After', '42');
                res.send('');
            });
            await client.get('throttle').catch((err) => {
                expect(err).toBeInstanceOf(errors_1.ThrottlingError);
                expect(err.retryAfter).toBe(42);
            });
        });
    });
    describe('download', () => {
        it('should throw if location header not set', async () => {
            const server = jest_polly_1.jestPollyContext.polly.server;
            server.get(http_client_factory_1.SANDBOX_URI + '/profiles').on('beforeResponse', (req, res) => {
                res.setHeader('Location', '');
                res.status(http_status_codes_1.default.OK);
                res.send({
                    snapshotId: 'amzn1.clicksAPI.v1.p1.5C8B19EB.7298de0e-17cd-441f-bf5c-17a27406b0d6',
                    status: 'SUCCESS',
                    statusDetails: 'Snapshot has been successfully generated.',
                    location: '',
                    fileSize: 518,
                });
            });
            const promise = client.download('profiles');
            return expect(promise).rejects.toThrowError(errors_1.InvalidProgramStateError);
        });
    });
    describe.skip('BIDDING_CONTROLS_ON header', () => {
        // it('should set the header in sandbox environment', async done => {
        //   expect.assertions(1)
        //   const scope = nock('https://advertising-api-test.amazon.com')
        //     .get('/v2/profiles')
        //     .reply(200, {})
        //   scope.once('request', req => {
        //     expect(req.headers.bidding_controls_on).toEqual(['true'])
        //     done()
        //   })
        //   await client.get('profiles')
        // })
    });
});
//# sourceMappingURL=http-client.test.js.map