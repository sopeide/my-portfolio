import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia({ openModal }) {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.csdn ? (
        <a  
          href={socialMediaLinks.csdn} 
          className="icon-button csdn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="csdn-icon">
            <svg className="icon" aria-hidden="true" width="20" height="20">
              {/* 这里 #icon-csdn 对应你在 Iconfont 项目里看到的图标 ID */}
              <use xlinkHref="#icon-csdn1"></use> 
            </svg>
          </i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.wechat ? (
        <a
          href=" "
          className="icon-button wechat"
          // 【核心修改点】：不再跳转网页，而是触发弹窗
          onClick={(e) => {
            e.preventDefault();
            openModal("wechat"); 
          }}
          rel="noopener noreferrer"
        >
          <i className="wechat-icon">
            <svg className="icon" aria-hidden="true" width="20" height="20">
              <use xlinkHref="#icon-weixin"></use>
            </svg>
          </i>
          <span></span>
        </a>
      ) : null}
      
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
