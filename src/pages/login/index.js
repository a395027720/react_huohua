import React, { Component } from "react";
import "./index.scss";
import { addClass, removeClass } from "utils/utils";
export default class Login extends Component {
  state = {
    
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleWindowScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll.bind(this));
  }

  /**
   * el.classList.add(value) 添加类名，如果有则不添加
   * el.classList.contains(value) 判断是否存在类名，返回Boolean值
   * el.classList.remove(value) 从列表中删除类名
   * el.classList.toggle(value) 切换类名：如果列表中存在则删除，否则添加
   */
  handleWindowScroll() {
    let _this = this;
    let a, b, c;
    a = document.documentElement.clientHeight;
    b = document.documentElement.scrollTop;
    let els = document.querySelectorAll(".list li").forEach((el, index) => {
      c = el.offsetTop;
      console.log('打印',el);
      
      if (a + b > c) {
        el.classList.add("move");
      } else {
        el.classList.remove("move");
      }
    });
  }

  render() {
    return (
      <ul className="list">
        <li>
          <p>第1屏动画进入视线</p>
        </li>
        <li>
          <p>第2屏动画进入视线</p>
        </li>
        <li>
          <p>第3屏动画进入视线</p>
        </li>
      </ul>
    );
  }
}
