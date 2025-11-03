import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/pages" })
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/events" })
});

const config = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/data" })
});

export const collections = { pages, config, events };
