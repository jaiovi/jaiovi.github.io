import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
    work: defineCollection({
        loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
        // Change schema to a function that receives { image }
        schema: ({ image }) => z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.coerce.date(),
            type: z.string(),
            tags: z.array(z.string()),
            software: z.array(z.string()).optional(),
            // Now image() will correctly transform the string path into an object
            img: image(), 
            img_alt: z.string().optional(),
            link: z.string().optional(),
        }),
    }),
};