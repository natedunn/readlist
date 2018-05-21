import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="bb b--black-30 bg-white">
        <div className="mw8 ml-auto mr-auto pa3">
          <b className="dib w-50">
            <Link to={`/`}>Readlists.io</Link>
          </b>
          <nav className="dib w-50">
            <ul className="tr">
              <li className="list dib mr3">Home</li>
              <li className="list dib mr3">Profile</li>
              <li className="list dib">Settings</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
