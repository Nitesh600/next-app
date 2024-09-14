// import { useEffect, useState } from "react";
import useSWR from 'swr';
import {useRouter} from "next/router";
import styles from "../../../styles/user.module.css"


let fetcher = (...args)=> fetch(...args).then(res=>res.json());


const UserInfoPage = ()=>{
    const {router} = useRouter();
    //  id = router.query.id;
    const {data, error} = useSWR(`https://dummyjson.com/users/`, fetcher)
    if(error){
        return <h1>Error Happend</h1>
    }
    if(!data){
        return <h1>Loading</h1>
    }
  
    return (

        <div>
            <h1 className={styles['text-yellow']}>{data.users.id.firstName}</h1>
            <h1>{data.email}</h1>
        </div>
    );
}


export default UserInfoPage;