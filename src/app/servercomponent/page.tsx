import { appRouter } from '@/trpc-server';

/** This is a React Server Component */
export default async function rscPage() {
    const caller = appRouter.createCaller({});
    // call the tRPC endpoint
    const result = await caller.userById(2);

    // we render this output on the server
    return <p>Hi, {result.name}, greetings from RSC land!</p>
}
