import React from "react";
import SearchBar from "./SearchBar";
import BookItem from "./BookItem";

class BookList extends React.Component {
  renderTitle() {
    const listId = this.props.match.params.listId;
    if (this.props.lists.hasOwnProperty(listId)) {
      return (
        <React.Fragment>
          <SearchBar />
          <h1 className="pl3 pr3">{this.props.lists[listId].name}</h1>
        </React.Fragment>
      );
    } else {
      return <h1 className="pl3 pr3">This list does not exist!</h1>;
    }
  }
  renderBody() {
    const listId = this.props.match.params.listId;
    if (this.props.lists.hasOwnProperty(listId)) {
      if (this.props.lists[listId].books) {
        return (
          <div className="pl3 pr3 pb3">
            {console.log(this)}
            <ul className="list pl0">
              {this.props.lists[listId].books.map(function(array, key) {
                return <BookItem key={"book-" + array.isbn} details={array} />;
              })}
            </ul>
          </div>
        );
      } else {
        return (
          <h2 className="pl3 pr3">You have not added books to this list yet</h2>
        );
      }
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderBody()}
      </div>
    );
  }
}

export default BookList;
