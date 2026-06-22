import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const notes = await getCollection('notes', ({ data }) => !data.draft);

// Keys become the image path: `/og/<key>.png`.
const pages: Record<string, { title: string; standfirst: string }> = {
  home: {
    title: 'Ahmad Ilham',
    standfirst:
      'Field notes on software engineering and engineering leadership — one position per entry.',
  },
  ...Object.fromEntries(notes.map(({ id, data }) => [id, data])),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.standfirst,
    bgGradient: [
      [16, 16, 16],
      [28, 24, 16],
    ],
    border: { color: [245, 158, 11], width: 12, side: 'inline-start' },
    padding: 70,
    font: {
      title: { color: [240, 240, 240], size: 60, weight: 'Bold', lineHeight: 1.2 },
      description: { color: [165, 165, 165], size: 30, weight: 'Normal', lineHeight: 1.4 },
    },
  }),
});
