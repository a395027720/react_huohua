import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeTab: 0
  };
  render() {
    return (
      <div className="header ">
        <div className="w flex-row">
          <div className="flex-2 flex-row align-items-center">
            <a className="logo" href="/" />
          </div>
          <div className="flex-9 navi flex-row align-items-center">
            <ul className="flex-row">{this.renderTabs()}</ul>
          </div>
          <div className="flex-1 login flex-row align-items-center">
            <a className="btn" href="#">
              登录
            </a>
          </div>
        </div>
      </div>
    );
  }

  renderTabs() {
    return tabs.map((item, index) => {
      return (
        <li key={index} onClick={this.handleClickTab.bind(this, index)}>
          <NavLink to={item.path}>{item.title}</NavLink>
          <i className={this.state.activeTab === index ? "active" : ""} />
        </li>
      );
    });
  }

  handleClickTab(index) {
    this.setState({
      activeTab: index
    });
  }
}

const tabs = [
  {
    title: "首页",
    path: "/"
  },
  {
    title: "课程体系",
    path: "/system"
  },
  {
    title: "AI课",
    path: "/aicourse"
  },
  {
    title: "火花知识",
    path: "/knowledge"
  },
  {
    title: "常见问题",
    path: "/problem"
  },
  {
    title: "软件下载",
    path: "/download"
  },
  {
    title: "关于我们",
    path: "/about"
  }
];
