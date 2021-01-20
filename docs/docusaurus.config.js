module.exports = {
  title: 'E-mongolia хөгжүүлэгчийн гарын авлага',
  tagline: 'E-mongolia хөгжүүлэгчийн гарын авлага',
  url: 'https://astvision.github.io',
  baseUrl: '/e-mongolia-api-doc/',
  // baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'astvision',
  projectName: 'e-mongolia-api-doc',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
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
        {to: 'blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/astvision/e-mongolia-api-doc',
          label: 'GitHub',
          position: 'right',
        },
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
        {
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
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Харилцаа холбоо, мэдээллийн технологийн газар.`,
    },
  },
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
