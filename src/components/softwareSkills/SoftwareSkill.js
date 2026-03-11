import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {/* 判断：如果是以 icon- 开头，则使用 SVG 渲染 Iconfont */}
                {skills.fontAwesomeClassname.startsWith("icon-") ? (
                  <svg
                    className="icon"
                    aria-hidden="true"
                    style={{
                      fontSize: "45px",
                      height: "1em",
                      width: "1em"
                      // fill: "inherit" // 确保它读取 SCSS 中定义的 color
                    }}
                  >
                    <use xlinkHref={`#${skills.fontAwesomeClassname}`}></use>
                  </svg>
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
