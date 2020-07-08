import React from 'react';
import './App.css';

class UserFollowers extends React.Component {
  render() {
    return (
      <div className="followerCards">
      <h1>Followers:</h1>
        {this.props.userFollowers.map(user => (
          <div className="userCardTwo">
            <p>{user}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserFollowers;
