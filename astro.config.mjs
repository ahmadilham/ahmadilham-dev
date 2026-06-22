import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ahmadilham.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
