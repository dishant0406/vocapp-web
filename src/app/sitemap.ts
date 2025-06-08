import type { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://vocapp.live',
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://vocapp.live/confirm-waitlist',
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vocapp.live/contact',
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vocapp.live/privacy-policy',
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://vocapp.live/terms-conditions',
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
