import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark, openModal}) {
  // 处理点击按钮的逻辑
  function handleButtonClick(v) {
    if (!v.url) return;

    // 核心改动：手动拼接正确的基础路径，解决腾讯云 404
    const correctUrl = v.url.startsWith("http") 
      ? v.url 
      : process.env.PUBLIC_URL + (v.url.startsWith("/") ? v.url : "/" + v.url);

    if (v.name.includes("Certificate") || v.name.includes("证书")) {
      // 检测是否为移动端
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // 如果是手机，直接在新窗口打开图片
        window.open(correctUrl, "_blank");
      } else {
        // 如果是电脑，使用 Modal 弹窗展示
        openModal("certificate", {
          title: cardInfo.title,
          src: correctUrl 
        });
      }
    } else {
      // 其他普通链接保持不变
      window.open(correctUrl, "_blank").focus();
    }
  }

  // 【关键：确保这里有 return 语句】
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image.startsWith("/") ? process.env.PUBLIC_URL + cardInfo.image : cardInfo.image}
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