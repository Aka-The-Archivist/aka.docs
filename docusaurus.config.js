// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Aka Backend Wiki', tagline: 'Express Fast Backend Framework', favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://aka-the-archivist.github.io', // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/wiki.aka/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Aka-The-Archivist', // Usually your GitHub org/user name.
    projectName: 'wiki.aka', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw', onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en', locales: ['en'],
    },

    presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                // Remove this to remove the "edit this page" links.
                // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            }, blog: {
                showReadingTime: true, // Please change this to your repo.
                // Remove this to remove the "edit this page" links.
                // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            }, theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),],],

    themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/aka-image-card.png', navbar: {
                title: 'Aka Backend Wiki', logo: {
                    alt: 'Aka Backend Wiki Logo', src: 'img/logo.svg',
                }, items: [{
                    type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Getting Started',
                }, {to: '/blog', label: 'Blog', position: 'left'}, {
                    href: 'https://github.com/Aka-The-Archivist/aka.backend', label: 'GitHub', position: 'right',
                },],
            }, footer: {
                style: 'dark', links: [{
                    title: 'Docs', items: [{
                        label: 'Getting Started', to: '/docs/category/getting-started',
                    },],
                }, {
                    title: 'Community', items: [{
                        label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/aka.backend',
                    },],
                }, {
                    title: 'More', items: [{
                        label: 'GitHub', href: 'https://github.com/Aka-The-Archivist/aka.backend',
                    },],
                },], copyright: `Copyright © 2023 Aka The Archivist`,
            }, prism: {
                theme: lightCodeTheme, darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
