import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/usersSlice";

function Users({ data }) {
  const dispatch = useDispatch();
  const [panel, setPanel] = useState(false);

  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <button onClick={() => dispatch(removeFromUsers(user))}>
            Remove
          </button>
          <button onClick={() => setPanel(!panel)}>Panel</button>
          <div className={`user-panel ${panel ? "open" : ""}`}>
            <button onClick={() => setPanel(!panel)}>Close</button>
            <h1>Name: {user.name}</h1>
            <hr />
            <h3>Prodession: {user.profession}</h3>
            <hr />
            <p>{user.age} years old</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
