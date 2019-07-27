import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import "react-id-swiper/lib/styles/css/swiper.css";
import "./index.scss";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="swiper">
          <Swiper {...params}>
            <div className="slider-item  live-lesson">
              <div className="w flex-row">
                <div className="left flex-6">
                  <h2 className="title">在线少儿</h2>
                  <h2 className="subtitle">数理思维直播课</h2>
                  <p className="desc">
                    全面提升儿童数理思维能力和专注力 <br />
                    教育行业一线团队专注十年积累打造
                    <br />
                    高品质小班直播教学，科技推动教育公平
                    <br />
                    100%原创课件，全程专属辅导老师跟进服务
                  </p>
                  <div className="btns">
                    <Link className="mfst" to="/">
                      免费试听
                    </Link>
                    <Link className="ljwm" to="/">
                      了解我们
                    </Link>
                  </div>
                </div>
                <div className="right flex-6">
                  <img
                    src="https://asset.txqn.huohua.cn/image/f08c5162-411a-41c3-baf7-53a27012d186.png?imageView2/2/w/640/format/png/"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="slider-item huohua-ai">
              <div className="w flex-row">
                <div className="left flex-6">
                  <h2 className="title">在线少儿</h2>
                  <h2 className="subtitle">数理思维直播课</h2>
                  <p className="desc">
                    全面提升儿童数理思维能力和专注力 <br />
                    教育行业一线团队专注十年积累打造
                    <br />
                    高品质小班直播教学，科技推动教育公平
                    <br />
                    100%原创课件，全程专属辅导老师跟进服务
                  </p>
                  <div className="btns">
                    <Link className="mfst" to="/">
                      马上了解
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    );
  }
}

const params = {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  autoplay: {
    delay: 3000
  }
};
