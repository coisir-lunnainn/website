import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  site: 'https://www.coisirlunnainn.org',
  adapter: cloudflare({
    imageService: 'compile'
  }),
  image: squooshImageService(),
});