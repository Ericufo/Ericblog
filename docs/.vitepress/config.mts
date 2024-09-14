import { defineConfig } from "vitepress";
import { getSideBarList } from "./utils"; // 引入 getSideBarList 方法
export default defineConfig({
  base: "/Ericblog/",
  title: "My VitePress Demo Project",
  description: "This is my VitePress demo project",
  appearance: false,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/Ericblog/extension.ico" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "stylesheet", href: "https://xxx.com/static/layui/css/layui.css" },
    ],
    ["script", { src: "https://xxx.com/sdk.js" }],
    [
      "script",
      {},
      `
      console.log('window', window);
      console.log('document', document);
      `,
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "基础",
        link: "/basic/index",
      },
      {
        text: "API",
        link: "/api/index",
      },
      {
        text: "核心篇",
        link: "/core/index",
      },
      {
        text: "实战教学篇",
        items: [
          {
            text: "原生 JS 开发",
            link: "/teach/index",
          },
          {
            text: "Vue",
            link: "/teach/index",
          },
          {
            text: "React",
            link: "/teach/index",
          },
          {
            text: "CRXJS Vue",
            link: "/teach/index",
          },
          {
            text: "CRXJS React",
            link: "/teach/index",
          },
        ],
      },
      {
        text: "实用插件推荐",
        link: "/summarize/index",
      },
      {
        text: "团队",
        link: "/team/index",
      },
    ],
    sidebar: {
      basic: getSideBarList("/basic"),
      api: getSideBarList("/api"),
      core: getSideBarList("/core"),
      teach: getSideBarList("/teach"),
      summarize: getSideBarList("/summarize"),
      team: getSideBarList("/team"),
    },
    outline: {
      level: [2, 4],
      label: "当前页",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Ericufo" }],
    logo: "/ext.svg",
    siteTitle: "Project SitTitle",
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present gqk",
    },
  },
});
