// @ts-check
import { defineConfig } from 'astro/config';

// TODO: Replace `site` with your production domain before deploying.
// It is used to build canonical URLs, the sitemap, and Open Graph tags.
export default defineConfig({
  site: 'https://technoliberals.com',
  // Tailwind is wired through PostCSS (postcss.config.mjs), so no extra
  // integration is required. This keeps the dependency surface minimal.
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
