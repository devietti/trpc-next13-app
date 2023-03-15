import {initTRPC} from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

// this is our data store, used to respond to incoming RPCs from the client

interface User {
    id: string;
    name: string;
}
const userList: User[] = [
    {
        id: '1',
        name: 'KATT',
    },
    {
        id: '2',
        name: 'Foo',
    },
];

// this is our RPC API
export const appRouter = t.router({
    userById: t.procedure
        .input(z.number())
        .query((req) => {
            const { input } = req;
            return userList.find((u) => parseInt(u.id) === input);
        }),
});

export type AppRouter = typeof appRouter;