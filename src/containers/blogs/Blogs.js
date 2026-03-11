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
    // 确保是严格的字符串 "true" 判断
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        const csdnUsername = blogSection.mediumUsername;

        // 构造 URL。注意：rss2json 有时需要 api_key，如果下面这个免费版失效，说明 CSDN 封锁了该转换器
        const url = `https://api.rss2json.com/v1/api.json?rss_url=https://blog.csdn.net/${csdnUsername}/rss/list`;

        fetch(url)
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error("CSDN RSS 请求失败");
          })
          .then(response => {
            // 增加 status 状态判断
            if (
              response.status === "ok" &&
              response.items &&
              response.items.length > 0
            ) {
              const latestBlogs = response.items.slice(0, 3);
              setMediumBlogsFunction(latestBlogs);
            } else {
              // 如果接口返回 ok 但内容为空，手动触发 Error 显示备选博客
              setMediumBlogsFunction("Error");
            }
          })
          .catch(function (error) {
            console.error("博客抓取错误:", error);
            setMediumBlogsFunction("Error");
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
                        description: extractTextContent(
                          blog.description || blog.content
                        ) // CSDN 文章摘要
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
