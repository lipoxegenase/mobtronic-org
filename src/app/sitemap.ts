import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mobtronic.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mobtronic.org/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mobtronic.org/blog/ehr-consolidation-post-acquisition',
      lastModified: new Date('2026-08-31'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://mobtronic.org/blog/tefca-compliance-2026',
      lastModified: new Date('2026-08-31'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  ];
}
