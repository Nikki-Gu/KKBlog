import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/backend/" : [
    {
      text: "Java",
      icon: "mug-hot",
      collapsible: true,
      prefix: "java/",
      children: "structure",
    },
    {
      text: "计算机基础",
      icon: "laptop-code",
      collapsible: true,
      prefix: "cs-base/",
      children: "structure",
    },
    {
      text: "数据库",
      icon: "database",
      collapsible: true,
      prefix: "database/",
      children: "structure",
    },
    {
      text: "框架学习",
      icon: "book",
      collapsible: true,
      prefix: "frameworks/",
      children: "structure",
    },
    {
      text: "开发工具",
      icon: "hand",
      collapsible: true,
      prefix: "devtools/",
      children: "structure",
    },
    {
      text: "系统设计",
      icon: "sliders",
      collapsible: true,
      prefix: "system-design/",
      children: "structure",
    },
  ] ,
  "/deeplearning/" :[
    {
      text: "机器学习基础",
      icon: "laptop-code",
      prefix: "ml-basic/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "数学相关",
      icon: "book",
      prefix: "math/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/algorithm/" :[
    {
      text: "Hot100",
      icon: "code-commit",
      prefix: "Hot100/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "笔试总结",
      icon: "file-code",
      prefix: "coding-test/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/reading/": "structure",
});
