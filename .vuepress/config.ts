import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "smile",
  description: "开心贩卖板",
  theme: recoTheme({
    // 自动设置分类，根据文件夹名字和md文件里面的categories同时生效，关闭后只有categories生效
    // autoSetBlogCategories: true,
    // // 自动将分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: {
    //   location: 1, // 默认 0
    //   categoryText: '分类', // 默认 categories
    //   tagText: '标签' // 默认 tags
    // },
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "smile",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "最后更新时间",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" , icon: "LogoKeybase"},
      { text: "分类", link: "/categories/category1/1/" , icon: "Categories" },
      { text: "标签", link: "/tags/tag1/1/" , icon: "Tag"},
      {
        text: "文档",
        icon: "Folder",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
      { text: "留言", link: "/docs/msgBoard" , icon: "Strawberry"},
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },

    // 配置页面：https://giscus.app/zh-CN
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'smile928/smile928.github.io',
        repoId: 'R_kgDOKKvobw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOKKvob84CZEN6',
        mapping: 'title',
        strict: '0',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'bottom',    //评论框放在下边
        theme: 'preferred_color_scheme',    //色彩
        lang: 'zh-CN',
        crossorigin: 'anonymous',
        hideComments: false, // 全局隐藏评论，默认 false
      },
    },
    // Algolia 即时搜索 https://dashboard.algolia.com/account/api-keys/all?applicationId=FU7HKU1M9R
    algolia: {
      appId: 'FU7HKU1M9R',
      apiKey: '9d461e7beecb565130d87295e5281cd2',
      indexName: 'smile',
      inputSelector: '### REPLACE ME ####',
      algoliaOptions: { 'facetFilters': ["lang:zn"] },
      // debug: true // Set debug to true if you want to inspect the dropdown
    },
  }),
  debug: true,
});
