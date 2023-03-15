import { FetchCreateContextFnOptions, fetchRequestHandler} from '@trpc/server/adapters/fetch';
import {appRouter} from '@/trpc-server';

// this is the server RPC API handler

const handler = (request: Request) => {
    console.log(`incoming request ${request.url}`)
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req: request,
        router: appRouter,
        createContext: function (opts: FetchCreateContextFnOptions): object | Promise<object> {
            // empty context
            return {}
        }
    });
}

export const GET = handler;
export const POST = handler;