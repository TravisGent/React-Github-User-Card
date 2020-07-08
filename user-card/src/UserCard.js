import React from 'react';
import './App.css';

class UserCard extends React.Component {
  render() {
    return (
      <>
        {this.props.userCard.map(user => (
        <div className="userCard">
            <h1>{user.login}</h1>
            <p>{user.name}</p>
            <p>{user.location}</p>
        </div>
        ))}
      </>
    );
  }
}

export default UserCard;
