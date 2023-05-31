'use client';
import {trpc} from "@/trpc";

// a Client Component that makes an RPC and displays the result

export default function MyRpcClientComponent(): JSX.Element {
    const name = trpc.userById.useQuery(1)

    if (name.data == undefined) {
        console.log('name.data undefined')
        return (<p>did not work</p>)
    }
    console.log(`result.data is ${JSON.stringify(name.data)}`)

    return (
        <p>
            Hello, {name.data!.name}, greetings from client component land!
        </p>
    )
}
