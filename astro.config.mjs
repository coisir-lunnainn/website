import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  site: "https://coisirlunnainn.dev",
  adapter: cloudflare({
    imageService: "compile"
  }),
  vite: {
    build: {
      rollupOptions: {
        external: ["cloudflare:email"]
      }
    },
    ssr: {
      external: ["os", "path"]
    }
  }
});
