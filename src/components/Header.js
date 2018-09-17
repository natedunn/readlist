import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="mw7 ml-auto mr-auto mt3 bb b--blue">
        <nav className="flex pt3 pb3">
          <Link className="flex-auto dib b" to={`/`}>
            Readlist
          </Link>
          <ul className="flex-auto tr pl0 mv0 list">
            <li className="dib mr3">
              <Link to={`/`}>Options</Link>
            </li>
            <li className="dib mr3">
              <Link to={`/`}>Sign Out</Link>
            </li>
            <li className="dib mr3">
              <Link className="bg-blue pv1 ph2 white no-underline" to={`/`}>
                Create List
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
