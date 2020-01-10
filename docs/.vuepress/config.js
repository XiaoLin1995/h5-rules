var nav = require('./nav.js')
var {
  HTMLNav,
  ImageNav,
  CSSNav,
  NameNav,
  JSNav
} = nav

var utils = require('./utils.js')
var { getSidebar } = utils

module.exports = {
  base: '/h5-rules/',
  title: 'H5 规范',
  description: '无规矩不成方圆',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  dest: './dist',
  ga: '',
  evergreen: true,
  extend: '@vuepress/theme-default',
  themeConfig: {
    extend: '@vuepress/theme-default',
    sidebarDepth: 1,
    nav: [
      {
        text: 'HTML规范',
        link: '/rules/html/code.md'
      },
      {
        text: '图片规范',
        link: '/rules/image/format.md'
      },
      {
        text: 'CSS规范',
        link: '/rules/css/code.md'
      },
      {
        text: '命名规范',
        link: '/rules/name/dir.md'
      },
      {
        text: 'JS规范',
        link: '/rules/js/language.md'
      }
    ],
    sidebar: {
      '/rules/html/': getSidebar(HTMLNav),
      '/rules/image/': getSidebar(ImageNav),
      '/rules/css/': getSidebar(CSSNav),
      '/rules/name/': getSidebar(NameNav),
      '/rules/js/': getSidebar(JSNav)
    }
    // sidebar: [
    //   {
    //     title: 'HTML规范', // 必要的
    //     collapsable: true, // 可选的, 默认值是 true
    //     sidebarDepth: 0, // 可选的, 默认值是 1
    //     children: getSidebar(HTMLNav)
    //   },
    //   {
    //     title: '图片规范',
    //     children: getSidebar(ImageNav)
    //   },
    //   {
    //     title: 'CSS规范',
    //     children: getSidebar(CSSNav)
    //   },
    //   {
    //     title: '命名规范',
    //     children: getSidebar(NameNav)
    //   },
    //   {
    //     title: 'JS规范',
    //     children: getSidebar(JSNav)
    //   }
    // ]
  }
}