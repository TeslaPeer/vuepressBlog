import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
export default defineUserConfig({
  lang: 'zh-CN',
  logo:'/images/hero.png',
  title: 'teslapeerBlog',
  description: '这是我的第一个 VuePress 站点',
  theme: recoTheme({
    author: 作者昵称,
    authorAvatar: '/images/hero.png',
    navbar : [
      { text: '指南', link: '/docs/docs/系列1/分组1-1/笔记1', icon: 'Compass' },
      { 
        text: '笔记',
        icon: 'Document',
        children: [
          {
            text: '系列1',
            children: [
              { text: '分组1-1', link: '/docs/docs/系列1/分组1-1' },
              { text: '分组1-2', link: '/docs/docs/系列1/分组1-2' }
            ],
          },
          {
            text: '系列2',
            children: [
              { text: '分组2-1', link: '/docs/docs/系列2/分组2-1' },
              { text: '分组2-2', link: '/docs/docs/系列2/分组2-2' }
            ],
          },
        ],
      
      }
    ],
    // 自动设置blogs分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
    autoAddCategoryToNavbar: true,
    // 自动设置docs分类
    autoSetSeries: true,
    catalogTitle: '本页目录'
  })
})