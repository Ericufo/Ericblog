import { defineConfig } from "vitepress";
export default defineConfig({
  base: "/Ericblog/",
  title: "My VitePress Demo Project",
  description: "This is my VitePress demo project",
  appearance: false,
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
    sidebar: [
      {
        text: "基础篇",
        items: [
          { text: "基础篇", link: "/basic/index" },
          { text: "基础篇1", link: "/basic/basic1" },
          { text: "基础篇2", link: "/basic/basic2" },
        ],
      },
      {
        text: "API 篇",
        items: [
          { text: "API篇", link: "/api/index" },
          { text: "API篇1", link: "/api/api1" },
          { text: "API篇2", link: "/api/api2" },
        ],
      },
      {
        text: "核心篇",
        items: [
          { text: "核心篇", link: "/core/index" },
          { text: "核心篇1", link: "/core/core1" },
          { text: "核心篇2", link: "/core/core2" },
        ],
      },
      {
        text: "教学篇",
        items: [
          { text: "教学篇", link: "/teach/index" },
          { text: "教学篇1", link: "/teach/teach1" },
          { text: "教学篇2", link: "/teach/teach2" },
        ],
      },
      {
        text: "总结篇",
        items: [
          { text: "总结篇", link: "/summarize/index" },
          { text: "总结篇", link: "/summarize/summarize1" },
          { text: "总结篇", link: "/summarize/summarize2" },
        ],
      },
      {
        text: "团队篇",
        items: [
          { text: "团队篇", link: "/team/index" },
          { text: "团队篇", link: "/team/team1" },
          { text: "团队篇", link: "/team/team2" },
        ],
      },
    ],
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
