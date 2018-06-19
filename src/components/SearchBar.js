import React from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

class SearchBar extends React.Component {
  state = {
    query: "",
    results: {}
  };

  getInfo = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBCFbo7v3g_o8UCJ34ns9COvbahi0yfvIo&maxResults=3&orderBy=relevance&printType=all&q=${
          this.state.query
        }`
      )
      .then(response => {
        this.setState({ results: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => {
      // Only run every couple of characters
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
      // If the input is empty, also empty the results
      else if (!this.state.query || this.state.query.length === 0) {
        this.setState({ results: {} });
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBookToList(
      // List ID
      this.props.listId,
      // ISBN
      this.state.results.items[0].volumeInfo.industryIdentifiers[0].identifier
    );
    e.currentTarget.reset();
    this.setState({ query: "" });
  };

  render() {
    return (
      <React.Fragment>
        <form className="bg-moon dib w-100" onSubmit={this.handleSubmit}>
          <input
            className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
            placeholder="Search for a book"
            type="text"
            name="search"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <button
            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
            type="submit"
          >
            Add book to list
          </button>
        </form>
        <SearchResults query={this.state.query} results={this.state.results} />
      </React.Fragment>
    );
  }
}

export default SearchBar;
