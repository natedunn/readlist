import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="mw7 mt4 ml-auto mr-auto mt3 bg-white br2">
    <nav className="flex pa4">
      <Link className="flex-auto dib b" to={`/`}>
        Readlist
      </Link>
      <ul className="flex-auto tr pl0 mv0 list">
        <li className="dib mr3">
          <Link to={`/options`}>Options</Link>
        </li>
        <li className="dib mr3">
          <Link to={`/sign-out`}>Sign Out</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
