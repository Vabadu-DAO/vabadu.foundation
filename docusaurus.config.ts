import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "VABADU DAO",
  tagline:
    "COGNITIVE TECHNOLOGY OF SELF-IDENTIFICATION BASED ON FORMULAS OF TALENT AND VICE FOR COORDINATION, ORIENTATION AND NAVIGATION IN THE 4 FREEDOMS, THROUGH DISCOVERY OF YOUR ESSENCE WITH THE HELP OF WORDS",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://Vabadu-DAO.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Vabadu-DAO", // Usually your GitHub org/user name.
  projectName: "vabadu.foundation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Vabadu-DAO/vabadu.foundation/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Vabadu-DAO/vabadu.foundation/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Vabadu DAO",
      logo: {
        alt: "Vabadu DAO",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Proposals",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Proposals",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/vabadu",
            },
            {
              label: "Getgems",
              href: "https://getgems.io/vabadu",
            },
            {
              label: "Youtube Shorts",
              href: "https://www.youtube.com/@vabadu_shorts",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/vabadu-DAO",
            },
          ],
        },
      ],
      copyright: `CC0 ${new Date().getFullYear()} Vabadu DAO. Built with The Open Network.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
