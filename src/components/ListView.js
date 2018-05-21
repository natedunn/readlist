import React from "react";
import BookItem from "./BookItem";

class ListView extends React.Component {
  render() {
    return (
      <div>
        <div className="pa3">
          <h1>Main List One</h1>
          <p>This will be a description of the list</p>
          <ul>
            <BookItem />
            <BookItem />
            <BookItem />
          </ul>
        </div>
      </div>
    );
  }
}

export default ListView;
