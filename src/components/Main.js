import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ListHeader from "./ListHeader";
import ListArchive from "./ListArchive";
import BookList from "./BookList";
import NotFound from "./NotFound";

class Main extends React.Component {
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <main className="mw7 mr-auto ml-auto">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <ListHeader title="Your Lists" />
                <ListArchive
                  lists={this.props.lists}
                  createList={this.props.createList}
                  deleteList={this.props.deleteList}
                />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/list/:listId"
            render={props => (
              <Fragment>
                <ListHeader title="{Book Title}" />
                <BookList
                  {...props}
                  addBookToList={this.props.addBookToList}
                  lists={this.props.lists}
                  deleteList={this.props.deleteList}
                />
              </Fragment>
            )}
          />
          <Route
            render={props => (
              <Fragment>
                <ListHeader title="Page Not Found" />
                <NotFound />
              </Fragment>
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
