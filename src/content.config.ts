import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const imageSchema = z.union([
  z.string(),
  z.object({
    src: z.string(),
    alt: z.string().optional(),
  }),
]);

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    status: z.enum(["draft", "scheduled", "published"]).optional(),
    publishAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),
    topicCluster: z.string().optional(),
    priority: z.number().optional(),
    internalLinks: z.array(z.string()).default([]),
    image: imageSchema.optional(),
  }),
});

export const collections = { blog };
