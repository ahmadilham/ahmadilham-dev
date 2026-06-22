import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: 'Ahmad Ilham — engineering notes',
    description:
      'Field notes on software engineering and engineering leadership by Ahmad Ilham.',
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.standfirst,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      categories: note.data.topic ? [note.data.topic] : undefined,
    })),
  });
}
