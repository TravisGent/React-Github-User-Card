import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./UserCard";

const usersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
  "https://api.github.com/users/travisgent"
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    for (let i = 0; i < usersArray.length; i++) {
      axios.get(usersArray[i])
        .then(response => {
          this.setState({
            users: [...this.state.users, response.data]
          })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <UserCard props={this.state.users} />
      </div>
    );
  }
}

export default App;
