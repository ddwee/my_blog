// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  articles,
};