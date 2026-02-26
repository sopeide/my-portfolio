import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark, openModal}) {
  // 处理点击按钮的逻辑
  function handleButtonClick(v) {
    if (v.name.includes("Certificate") || v.name.includes("证书")) {
      // 【核心改动】：检测是否为移动端
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // 如果是手机，直接打开 PDF 链接（手机浏览器会自动处理预览或提示下载）
        window.open(v.url, "_blank");
      } else {
        // 如果是电脑，继续使用你的丝滑弹窗
        openModal("certificate", {
          title: cardInfo.title,
          src: v.url 
        });
      }
    } else {
      // 其他普通链接保持不变
      if (!v.url) return;
      window.open(v.url, "_blank").focus();
    }
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => handleButtonClick(v)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
