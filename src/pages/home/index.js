import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import "react-id-swiper/lib/styles/css/swiper.css";
import "./index.scss";

import img1 from "../../static/images/youshi1.jpg";
import img2 from "../../static/images/youshi2.jpg";
import img3 from "../../static/images/youshi3.jpg";
import img4 from "../../static/images/youshi4.jpg";
import img5 from "../../static/images/youshi5.jpg";
import img6 from "../../static/images/youshi6.jpg";
import rightarrow from "../../static/images/right-arrow.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home-swiper">
          <Swiper {...homeSwiperParams}>
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
        <div className="home-youshi w">
          <h2 className="youshi-title">火花思维课程的六大优势</h2>
          <p className="youshi-subtitle">深厚积累 匠心创新</p>
          <div className="youshi-list">
            <div className="flex-4">
              <div className="list-item">
                <img src={img1} />
                <p>十年沉淀 一线团队创新打造</p>
              </div>
            </div>
            <div className="flex-4">
              <div className="list-item">
                <img src={img2} />
                <p>在线直播沉浸式课堂体验</p>
              </div>
            </div>
            <div className="flex-4">
              <div className="list-item">
                <img src={img3} />
                <p>1对4/6 小班授课</p>
              </div>
            </div>
            <div className="flex-4">
              <div className="list-item">
                <img src={img4} />
                <p>1对4/6 小班授课</p>
              </div>
            </div>
            <div className="flex-4">
              <div className="list-item">
                <img src={img5} />
                <p>1对4/6 小班授课</p>
              </div>
            </div>
            <div className="flex-4">
              <div className="list-item">
                <img src={img6} />
                <p>1对4/6 小班授课</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bihuan">
          <h2 className="bihuan-title">科学学习闭环</h2>
          <p className="bihuan-subtitle">
            每个级别 4个阶段 5大模块 20个专题 循环巩固 螺旋上升
          </p>
          <div className="w">
            <div className="bihuan-content flex-row">
              <div className="content-left flex-4">
                <div className="left-item one">
                  <p>
                    每个年级 <span>四个阶段</span>{" "}
                  </p>
                </div>
                <div className="left-item two">
                  <p>
                    每个阶段 <span>五个专题</span>{" "}
                  </p>
                </div>
                <div className="left-item three">
                  <p>
                    每个专题 <span>四节课程</span>{" "}
                  </p>
                </div>
                <div className="left-item four">
                  <p>
                    每一节课 <span>五大环节</span>{" "}
                  </p>
                </div>
              </div>
              <div className="content-right flex-8">
                <div className="one flex-row">
                  <div className="item">
                    <p>A阶段</p>
                  </div>
                  <div className="item">
                    <p>B阶段</p>
                  </div>
                  <div className="item">
                    <p>C阶段</p>
                  </div>
                  <div className="item">
                    <p>D阶段</p>
                  </div>
                </div>
                <div className="two flex-row align-items-center">
                  <p>数感运用</p>
                  <i />
                  <p>图形空间</p>
                  <i />
                  <p>逻辑推理</p>
                  <i />
                  <p>生活应用</p>
                  <i />
                  <p>益智游戏</p>
                </div>
                <div className="three flex-row align-items-center">
                  <p>数感运用</p>
                  <i />
                  <p>图形空间</p>
                  <i />
                  <p>逻辑推理</p>
                  <i />
                  <p>生活应用</p>
                  <i />
                  <p>益智游戏</p>
                </div>
                <div className="four flex-row align-items-center">
                  <p>数感运用</p>
                  <i />
                  <p>图形空间</p>
                  <i />
                  <p>逻辑推理</p>
                  <i />
                  <p>生活应用</p>
                  <i />
                  <p>益智游戏</p>
                </div>
              </div>
            </div>
            <div className="bihuan-process">
              <ul className="process flex-row">
                <li>入学测评</li>
                <li>入门课</li>
                <li>课堂学习</li>
                <li>
                  《火花秘籍》
                  <br />
                  《计算锦囊》
                </li>
                <li>个性化补充题</li>
                <li>专题测评</li>
                <li>
                  数理思维
                  <br />
                  趣味挑战
                </li>
                <li>年度测评</li>
                <li>
                  个性化
                  <br />
                  短期班
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-dynamic">
          <div className="w">
            <Swiper
              getSwiper={swiper => (this.swiper = swiper)}
              {...homeDynamicParams}
            >
              <div className="slider-item flex-column">
                <img
                  src="https://asset.txqn.huohua.cn/assets/3c5f5489-189f-41b0-961f-776393993304.png"
                  alt=""
                />
                <p>文字</p>
              </div>
              <div className="slider-item flex-column">
                <img
                  src="https://asset.txqn.huohua.cn/assets/3c5f5489-189f-41b0-961f-776393993304.png"
                  alt=""
                />
                <p>文字</p>
              </div>
              <div className="slider-item flex-column">
                <img
                  src="https://asset.txqn.huohua.cn/assets/3c5f5489-189f-41b0-961f-776393993304.png"
                  alt=""
                />
                <p>文字</p>
              </div>
            </Swiper>
            <div className="swiper-button-next" onClick={this.goNext} />
            <div className="swiper-button-prev" onClick={this.goPrev} />
          </div>
        </div>
      </div>
    );
  }

  goNext = () => {
    if (this.swiper !== null) {
      this.swiper.slideNext();
    }
  };

  goPrev = () => {
    if (this.swiper !== null) {
      this.swiper.slidePrev();
    }
  };
}

const homeSwiperParams = {
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
const homeDynamicParams = {
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 3000
  }
};
