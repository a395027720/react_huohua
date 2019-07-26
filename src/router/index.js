import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import App from "../App"
import Login from ""
export default class Rouer extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Rouer path="/login" component={} />
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}
