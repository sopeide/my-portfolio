import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, onClick}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : "_self"}
        // 增加下面这一行，解决安全警告
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
}
