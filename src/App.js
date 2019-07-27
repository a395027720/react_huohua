import React, { Component } from "react";
import "styles/iconfont/iconfont.css";
import "styles/common.scss";
import "styles/reset.css";

export default class App extends Component {
  componentDidMount() {}
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
