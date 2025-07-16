import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bemorefree.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://bemorefree.com/',
        'https://bemorefree.com/about/',
        'https://bemorefree.com/neutral-zone/',
        'https://bemorefree.com/practitioner/',
        'https://bemorefree.com/blog/',
        'https://bemorefree.com/booking/free-trial/',
        'https://bemorefree.com/booking/session/',
      ],
    })
  ]
});
