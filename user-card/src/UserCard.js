import React from 'react';
import './App.css';

function UserCard(props) {
  return (
    <>
        {props.map(user => (
          <div className="userCard">
            <h1>{user.username}</h1>
            <p>{user.name}</p>
            <p>{user.location}</p>
          </div>
        ))}
    </>
  );
}

export default UserCard;
