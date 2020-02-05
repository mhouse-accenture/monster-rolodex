import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={event => {
            this.setState({ searchString: event.target.value });
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
