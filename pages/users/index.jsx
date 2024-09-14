//  import { useEffect,useState } from "react";
import Link from "next/link";
import useSWR from 'swr';
 
const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserPage = ()=>{
//   const [users, setusers] = useState([]);
const {data, error} = useSWR(`https://dummyjson.com/users`, fetcher)
console.log("data" , data);

if(error){
    return <h1>Error Happend</h1>
}
if(!data){
    return <h1>Loading</h1>
}

//    useEffect(()=>{
//     async function fetchUser(){
//         const data =  await fetch('https://dummyjson.com/users');
//         setusers(await  data.json());
//     }
//     fetchUser();
//    }, [])
    return (
        <div>
        <h1>Users</h1>
        {data.users &&data.users.map(user => <Link href={`/users/${user.id}`} key={user.id}>
        <div>{user.firstName} </div></Link>)}
        </div>
    );
};



export default UserPage;