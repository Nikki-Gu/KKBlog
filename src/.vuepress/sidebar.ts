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
  ] ,
  "/deeplearning/" :[
    {
      text: "机器学习基础",
      icon: "laptop-code",
      prefix: "ml-basic/",
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
});
