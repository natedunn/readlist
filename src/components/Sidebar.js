import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfileCard from "./ProfileCard";

class Sidebar extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ProfileCard} />
      </Switch>
    );
  }
}

export default Sidebar;
