const path = require('path');

module.exports = {
  title: 'Хөгжүүлэгчийн гарын авлага',
  tagline: 'E-Mongolia системийг бусад системтэй интеграци хийхэд зориулсан гарын авлага',
  url: 'https://developer.e-mongolia.mn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'astvision',
  projectName: 'e-mongolia-api-doc',
  customFields: {
    orgParams: {
      entityType: 'CITIZEN',
      branchType: 'PORTAL',
      type: 'GOV_AGENCY'
    },
    mobileParams: {
      type: 'SECTOR',
      branchType: 'MOBILE'
    },
    operatorParams: {
      type: 'SECTOR',
      branchType: 'OPERATOR'
    },
    portalParams: {
      type: 'SECTOR',
      branchType: 'PORTAL'
    }
  },
  themeConfig: {
    hideableSidebar: true,
    gtag: {
      trackingID: 'UA-129610459-2'
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'e-mongolia-api-doc',
      contextualSearch: true
      // searchParameters: {},
    },
    announcementBar: {
      id: 'under-development',
      content: '&#10071;&#10071;&#10071; <b style="color:darkred">Энэхүү сайт нь хөгжүүлэгдэж байгаа болно. </b>'
    },
    navbar: {
      hideOnScroll: true,
      title: 'E-Mongolia',
      logo: {
        alt: 'e-mongolia logo',
        src: 'img/logo-new.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Гарын авлага',
          position: 'left'
        },
        {
          to: 'services/',
          activeBasePath: 'services',
          label: 'Үйлчилгээнүүд',
          position: 'left'
        },
        {
          to: 'cooperations/',
          activeBasePath: 'cooperations',
          label: 'Хамтрагч байгууллагууд',
          position: 'left'
        }
        // {
        //   to: 'docs/service1',
        //   activeBasePath: 'cooperations',
        //   label: 'Services',
        //   position: 'left',
        // },
        /* {to: 'blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/astvision/e-mongolia-api-doc',
          label: 'GitHub',
          position: 'right',
        }, */
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Гарын авлага',
          items: [
            {
              label: 'Гарын авлагын тухай',
              to: 'docs/'
            },
            {
              label: 'Мобайл системийн гарын авлага',
              to: 'docs/mobile/intro'
            },
            {
              label: 'Портал системийн гарын авлага',
              to: 'docs/portal/intro/'
            },
            {
              label: 'Оператор системийн гарын авлага',
              to: 'docs/operator/intro/'
            },
            {
              label: 'Систем холбох гарын авлага',
              to: 'docs/system/'
            }
          ]
        },
        {
          title: 'Холбоо барих',
          items: [
            {
              label: 'E-Mongolia',
              href: 'https://e-mongolia.mn/'
            },
            {
              label: 'Аствишн ХХК',
              href: 'http://www.astvision.mn/'
            },
            {
              label: 'ХХМТГ',
              href: 'https://www.cita.gov.mn/'
            }
          ]
        }
        /* {
          title: 'Бусад холбоосууд',
          items: [
            {
              label: 'Блог',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/astvision/e-mongolia-api-doc',
            },
          ],
        }, */
      ],
      logo: {
        alt: 'E-mongolia Full Logo',
        src: 'img/logo-new-light.svg',
        href: 'https://e-mongolia.mn'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Харилцаа холбоо, мэдээллийн технологийн газар.`
    }
  },
  plugins: [
    [
      path.resolve(__dirname, 'plugins', 'data-loader'),
      {
        name: 'data-loader'
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logo-new.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: `/manifest.json`
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0, 77, 217)'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo-new.png'
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo-new.svg',
            color: 'rgb(0, 77, 217)'
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo-new.png'
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000'
          }
        ]
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
          // editUrl:
          //   'https://github.com/astvision/e-mongolia-api-doc/tree/master/docs/',
        },
        blog: {
          showReadingTime: true
          // editUrl:
          //   'https://github.com/astvision/e-mongolia-api-doc/tree/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
