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
      { text: "Blog", link: "/posts/" },
      { text: "Portfolio", link: "https://gurkanozil.github.io" },
    ],

    // Sidebar configuration
    sidebar: [
      {
        text: "My Personal Blog!",
        link: "/posts/",
        items: [
          { text: "My Story", link: "/posts/my-story" },
          {
            text: "Customization Journey",
            link: "/posts/customization-journey",
          },
          {
            text: "Optimizing Life With Tech",
            link: "/posts/optimizing-life-with-tech",
          },
          {
            text: "Neurodivergence and Hyperfocus",
            link: "/posts/neurodivergence-hyperfocus",
          },
          {
            text: "Balancing Multiple Interests",
            link: "/posts/balancing-interests",
          },
          { text: "SWOT Analysis", link: "/posts/swot-analysis" },
          { text: "Note-Taking System", link: "/posts/note-taking-system" },
          { text: "Quotes", link: "/posts/quotes" },
          { text: "VOMIT System", link: "/posts/VOMIT" },
        ],
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
