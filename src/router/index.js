import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import App from "../App"
import Login from "@/pages/login"
import Home from "@/pages/home"
export default class Rouer extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Rouer path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}
