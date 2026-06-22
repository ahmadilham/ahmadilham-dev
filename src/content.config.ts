import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    // The plainly-stated position this note takes — shown as a standfirst.
    standfirst: z.string(),
    date: z.coerce.date(),
    // Short topic label shown in the eyebrow, e.g. "Tooling", "Stakeholders".
    topic: z.string(),
    // Optional: the LinkedIn article this grew out of.
    source: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
