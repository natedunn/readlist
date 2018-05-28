import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import sampleData from '../sampleData';
import base from "../base";

class App extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`users`, {
      context: this,
      state: 'users'
    });
    this._mounted = true;
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    this._mounted = false;
  }

  loadSampleData = () => {
    this.setState({ users: sampleData.users })
  };

  createList = newName => {
    const lists = { ...this.state.users.testUser.lists };
    const key = 'list' + Date.now();
    lists[key] = {
      name: newName,
      books: {}
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

  renameList = key => {

  };

  renderMainList = () => {
    // if(this.state.users.testUser.lists.length) {
    if (this._mounted === true) {
      if(this.state.users.testUser.lists) {
        return (
          <Main
            lists={this.state.users.testUser.lists}
            createList={this.createList}
            deleteList={this.deleteList}
          />
        )
      } else {
        return (
          <React.Fragment>
            <h1>You don't have any lists yet!</h1>
            <br/>
            <a onClick={this.props.loadSampleData}>Load Sample Data</a>
          </React.Fragment>
        );
      }
    } else {
      return (
        <h2>Loading lists...</h2>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header loadSampleData={this.loadSampleData} />
        <div className="flex mw8 ml-auto mr-auto">
          <div className="sidebar fl w-30 pa3">
            <Sidebar />
          </div>
          <main className="fl w-70 pa3">
            {this.renderMainList()}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
