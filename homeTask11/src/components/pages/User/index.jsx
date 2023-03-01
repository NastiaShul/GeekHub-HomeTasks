import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../../../api/request";
import { NotFound } from "../NotFound";

import "./User.css"

export const User = () => {
   const [user, setUser] = useState([]);
   const { id } = useParams();
   console.log(user);

   useEffect(() => {
      getUser({ id })
         .then((response) => response.json())
         .then((data) => setUser(data));
   }, [id]);

   return (
      <>
         {user.name ?
            (<h2 className="title">{user.name}</h2>)
            : (<NotFound />)}
      </>
   )
}