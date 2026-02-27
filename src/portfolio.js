/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yang Chen",
  title: "你好呀, 我是杨晨",
  subTitle: emoji(
    "一位具有扎实模电、数电、半导体物理知识的25届毕业生 🚀 同时也是全栈开发和3D建模的爱好者。熟悉使用各种AI软件配合工作顺利推进，做事细致严谨、耐心专注，"
  ),
  resumeLink:
    "/resume.jpg", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "15380209798@163.com",
  github: "https://github.com/sopeide",
  csdn:"https://blog.csdn.net/qq_65675171",
  wechat:"https://cdn.jsdelivr.net/gh/sopeide/-@main/wx.jpg",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "我的技能树",
  subTitle: "作为测控背景的全栈开发者，我具备从底层电路到上层Web开发的综合能力",
  skills: [
    emoji(
      "⚡ 擅长基于 React/Node.js 的全栈 Web 开发"
    ),
    emoji("⚡ 熟悉单片机、FPGA 及各类传感器的数据采集与测控"),
    emoji(
      "⚡ 掌握数电、模电、半导体物理基础，熟悉器件制备与表征工艺"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "icon-cyuyan", // 假设你在 Iconfont 项目里的 ID 是这个
    },
    {
      skillName: "单片机",
      fontAwesomeClassname: "icon-danpianji", 
    },
    {
      skillName: "3D建模",
      fontAwesomeClassname: "icon-Djianmo", 
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "icon-AutoCAD", 
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "icon-wuguan", 
    },
    {
      skillName: "Office",
      fontAwesomeClassname: "icon-Office", 
    },

    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "江苏科技大学",
      logo: require("./assets/images/xiaohui.png"),
      subHeader: "测控技术与仪器",
      duration: "2021.9 - 2025.6",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets:
      [
        emoji("⚡ 核心课程：单片机原理、自动控制理论、半导体物理、信号与系统。" ),
        emoji("⚡ 3.2/前20%，累计四次获得人民奖学金及国家励志奖学金。"),
        emoji("⚡ 掌握数电、模电、半导体物理基础，熟悉器件制备与表征工艺")
      ]
    },
    {
      schoolName: "华东师范大学",
      logo: require("./assets/images/huadong.png"),
      subHeader: "集成电路",
      duration: "未来某年的9月 - 某年+3的6月",
      desc: "求你收我去上学吧，我超爱上学的",
      descBullets: ["我什么课都爱，老师的话超听，接受007，真的超级超级想上学"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "热爱学习/对万事万物都好奇", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "能量充沛",
      progressPercentage: "99%"
    },
    {
      Stack: "理论知识",
      progressPercentage: "80%"
    },
     {
      Stack: "代码功底",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "软件设计师",
      company: "无人机飞行监测系统",
      companylogo: require("./assets/images/wurenji.png"),
      date: "2025.2 – 2025.5",
      desc: "全栈搭建无人机数据采集 - 传输 - 存储 - 可视化系统，统筹开发体现全栈与创新能力。",
      descBullets: [
        "核心成果：全栈搭建无人机数据全流程系统，安卓采集软件解决无真实无人机的硬件限制；",
        "性能指标：数据传输成功率 99.5%，界面响应延迟≤100ms，体现技术落地的实用性；",
        "能力体现：统筹技术选型与核心开发，展现全栈开发、问题解决与创新实践能力。"
      ]
    },
    {
      role: "电仪设计师",
      company: "豪迈集团",
      companylogo: require("./assets/images/haomai.png"),
      date: "2025.7 – 2025.10",
      // desc: "完成仪表选型与物料精准管控，规范绘制20+张工程图纸且高通过率，三维建模优化布局、解决管线干涉，大幅提升空间利用率。",
      descBullets: [
        "完成 10 + 类仪表阀门选型、物料清单统计与精准管控，严控耗材误差",
        "用 CAD/CAXA 绘制 20 + 张规范工程图纸，一次通过率 95%",
        "E3D/Tekla 建模优化布局，解决管线干涉，空间利用率提升 20%"
      ]
    
    },
    {
      role: "实习生",
      company: "江南造船集团",
      companylogo: require("./assets/images/jiangnan.png"),
      date: "2024.5 – 2024.5",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "参与船舶制造全流程学习，在分段车间实习期间深入了解船体分段建造工艺及生产组织流程。",
        "在船体加工车间开展实习实践，系统学习船体构件加工工艺及相关设备的实际操作流程。"
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "主要项目展示",
  subtitle: "一些我做的项目展示（软件、硬件）",
  projects: [
    {
      image: require("./assets/images/mylife.png"),
      projectName: "My Life 3D Interactive World",
      projectDesc: "基于 WebGL 与物理引擎开发的 3D 个人生涯交互式空间。",
      footerLink: [
        {
          name: "Start Engine (进入世界)",
          url: "/folio/index.html",
          is3D: true
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/myroom.png"),
      projectName: "My 3D Room",
      projectDesc: "交互式 3D 房间展示，通过 Three.js 还原真实生活空间。",
      footerLink: [
        {
          name: "visit room（参观房间）",
          url: "/room/index.html", // 指向新文件夹
          is3D: true
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("成就 和 证书 🏆 "),
  subtitle:
    "成就、证书、获奖证书以及我所完成的一些精彩的事情！",

  achievementsCards: [
    {
      title: "英语四级(CET-4)",
      subtitle:
        "英语读写能力优秀，能够进行英文技术文档的阅读，写一些英文报告.",
      image: require("./assets/images/cet4.png"),
      imageAlt: "CET-4 Logo",
      footerLink: [
        {
          name: "我的证书",
          url: "cet4.jpg"
        }
      ]
    },
    {
      title: "计算机二级(C++)",
      subtitle:
        "熟悉 C 语言程序设计，掌握基本算法与数据结构，具备扎实的计算机底层逻辑基础",
      image: require("./assets/images/c2.png"),
      imageAlt: "NCRE Logo",
      footerLink: [
        {
          name: "我的证书",
          url: "ncre.jpg"
        }
      ]
    },

    {
      title: "国家励志奖学金",
      subtitle: "累计四次获得奖学金，综合测评排名专业前 20%，体现了在理论课程上的优秀掌握程度。",
      image: require("./assets/images/money.png"),
      imageAlt: "Scholarship Logo",
      footerLink: [
        {
          name: "我的证书",
          url: "lizhi.jpg"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "我的博客",
  subtitle:
    "分享我在测控、全栈开发及硬件调试中的技术心得",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  mediumUsername: "qq_65675171",
  blogs: [      //这里bolgs里的内容是在未能读去到csdn的情况下读去的内容
    {
      url: "https://blog.csdn.net/qq_65675171?type=blog",
      title: "我的CSDN主页",
      description:
        "查看更多技术文章"
    },
    {
      url: "https://www.bilibili.com/",
      title: "bilibilibili",
      description:
        "偶尔看看休息休息"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
// 暂时用不着，先false取消展示
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
// 播客，用不着，取消
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section，不提倡下载，在线看就好
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("求你来联系我 ☎️"),
  subtitle:
    "招我给你当牛马 或者 就是交个朋友简单聊聊? 我的邮箱都开放噢。",
  number: "+86-15380209798",
  email_address: "15380209798@163.com"
};

// Twitter Section
// 用不着，false取消
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
