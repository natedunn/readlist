import React from "react";
import { Link } from "react-router-dom";
import CreateNewList from "./CreateNewList";

class MainList extends React.Component {
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
        <CreateNewList createNewList={this.props.createNewList} />
      </div>
    );
  }
}

export default MainList;
