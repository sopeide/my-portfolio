import React from "react";
import "./ModalManager.scss"; // 待会儿我们会写这个样式

const ModalManager = ({ isOpen, onClose, type, content }) => {
  if (!isOpen) return null; // 如果没打开，直接不渲染，不占位

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="custom-modal-close" onClick={onClose}>×</button>
        
        <div className="custom-modal-content">
          {/* 微信逻辑 */}
          {type === "wechat" && (
            <div className="modal-inner">
              <h3>添加我的微信</h3>
              <img src="/wx.jpg" alt="WeChat" style={{ width: "250px" }} />
            </div>
          )}

          {/* 简历/证书 PDF 逻辑 */}
          {(type === "resume" || type === "certificate") && (
            <div className="modal-inner" style={{ height: "100%" }}>
              <h3>{content?.title || "预览"}</h3>
              <iframe 
                src={content?.src} 
                title="PDF Preview" 
                style={{ width: "100%", height: "70vh", border: "none" }} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalManager;