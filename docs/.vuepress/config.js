import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
export default defineUserConfig({
  lang: 'zh-CN',
  logo:'/images/hero.png',
  title: 'teslapeerBlog',
  description: '这是我的第一个 VuePress 站点',
  theme: recoTheme({
    author: '作者昵称',
    authorAvatar: '/images/hero.png',
    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'xxx',
      inputSelector: '### REPLACE ME ####',
      algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    },
    navbar : [
      { text: '指南', link: '/guide/introduce.html', icon: 'Compass' },
      { 
        text: '笔记',
        icon: 'Document',
        children: [
          {
            text: '计算机网络',
            children: [
              { text: 'TCP&IP协议簇',link: '/work/computer_network/TCP&IP_Protocols.html'}
            ]
          },
          { 
            text: 'C++语言', 
            children: [
              { text: 'C&C++基础', link: '/work/C++_Language/C&C++_Fundamentals.html' }
            ]
          }
        ]
      },
      { 
        text: '博客',
        icon: 'Blog', 
        link: '/posts'
      },
      { 
        text: '时间轴',
        icon: 'EventSchedule', 
        link: '/timeline'
      },
      { 
        text: '工具箱',
        icon: 'ToolBox', 
        link: '/link/links'
      }

    ],
    // 自动设置blogs分类
    autoSetBlogCategories: true,

    // 自动设置docs分类
    autoSetSeries: true,
    catalogTitle: '本页目录'
  }),
  plugins: [
    mdEnhancePlugin({
      //tabs: true,
      // 启用代码块分组
      //codetabs: true,
      // 启用下角标功能
      //sub: true,
      // 启用上角标
      //sup: true,
      // 启用图片标记
      //imgMark: true,
      // 开启卡片支持
      card: true,
      // 启用图表
      chart: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true
    })
  ]
})