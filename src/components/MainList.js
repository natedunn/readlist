import React from "react";
import { Link } from "react-router-dom";
import CreateNewList from "./CreateNewList";

class MainList extends React.Component {
  state = {
    ui: {
      createNewList: false
    }
  };
  toggleCreateNewList() {
    const stateCopy = { ...this.state };
    stateCopy["ui"] = {
      createNewList: true
    };
    this.setState({ stateCopy });
  }
  renderCreateNewList() {
    if (this.state.createNewList) {
      return <CreateNewList createNewList={this.props.createNewList} />;
    } else {
      return <a onClick={this.toggleCreateNewList}>Create a new list</a>;
    }
  }
  render() {
    return (
      <div>
        <h1 className="pl3 pr3">All lists</h1>
        <ul>
          {Object.keys(this.props.lists).map(key => (
            <li key={key}>
              <Link to={`/list/${key}`}>{this.props.lists[key].name}</Link>
            </li>
          ))}
        </ul>
        {this.renderCreateNewList()}
      </div>
    );
  }
}

export default MainList;
