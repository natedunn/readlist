import React from 'react';

class SearchBar extends React.Component {
  addBook = e => {
    e.preventDefault();
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="bg-moon dib w-100" onSubmit={this.addBook}>
        <input
          className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
          placeholder="Search for a book"
          type="text"
          name="search"
        />
        <button
          className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
          type="submit"
        >
          Add book to list
        </button>
      </form>
    );
  }
}

export default SearchBar;
