import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './UserList.css'



export default function UserList() {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
         .then(res=>{setUsers(res.data)})
         .catch(er=>console.log(er))
    }
    useEffect (()=> {
        getAllUsers();
    }, []);

    console.log(users)
  
    return (
      <div className="list">
        {users.map((user, index) => (
          <div key={index}>
            <li>
              <span>Name:</span>
              {user.name}
            </li>
            <li>
              <span>Username:</span> {user.username}
            </li>
            <li>
              <span>Email:</span>
              {user.email}
            </li>
            <li>
              <span>Address:</span>
              <ul>
                <li>
                  <span>Street:</span> {user.address.street}
                </li>
                <li>
                  <span>Suite:</span> {user.address.suite}
                </li>
                <li>
                  <span>City:</span> {user.address.city}
                </li>
                <li>
                  <span>Zip code: </span> {user.address.zipcode}
                </li>
                <li>
                  <span>Geo: </span>
                  <ul>
                    <li>
                      <span>Lat:</span> {user.address.geo.lat}
                    </li>
                    <li>
                      <span>Lng:</span> {user.address.geo.lng}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span>Phone:</span>
              {user.phone}
            </li>
            <li>
              <span>WebSite:</span> {user.website}
            </li>
            <li>
              <span>Company:</span>
              <ul>
                <li>
                  <span>Name:</span> {user.company.name}
                </li>
                <li>
                  <span>CatchtPhrase:</span> {user.company.catchPhrase}
                </li>
                <li>
                  <span>Bs:</span> {user.company.bs}
                </li>
                <h2 style={{alignItems: "center"}}>
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
                </h2>
              </ul>
            </li>
          </div>
        ))}
      </div>
    );
}