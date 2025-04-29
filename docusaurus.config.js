// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bluejay docs',
  tagline: 'Governify Bluejay documentation',
  favicon: 'img/favicon.ico',
  url: 'https://docs.bluejay.governify.io',
  baseUrl: '/',
  organizationName: 'governify',
  projectName: 'bluejay-docs', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  scripts: [{ defer: true, src: '/js/external_sidebar_links.js'}],
  presets: [[ '@docusaurus/preset-classic', { 
    docs: { routeBasePath: '/', editUrl: 'https://github.com/governify/bluejay-docs/edit/main', showLastUpdateAuthor: true, showLastUpdateTime: true },
    theme: { customCss: require.resolve('./css/custom.css') }  
  }]],
  markdown: { mermaid: true },
  themes: [
    '@docusaurus/theme-mermaid',
  ],
  themeConfig: {
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    navbar: {
      logo: { alt: 'Governify', src: 'img/governify.svg' },
      title: 'Bluejay Docs',
      hideOnScroll: true,
      items: [
        {
          to: 'https://github.com/governify',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          target: '_blank',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ]
    },
    algolia: {
      appId: 'YQHRCYNID5',
      apiKey: '9b86903fbb22c3d88d39db14789b3ce0',
      indexName: 'bluejay-governify',
      contextualSearch: true,
      searchParameters: {}, 
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
};

module.exports = config;
