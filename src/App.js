import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(jsonData => this.setState({ monsters: jsonData }));
  }

  searchUser = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filtered = monsters.filter(singleMonster =>
      singleMonster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.searchUser}
        ></SearchBox>
        <CardList data={filtered}></CardList>
      </div>
    );
  }
}

export default App;
