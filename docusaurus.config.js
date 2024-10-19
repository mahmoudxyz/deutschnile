// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DeutschNile',
  tagline: 'Navigate German from the banks of the Nile',

  url: 'https://deutschnile.com',
  baseUrl: '/',

  organizationName: 'mahmoudxyz', 
  projectName: 'deutschnile',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ar'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mahmoudxyz/deutschnile/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/mahmoudxyz/deutschnile/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/deutschnile-social-card.jpg',
      navbar: {
        title: 'DeutschNile',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learning Roadmap',
          },
          {to: '/docs/resources', label: 'Resources', position: 'left'},
          {to: '/blog', label: 'Learning Tips', position: 'left'},
          {
            href: 'https://github.com/mahmoudxyz/deutschnile',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Roadmap',
                to: '/docs/intro',
              },
              {
                label: 'Resources',
                to: '/docs/resources',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://www.facebook.com/groups/deutschnile',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+nb48sbrHKYM1OGNk',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/deutschnile',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mahmoudxyz/deutschnile',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DeutschNile. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;