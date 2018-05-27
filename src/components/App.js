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

  createNewList = newName => {
    const lists = { ...this.state.users.testUser.lists };
    lists[`list${Date.now()}`] = {
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
  };

  renderMainList = () => {
    // if(this.state.users.testUser.lists.length) {
    if (this._mounted === true) {
      if(this.state.users.testUser.lists) {
        return <Main lists={this.state.users.testUser.lists} createNewList={this.createNewList} />
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
