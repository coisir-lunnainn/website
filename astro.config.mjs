import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), svelte()],
  output: "hybrid",
  site: 'https://www.coisirlunnainn.org',
  adapter: cloudflare()
});