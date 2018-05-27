import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {["/", "/list", "/list/:listId", "/test"].map((path, index) => (
        <Route path={path} key={index} render={props => <App {...props} />} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
