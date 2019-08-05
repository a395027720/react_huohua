import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { Component } from "react";

import "./index.scss";

export default class Common extends Component {
  state = {
    dhzxShow: false,
  };

 
  

  render() {
    return (
      <div className="common">
        <Header />
        {this.props.children}
        <Footer />
        <div className="float-btns ">
          <ul>
            <li>
              <Link to="/" className="mfst" href="#">
                <i className="iconfont">&#xe60d;</i>
                免费试听
              </Link>
            </li>
            <li>
              <Link to="/" className="zxzx" href="#">
                <i className="iconfont">&#xe711;</i>在线咨询
              </Link>
            </li>
            <li>
              <CSSTransition
                in={this.state.dhzxShow}
                timeout={500}
                classNames="dhzx"
              >
                <Link
                  to="/"
                  className="dhzx"
                  href="#"
                  onMouseEnter={this.handleMouseEnter.bind(this)}
                  onMouseLeave={this.handleMouseLeave.bind(this)}
                >
                  <i className="iconfont">&#xe6f4;</i>电话咨询&nbsp;
                  &nbsp;10109909
                </Link>
              </CSSTransition>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  handleMouseEnter() {
    if (this.state.dhzxShow) return;
    this.setState({
      dhzxShow: true
    });
  }
  handleMouseLeave() {
    this.setState({
      dhzxShow: false
    });
  }

  
}
