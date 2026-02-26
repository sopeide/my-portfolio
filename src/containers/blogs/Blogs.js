import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  // 下面这个函数负责把 CSDN 的 HTML 内容提取成纯文字描述
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    // 只有在 portfolio.js 里设置 displayMediumBlogs 为 "true" 时才执行
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        // 第一步：确定 CSDN 用户名。优先 from portfolio.js 读取，没有则用默认
        const csdnUsername = blogSection.mediumUsername || "你的CSDN用户名";
        
        // 第二步：构造 CSDN 的 RSS 转换接口 URL
        // 添加 &t= 时间戳强制刷新缓存，确保抓取到最新的文章
        const url = `https://api.rss2json.com/v1/api.json?rss_url=https://blog.csdn.net/${csdnUsername}/rss/list&t=${new Date().getTime()}`;

        fetch(url) // 这一步改掉了原本的 fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error("网络请求失败");
          })
          .then(response => {
            // 第三步：将返回的文章列表存入状态
            // 使用 slice(0, 3) 确保只展示最新的三篇文章
            if (response.items && response.items.length > 0) {
              const latestBlogs = response.items.slice(0, 3);
              setMediumBlogsFunction(latestBlogs);
            }
          })
          .catch(function (error) {
            console.error(
              `${error} (由于此错误，无法显示博客板块。已自动切换回默认显示)`
            );
            setMediumBlogsFunction("Error");
            // 如果报错，可以根据需要决定是否关闭显示
            // blogSection.displayMediumBlogs = "false"; 
          });
      };
      getProfileData();
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {/* 判断逻辑：如果关闭了自动抓取或者抓取失败，显示 portfolio.js 里手动填写的博客 */}
            {blogSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  );
                })
              : // 如果抓取成功，显示 CSDN 的文章卡片
                mediumBlogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.link, // CSDN 文章链接
                        title: blog.title, // CSDN 文章标题
                        description: extractTextContent(blog.description || blog.content) // CSDN 文章摘要
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}