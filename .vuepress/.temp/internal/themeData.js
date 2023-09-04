export const themeData = JSON.parse("{\"autoSetBlogCategories\":true,\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/logo.png\",\"author\":\"smile\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}]},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\",\"icon\":\"LogoKeybase\"},{\"text\":\"分类\",\"link\":\"/categories/category1/2018/1/\",\"icon\":\"Categories\"},{\"text\":\"标签\",\"link\":\"/tags/tag1/1/\",\"icon\":\"Tag\"},{\"text\":\"文档\",\"icon\":\"Folder\",\"children\":[{\"text\":\"vuepress-reco\",\"link\":\"/docs/theme-reco/theme\"},{\"text\":\"vuepress-theme-reco\",\"link\":\"/blogs/other/guide\"}]},{\"text\":\"留言\",\"link\":\"/tags/tag1/1/\",\"icon\":\"Strawberry\"}],\"commentConfig\":{\"type\":\"giscus\",\"options\":{\"repo\":\"smile928/smile928.github.io\",\"repoId\":\"R_kgDOKKvobw\",\"category\":\"Announcements\",\"categoryId\":\"DIC_kwDOKKvob84CZEN6\",\"mapping\":\"title\",\"strict\":\"0\",\"reactionsEnabled\":\"1\",\"emitMetadata\":\"0\",\"inputPosition\":\"bottom\",\"theme\":\"preferred_color_scheme\",\"lang\":\"zh-CN\",\"crossorigin\":\"anonymous\",\"hideComments\":false}},\"algolia\":{\"appId\":\"FU7HKU1M9R\",\"apiKey\":\"9d461e7beecb565130d87295e5281cd2\",\"indexName\":\"smile\",\"inputSelector\":\"### REPLACE ME ####\",\"algoliaOptions\":{\"facetFilters\":[\"lang:$LANG\"]},\"debug\":true}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
