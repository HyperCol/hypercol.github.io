import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

module.exports = {
  lang: 'zh-CN',
  title: 'MGC Docs',
  description: 'Minecraft Graphic Community Documents',
  port: "8080",
  head: [
    ["link", { rel: "icon", href: "/images/MGC-logo.png" }],
  ],
  plugins: [
    docsearchPlugin({
      appId: 'AMQJCXFVUL',

      apiKey: 'e64416ca58d284aad513747ae45fc027',

      indexName: 'mgcd - hypercol',

      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    },),
  ],
  theme: defaultTheme({
    logo: '/images/MGC-logo.png',
    logoDark: '/images/MGC-darklogo.png',
    notFound: ["404 Not Found，页面丢失。"],
    backToHome: "<-回到首页",
    // repo: 'HyperCol/MGCD',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'BetterRTX',
        link: '/instructions/better_rtx/'
      },
      {
        text: '社区介绍',
        link: '/guide/',
      },
      {
        text: '作品集锦',
        children: [
          {
            text: '作品表格',
            children: [
              '/works/java_shaders/',
              '/works/java_resourcepacks/',
              '/works/bedrock_shaders/',
              '/works/bedrock_resourcepacks/'
            ],
          },
          {
            text: '使用指南',
            children: [
              {
                text: '安装光影',
                link: '/instructions/java_shaders/',
              },
              {
                text: '安装材质',
                link: '/instructions/java_resourcepacks/',
              },
            ],
          },
        ],
      },
      {
        text: '大众科普',
        children: [
          {
            text: '基础科普',
            children: [
              '/science/',
              '/science/shaders-base.md',
              '/science/shaders-tech.md',
              '/science/resourcepacks.md',
              '/science/render.md',
              '/science/film.md',
            ],
          },
          {
            text: '误区纠正',
            children: [
              '/science/qas/',
              '/science/qas/shader.md',
              '/science/qas/texture.md',
              '/science/qas/RT_mistakes.md',
            ],
          },
        ],
      },
      {
        text: '疑难解答',
        children: [
          '/answer_java/',
          {
            text: '光影加载',
            link: '/answer_java/shaders.md',
          },
          {
            text: '视频设置',
            link: '/answer_java/settings.md',
          },
          {
            text: '模组兼容',
            link: '/answer_java/mods.md',
          },
        ]
      },
      {
        text: '创作指南',
        children: [
          {
            text: '创作者指南',
            link: '/creator/'
          },
          {
            text: '资料整理',
            link: '/creator/resources.md'
          },
        ],
      },
      {
        text: '关于',
        children: [
          {
            text: '关于文档',
            link: '/about.md',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/HyperCol/MGCD',
          },
        ]
      },
    ],

    //左侧列表
    sidebar: {
      '/guide/': [
        '/guide/',
        '/guide/attention.md',
        '/guide/others.md',
      ],
      '/science/': [
        '/science/',
        '/science/shaders-base.md',
        '/science/shaders-tech.md',
        '/science/resourcepacks.md',
        '/science/render.md',
        '/science/film.md',
        {
          text: '误区纠正-导言',
          link: '/science/qas/',
        },
        '/science/qas/shader.md/',
        '/science/qas/texture.md/',
        '/science/qas/RT_mistakes.md/'
      ],
      '/answer_java/': [
        '/answer_java/',
        '/answer_java/shaders.md',
        '/answer_java/settings.md',
        '/answer_java/mods.md',
      ],
      '/creator/': [
        '/creator/',
        '/creator/resources.md',
      ],
      '/instructions/': [
        {
          text: 'Java版光影',
          collapsible: true,
          children: [
            '/instructions/java_shaders/',
            '/instructions/java_shaders/itt2.md',
            '/instructions/java_shaders/itt3.md'
          ],
        },
        {
          text: 'Java版材质',
          collapsible: true,
          children: [
            '/instructions/java_resourcepacks/',
            '/instructions/java_resourcepacks/05.md',
            '/instructions/java_resourcepacks/itp.md',
            '/instructions/java_resourcepacks/mtp.md',
            '/instructions/java_resourcepacks/tmeo.md'
          ],
        },
        {
          text: 'BetterRTX',
          collapsible: true,
          children: ['/instructions/better_rtx/']
        }
      ],
      '/works/': [
        '/works/java_shaders.md',
        '/works/java_resourcepacks.md',
        '/works/bedrock_shaders.md',
        '/works/bedrock_resourcepacks.md',
      ]
    },
  })
}