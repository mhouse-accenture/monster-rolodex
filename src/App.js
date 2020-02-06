import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

import "./App.css";

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
    const { monsters, searchString } = this.state;
    const filteredResults = monsters.filter(monster =>
      monster.name
        .toLocaleLowerCase()
        .includes(searchString.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={event => {
            this.setState({ searchString: event.target.value });
          }}
        />
        <CardList monsters={filteredResults} />
      </div>
    );
  }
}

export default App;
