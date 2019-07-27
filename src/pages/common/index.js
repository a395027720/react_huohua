import React, { Component } from "react";
import {Link} from "react-router-dom"
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./index.scss";
export default class Common extends Component {
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
              <Link to="/" className="dhzx" href="#">
                <i className="iconfont">&#xe6f4;</i>电话咨询
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
