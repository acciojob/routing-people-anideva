import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function UserLists(){
    const [users,setUsers]= useState([]);

    useEffect (()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then ((data)=> {
            setUsers(data);
            console.log(data);
        });

    },[]);
    return (
     <div>
        <h1>User List</h1>
        <ul>
          {users.map((user)=>{
            return(
                <li key={user.id}>
                    <Link
                    to ={`/users/${user.id}`}
                    >
                        {user.name}
                    </Link>
                </li>
            );
          })}

        </ul>
     </div>
    );

}

export default UserLists;