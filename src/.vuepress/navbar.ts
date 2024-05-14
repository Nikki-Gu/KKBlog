import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Java后端",
    icon: "lightbulb",
    link: "/backend/README.md"
  },
  {
    text: "深度学习",
    icon: "robot",
    link: "/deeplearning/README.md"
  },
  {
    text: "刷题笔记",
    icon: "code",
    link: "/algorithm/README.md"
  },
  {
    text: "关于本站",
    icon: "circle-info",
    prefix: "/intro/",
    children: [
      {
        text: "关于作者",
        link: "intro.md",
      },
      {
        text: "网站制作",
        link: "intro-blog.md",
      },
      // {
      //   text: "更新历史",
      //   icon: "lightbulb",
      //   prefix: "foo/",
      //   children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      // },
    ],
  },
]);
