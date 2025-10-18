import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/pages" })
});

const config = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/data" })
});

export const collections = { pages, config };
