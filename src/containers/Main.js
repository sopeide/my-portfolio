import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

import ModalManager from "../components/ModalManager/ModalManager";
// 引入你的 3D 组件
import LifeMap from "./life-map/LifeMap";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  
  // 控制 3D 地图显示的开关
  const [show3DMap, setShow3DMap] = useState(false);
  // 新增：存储当前打开的 3D 路径
  const [threeDPath, setThreeDPath] = useState("");

  // 新增：弹窗控制状态
  const [modalStatus, setModalStatus] = useState({
    isOpen: false,
    type: "",      // "wechat", "resume", "certificate"
    content: null  // 存储证书的图片路径和标题
  });

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  // 处理进入 3D 世界的逻辑 - 修改：接收 path 参数
  const handleEnter3D = (path) => {
    window.onscroll = null;
    document.body.style.overflow = "hidden";
    setThreeDPath(path); // 设置要加载的路径
    setShow3DMap(true);
  };

  // 处理返回简历的逻辑
  const handleBackToResume = () => {
    document.body.style.overflow = "auto";
    setShow3DMap(false);
    window.location.reload(); 
  };
  
  // 新增：统一打开弹窗的函数
  const openModal = (type, content = null) => {
    setModalStatus({ isOpen: true, type, content });
  };

  const closeModal = () => {
    setModalStatus({ ...modalStatus, isOpen: false });
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {show3DMap ? (
          // 传递动态路径给 LifeMap
          <LifeMap src={threeDPath} onBack={handleBackToResume} />
        ) : (
          <>
            {isShowingSplashAnimation && splashScreen.enabled ? (
              <SplashScreen />
            ) : (
              <>
                <Header openModal={openModal} />
                <Greeting openModal={openModal} />
                <Skills />
                <StackProgress />
                <Education />
                <WorkExperience />
                <Projects />
                <StartupProject handleEnter3D={handleEnter3D} />
                <Achievement openModal={openModal} />
                <Blogs />
                <Talks />
                <Twitter />
                <Podcast />
                <Profile />
                <Footer />
                <ScrollToTopButton />
              </>
            )}
          </>
        )}
        {/* 渲染封装的弹窗组件 */}
        <ModalManager 
          isOpen={modalStatus.isOpen} 
          onClose={closeModal} 
          type={modalStatus.type} 
          content={modalStatus.content} 
        />
      </StyleProvider>
    </div>
  );
};

export default Main;