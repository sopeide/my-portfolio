import React from "react";
import "./ModalManager.scss";

const ModalManager = ({ isOpen, onClose, type, content }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="custom-modal-close" onClick={onClose}>×</button>
        
        <div className="custom-modal-content">
          {/* 微信逻辑保持不变，但建议路径也加上 process.env.PUBLIC_URL */}
          {type === "wechat" && (
            <div className="modal-inner">
              <h3>添加我的微信</h3>
              <img 
                src={process.env.PUBLIC_URL + "/wx.jpg"} 
                alt="WeChat" 
                style={{ width: "250px" }} 
              />
            </div>
          )}

          {/* 【重点修改】：简历/证书 逻辑，从 iframe 改为 img */}
          {(type === "resume" || type === "certificate") && (
            <div className="modal-inner" style={{ height: "auto", textAlign: "center" }}>
              <h3>{content?.title || "预览"}</h3>
              <div className="image-container" style={{ 
                maxHeight: "80vh", 
                overflowY: "auto", // 如果图片过长可以滚动
                padding: "10px" 
              }}>
                <img 
                  src={content?.src} 
                  alt="Preview"
                  style={{ 
                    maxWidth: "100%", // 宽度自适应容器
                    height: "auto",   // 高度按比例缩放
                    borderRadius: "4px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalManager;