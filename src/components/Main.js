import React from "react";
import { Switch, Route } from "react-router-dom";
import MainList from "./MainList";
import BookList from "./BookList";
import NotFound from "./NotFound";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <MainList
              lists={this.props.lists}
              {...props}
              createNewList={this.createNewList}
            />
          )}
        />
        <Route
          exact
          path="/list/:listId"
          render={props => <BookList lists={this.props.lists} {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Main;
