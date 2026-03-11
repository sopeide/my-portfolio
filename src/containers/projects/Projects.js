import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio"; // 确保这里引入了配置
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    // 【核心修改点 1】：如果配置里 display 是 false，直接跳过 fetch 逻辑
    if (!openSource.display) {
      return; 
    }

    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (GitHub data fetching failed)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  // 【核心修改点 2】：增加对 openSource.display 的严格判断
  if (
    openSource.display && 
    repo && 
    repo !== "Error" && 
    Array.isArray(repo) && 
    repo.length > 0
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(`Github Object for repository number : ${i} is undefined`);
                return null;
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    // 如果不展示或者报错，直接返回空（即之前的 FailedLoading）
    return <FailedLoading />;
  }
}