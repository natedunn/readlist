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
      <div className="mw8 ml-auto mr-auto ba b--black-30 bg-white">
        {console.log(this)}
        <Header />
        <main>
          {/* Sidebar */}
          <div className="sidebar fl w-20 pa4">
            <Sidebar />
          </div>
          {/* Main */}
          <div className="fl w-80 pa4">
            <Main lists={this.state.lists} createNewList={this.createNewList} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
