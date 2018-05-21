import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

import Sidebar from "./Sidebar";
import readListData from "../ReadListData";

class App extends React.Component {
  state = readListData;

  createNewList = newName => {
    const lists = { ...this.state.lists };
    lists[`list${Date.now()}`] = {
      name: newName,
      books: []
    };
    this.setState({ lists });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="mw8 ml-auto mr-auto">
          <div className="sidebar fl w-30 pa3">
            <Sidebar />
          </div>
          <main className="fl w-70 pa3">
            <Main lists={this.state.lists} createNewList={this.createNewList} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
