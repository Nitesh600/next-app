import { useRouter } from "next/router";



export default function nitesh(){
    const {query} = useRouter();

    return (
        <>
        
        <div>this page belongs to {query.hello} </div>
        </>
    );
}