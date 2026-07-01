import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function UserDetails() {
    const[user,setUser]= useState({});
    const [loading,setLoading]=useState(true);
    const {id} = useParams();

    useEffect(()=>{
        fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=> response.json())
        .then((data)=>{
            setUser(data);
            setLoading(false);
        });
    }, [id]);
   if (loading){
    return <div>Loading...</div>
   }
   return (
    <div>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>
   )
}

export default UserDetails;
