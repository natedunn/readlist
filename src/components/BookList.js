import React from "react";
import SearchBar from "./SearchBar";
import BookItem from "./BookItem";

class BookList extends React.Component {
  handleClickDelete = key => {
    this.props.deleteList(key);
    this.props.history.push(`/`);
  };

  renderTitle() {
    const listId = this.props.match.params.listId;
    if (this.props.lists.hasOwnProperty(listId)) {
      return (
        <React.Fragment>
          <div className="flex">
            <div className="w-50">
              <h1 className="pl3 pr3">{this.props.lists[listId].name}</h1>
            </div>
            <div className="w-50">
              <button onClick={() => this.handleClickDelete(listId)}>
                Delete
              </button>
            </div>
          </div>
          <div className="pl3 pr3 pb3">
            <SearchBar
              addBookToList={this.props.addBookToList}
              listId={listId}
            />
          </div>
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
            <ul className="list pl0">
              {Object.keys(this.props.lists[listId].books).map(key => (
                <BookItem
                  key={key}
                  index={key}
                  info={this.props.lists[listId].books[key]}
                />
              ))}
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
      <React.Fragment>
        {this.renderTitle()}
        {this.renderBody()}
      </React.Fragment>
    );
  }
}

export default BookList;
