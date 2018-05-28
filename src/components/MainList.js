import React from 'react';
import { Link } from 'react-router-dom';
import CreateList from './CreateList';

class MainList extends React.Component {
  constructor() {
    super();
    this.state = {
      ui: {
        createListOpen: false
      }
    };
  }

  toggleCreateList = boolean => {
    var ui = { ...this.state.ui };
    ui = {
      createListOpen: boolean
    };
    this.setState({ ui });
  };

  handleClickDelete = key => {
    this.props.deleteList(key);
  }

  rendercreateList() {
    if (this.state.ui.createListOpen) {
      return (
        <div>
          <CreateList
            ui={this.state.ui}
            createList={this.props.createList}
            toggleCreateList={this.toggleCreateList}
          />
        </div>
      );
    } else {
      return (
        <div className="bg-white pa3 br2">
          <a href={undefined} onClick={() => this.toggleCreateList(true)}>
            + Create a new list
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="pl3 pr3">All lists</h1>
        <ul className="list pl0">
          {Object.keys(this.props.lists).map(key => (
            <li className="bg-white pa3 mb2 br2 flex" key={key}>
              <div className="w-50">
                <Link to={`/list/${key}`}>{this.props.lists[key].name}</Link>
              </div>
              <div className="w-50 tr">
                <a href={undefined} onClick={() => this.handleClickDelete(key)}>Delete</a>
              </div>
            </li>
          ))}
        </ul>
        {this.rendercreateList()}
      </React.Fragment>
    );
  }
}

export default MainList;
