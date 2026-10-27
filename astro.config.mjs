import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ahmadilham.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Two themes: the design ships a light default with a dark toggle.
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
