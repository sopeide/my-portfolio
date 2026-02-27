import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting({ openModal }) {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  // 1. 修改点击处理函数，增加 process.env.PUBLIC_URL 确保路径万无一失
  const handleResumeClick = (e) => {
      e.preventDefault();
      // 核心：使用 PUBLIC_URL 获取正确的图片地址
      const resumeImgPath = process.env.PUBLIC_URL + "/resume.jpg"; 

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.open(resumeImgPath, "_blank");
      } else {
        // 这里的 src 也必须带上环境路径
        openModal("resume", { title: "个人简历预览", src: resumeImgPath });
      }
  };

  return (
    <Fade bottom duration={1000} distance="40px">

      {/* <SocialMedia openModal={openModal} />  */}

      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              
              <SocialMedia openModal={openModal}/>

              <div className="button-greeting-div">
                <Button text="联系我" href="#contact" />
                {greeting.resumeLink && (
                  <Button 
                    text="查看我的简历" 
                    // href="/resume.pdf" 
                    newTab={true}
                    // 【修改点 3】：绑定点击事件
                    onClick={handleResumeClick}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
