import React, { useRef, useEffect } from "react";

// 修改：接收 src 属性
const LifeMap = ({ src, onBack }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const focusIframe = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.focus();
      }
    };

    const timer = setTimeout(focusIframe, 1500);
    window.addEventListener("mousedown", focusIframe);

    return () => {
      window.removeEventListener("mousedown", focusIframe);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      style={{ 
        width: "100vw", 
        height: "100vh", 
        position: "fixed", 
        top: 0, 
        left: 0, 
        zIndex: 99999999, 
        background: "#000",
        overflow: "hidden"
      }}
    >
      <button 
        onClick={onBack}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 100000000,
          padding: "12px 24px",
          cursor: "pointer",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "30px",
          fontWeight: "bold",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
        }}
      >
        ← 返回简历
      </button>

      <iframe
        ref={iframeRef}
        // 修改：使用传入的动态路径
        src={src} 
        title="3D Experience"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block"
        }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default LifeMap;