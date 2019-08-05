import React, { Component } from "react";
import "./index.scss";
import code from "images/code.png"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="w flex-row">
          <div className="footer-left flex-4">
            <ul className="flex-column">
              <li>首页</li>
              <li>课程体系</li>
              <li>AI课</li>
              <li>火花知识</li>
              <li>常见问题</li>
              <li>软件下载</li>
              <li>关于我们</li>
            </ul>
          </div>
          <div className="footer-center flex-5 flex-column">
            <p>客服：10109909</p>
            <p style={{ marginTop: 15 }}>工作时间：周一至周日9:00-21:00</p>
            <div className="zhaopin">
              <span>教师招聘 - ls@huohua.cn</span>
            </div>
            <div className="hezuo">
              <span>商务合作 - BD@huohua.cn</span>
            </div>
          </div>
          <div className="footer-right flex-3">
            <p>微信服务号</p>
            <img className="code-img" src={code} alt=""/>
          </div>
        </div>
        <div className="footer-bottom flex-column align-items-center">
            <p>Copyright © 2019 北京心更远科技发展有限公司 版权所有京ICP备16037757号-2</p>
            <p>京公网安备 11010502036019号网络文化经营许可证京网文[2018]7814-639号</p>
          </div>
      </div>
    );
  }
}
