import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Login from "@/pages/login";
import Common from "@/pages/common";
import Home from "@/pages/home";
import Nomatch from "@/pages/nomatch";
import Course from "@/pages/course"

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Common>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/course" component={Course} />
                    <Redirect to="/home" />
                    <Route component={Nomatch} />
                  </Switch>
                </Common>
              )}
            />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}
