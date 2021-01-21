module.exports = {
  title: 'E-mongolia хөгжүүлэгчийн гарын авлага',
  tagline: 'E-mongolia хөгжүүлэгчийн гарын авлага',
  url: 'https://developer.e-mongolia.mn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'astvision',
  projectName: 'e-mongolia-api-doc',
  themeConfig: {
    hideableSidebar: true,
    gtag: {
      trackingID: 'UA-129610459-2',
    },
    navbar: {
      hideOnScroll: true,
      title: 'E-Mongolia',
      logo: {
        alt: 'e-mongolia logo',
        src: 'img/logo-new.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Заавар',
          position: 'left',
        },
        {
          to: 'services/',
          activeBasePath: 'services',
          label: 'Үйлчилгээнүүд',
          position: 'left',
        },
        {
          to: 'cooperations/',
          activeBasePath: 'cooperations',
          label: 'Хамтрагч байгууллагууд',
          position: 'left',
        },
        /* {to: 'blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/astvision/e-mongolia-api-doc',
          label: 'GitHub',
          position: 'right',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Заавар мэдээлэл',
          items: [
            {
              label: 'Мобайл системийн заавар',
              to: 'docs/',
            },
            {
              label: 'Портал системийн заавар',
              to: 'docs/doc2/',
            },
            {
              label: 'Оператор системийн заавар',
              to: 'docs/doc3/',
            },
            {
              label: 'Систем холбох заавар',
              to: 'docs/mdx/',
            },
          ],
        },
        {
          title: 'Холбоо барих',
          items: [
            {
              label: 'E-mongolia.mn',
              href: 'https://e-mongolia.mn/',
            },
            {
              label: 'Astvision ХХК',
              href: 'http://astvision.mn/',
            },
            {
              label: 'CITA',
              href: 'https://www.cita.gov.mn/',
            },
          ],
        },
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
        href: 'https://e-mongolia.mn',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Харилцаа холбоо, мэдээллийн технологийн газар.`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logo-new.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: `/manifest.json`,
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0, 77, 217)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo-new.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo-new.svg',
            color: 'rgb(0, 77, 217)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo-new.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/astvision/e-mongolia-api-doc/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/astvision/e-mongolia-api-doc/tree/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
