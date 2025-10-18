import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: "server",
  site: "https://coisirlunnainn.org",
  adapter: cloudflare({
    imageService: "compile"
  }),
  vite: {
    build: {
      rollupOptions: {
        external: ["cloudflare:email", "cloudflare:workers"]
      }
    },
    ssr: {
      external: ["node:os", "path", "cloudflare:workers"]
    }
  }
});
