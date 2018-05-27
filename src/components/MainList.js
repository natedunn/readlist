import React from 'react';
import { Link } from 'react-router-dom';
import CreateNewList from './CreateNewList';

class MainList extends React.Component {
  constructor() {
    super();
    this.state = {
      ui: {
        createNewListOpen: false
      }
    };
  }

  toggleCreateNewList = boolean => {
    var ui = { ...this.state.ui };
    ui = {
      createNewListOpen: boolean
    };
    this.setState({ ui });
  };

  renderCreateNewList() {
    if (this.state.ui.createNewListOpen) {
      return (
        <div>
          <CreateNewList
            ui={this.state.ui}
            createNewList={this.props.createNewList}
            toggleCreateNewList={this.toggleCreateNewList}
          />
        </div>
      );
    } else {
      return (
        <div className="bg-white pa3 br2">
          <a href={undefined} onClick={() => this.toggleCreateNewList(true)}>
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
            <li className="bg-white pa3 mb2 br2" key={key}>
              <Link to={`/list/${key}`}>{this.props.lists[key].name}</Link>
            </li>
          ))}
        </ul>
        {this.renderCreateNewList()}
      </React.Fragment>
    );
  }
}

export default MainList;
