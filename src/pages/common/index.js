import React, { Component } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./index.scss"
export default class Common extends Component {
  render() {
    return (
      <div className="common">
        <div className="common-center">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}
