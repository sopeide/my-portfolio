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

  function handleButtonClick(v) {
  if (!v.url) return;

  // 核心改动：手动拼接正确的基础路径
  const correctUrl = v.url.startsWith("http") 
    ? v.url 
    : process.env.PUBLIC_URL + v.url.replace("./", "/");

  if (v.name.includes("Certificate") || v.name.includes("证书")) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(correctUrl, "_blank");
    } else {
      openModal("certificate", {
        title: cardInfo.title,
        src: correctUrl // 确保传给弹窗的是拼接后的正确路径
      });
    }
  } else {
    window.open(correctUrl, "_blank").focus();
  }
}
  
}
