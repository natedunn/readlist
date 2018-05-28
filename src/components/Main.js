import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainList from './MainList';
import BookList from './BookList';
import NotFound from './NotFound';

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
              createList={this.props.createList}
              deleteList={this.props.deleteList}
            />
          )}
        />
        <Route
          exact
          path="/list/:listId"
          render={props => <BookList {...props} lists={this.props.lists} deleteList={this.props.deleteList}/>}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Main;
