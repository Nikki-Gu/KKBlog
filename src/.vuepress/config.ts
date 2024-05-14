import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/KKBlog/",

  lang: "zh-CN",
  title: "KK's Blog",
  description: "KK的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
