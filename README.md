This is a small proof-of-concept showing how to get [tRPC](https://trpc.io) working with the [Next 13 `app` directory](https://beta.nextjs.org/docs/getting-started), all in TypeScript. All of the code is drawn from [the tRPC tutorial](https://trpc.io/docs/react), [here](https://github.com/trpc/trpc/issues/3297), and [here](https://github.com/trpc/next-13). Some attempt has been made to minimize the example code.

**Note** this code contains only an example of performing an RPC from a *Client Component*. I am not sure how to get tRPC calls working from a React Server Component, tbh, but it seems like this is an area [of active investigation](https://github.com/trpc/trpc/issues/3297).

## Running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. A simple page displays the result of a tRPC call. You can edit `MyRpcClientComponent.tsx` to change the query being made, or `trpc-server.ts` to change the "API" and see that the client and server both fail to compile.

## Recreating

```
npx create-next-app@latest --experimental-app trpc-next
cd trpc-next/
npm install @trpc/client @trpc/react-query @tanstack/react-query @trpc/server zod
```

This should be the basics needed if you want to incorporate this into an existing project.
