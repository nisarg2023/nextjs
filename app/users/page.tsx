import React, { useEffect } from "react";
import db from "../../models/index";

const Users = async () => {
  const getData = async () => {
    const data = await db.User.findAll();
    return data;
  };


  // setInterval(async()=>{
  //   let data = await getData();
  //   console.log(data);
  // },1000*5)
  
  const users = await getData();
  return (
    <div>
      <ul>
        {
        users.map((user: any, index: any) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
