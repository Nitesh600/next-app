import {useRouter } from "next/router";

import {useEffect} from "react"





const useUser = ()=>  ({user: "nitesh", auth: false});


export default function index(){
    const router = useRouter();
    const user = useUser();
 

    useEffect(()=>{
        if(user.user == null){
            router.replace("/");
        }
    }, [router, user.user]);
    return (
        
        <>
        <div>this is Index page for {router.query.username}</div>
        <button onClick={e => router.push(`/user/${router.query.username}/settings`)}>this button for </button>
        <button onClick={e=> router.push({
            pathname: `/user/[username]/settings`,
            query: {username: router.query.username},
        })
        }>hello button</button>
        <button onClick={e=> router.replace(`/`)
        }>go to Home</button>
        <button onClick={e=> router.reload()}>Reload</button>
        </>
    );
}