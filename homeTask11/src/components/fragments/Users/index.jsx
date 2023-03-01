import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../../../api/request";

export const Users = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      getUsers()
         .then((response) => response.json())
         .then((json) => setUsers(json));
   }, [])
   return (
      <>
         <h2>Users</h2>
         {users.map(user =>
            <ul key={user.id}>
               <li>
                  <Link to={`/users/${user.id}`}>
                     {user.name}
                  </Link>
               </li>
            </ul>
         )}
      </>
   )
}