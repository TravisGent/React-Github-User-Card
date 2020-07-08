import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./UserCard";
import UserFollowers from './UserFollowers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/travisgent")
      .then(response => {
        this.setState({
          users: [...this.state.users, response.data]
        })
      })

    axios.get("https://api.github.com/users/travisgent/followers")
    .then(response => {
      for(let i = 0; i < response.data.length; i++) {
        this.setState({
          followers: [...this.state.followers, response.data[i].login]
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.users)}
        {console.log(this.state.followers)}
        <UserCard userCard={this.state.users} />
        <UserFollowers userFollowers={this.state.followers} />
      </div>
    );
  }
}

export default App;
