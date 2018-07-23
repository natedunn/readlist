// Dependencies
import React, { Fragment } from "react";
// Components
import Header from "./Header";
import Main from "./Main";
// Firebase
import base from "../base";
// Sample data
import sampleData from "../sampleData";

class App extends React.Component {
  state = {
    users: {
      testUser: {}
    }
  };

  componentDidMount() {
    this.ref = base.syncState(`users`, {
      context: this,
      state: "users"
    });
    this._mounted = true;
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    this._mounted = false;
  }

  loadSampleData = () => {
    this.setState({ users: sampleData.users });
  };

  createList = newName => {
    const lists = { ...this.state.users.testUser.lists };
    const key = "list" + Date.now();
    lists[key] = {
      name: newName,
      books: [{}]
    };
    this.setState({
      users: {
        testUser: {
          lists: lists
        }
      }
    });
    this.props.history.push(`list/${key}`);
  };

  deleteList = key => {
    const lists = { ...this.state.users.testUser.lists };
    lists[key] = null;
    this.setState({
      users: {
        testUser: {
          lists: lists
        }
      }
    });
  };

  addBookToList = (key, isbn) => {
    const lists = { ...this.state.users.testUser.lists };
    // const test = {
    //   [isbn]: "isbn",
    //   [key]: "key"
    // };

    lists[key].books = {
      [isbn]: {}
    };
    console.log(lists);
    this.setState({
      users: {
        testUser: {
          lists: lists
        }
      }
    });
  };

  renderMainList = () => {
    if (this._mounted === true) {
      if (this.state.users.testUser !== undefined) {
        if (this.state.users.testUser.lists !== undefined) {
          return (
            <Main
              lists={this.state.users.testUser.lists}
              addBookToList={this.addBookToList}
              createList={this.createList}
              deleteList={this.deleteList}
            />
          );
        }
      } else {
        return (
          <React.Fragment>
            <h1>You don't have any lists yet!</h1>
            <br />
            <button onClick={this.loadSampleData}>Load Sample Data</button>
          </React.Fragment>
        );
      }
    } else {
      return <h2>Loading lists...</h2>;
    }
  };

  render() {
    return (
      <Fragment>
        <Header loadSampleData={this.loadSampleData} />
        <main className="mw6 ml-auto mr-auto">{this.renderListArchive()}</main>
      </Fragment>
    );
  }
}

export default App;
