import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entriesToShow: 10,
      regionFilter: "All",
      searchQuery: "", // Added state for the search query
      items: [
        // Your list of items
        { name: "Item 1", region: "EU" },
        { name: "Item 2", region: "Asia" }
        // Add more items
      ]
    };
  }

  handleEntriesChange = (value) => {
    this.setState({ entriesToShow: value });
  };

  handleRegionFilter = (region) => {
    this.setState({ regionFilter: region });
  };

  handleSearchInputChange = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { entriesToShow, regionFilter, searchQuery, items } = this.state;

    const filteredItems = items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion =
        regionFilter === "All" || item.region === regionFilter;

      return matchesSearch && matchesRegion;
    });

    return (
      <div className="App">
        <h1>Article query</h1>

        <div>
          <label>Show entries:</label>
          <select
            onChange={(e) => this.handleEntriesChange(e.target.value)}
            value={entriesToShow}
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div>
          <label>Filter by region:</label>
          <select
            onChange={(e) => this.handleRegionFilter(e.target.value)}
            value={regionFilter}
          >
            <option value="All">All</option>
            <option value="EU">EU</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
          </select>
        </div>

        <div>
          <label>Input your search item:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => this.handleSearchInputChange(e.target.value)}
          />
        </div>

        <ul>
          {filteredItems.slice(0, entriesToShow).map((item, index) => (
            <li key={index}>
              {item.name} ({item.region})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
