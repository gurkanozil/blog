import { defineConfig } from "vitepress";

/**
 * {@link https://vitepress.dev/reference/site-config}
 */
export default defineConfig({
  base: "/blog/",
  lang: "en-US",
  // Blog title
  title: "G.M. Blog",

  // Blog description
  description: "Personal blog created using VitePress",

  /**
   * Theme configuration
   * {@link https://vitepress.dev/reference/default-theme-config}
   */
  themeConfig: {
    // Navigation links
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Portfolio", link: "https://gurkanozil.github.io" },
    ],

    // Sidebar configuration
    sidebar: [
      {
        text: "My Personal Blog!",
        link: "/blog/",
        items: [{ text: "My Story", link: "/blog/my-story" }],
      },
    ],

    // Social links
    socialLinks: [
      { icon: "github", link: "https://github.com/gurkanozil" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/gurkanozil/" },
    ],

    // Footer configuration
    footer: {
      copyright:
        'Copyright © 2025 <a href="https://gurkanozil.github.io" target="_blank" rel="noopener noreferrer">G.M. Özil</a>',
    },
  },
});
