import React, { Component } from "react";
import "styles/iconfont/iconfont.css";
import "styles/normalize.scss";
import "styles/default.scss"
import "./utils/prototype"
export default class App extends Component {
  componentDidMount() {}
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
