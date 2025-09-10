// src/app/sitemap.ts
import { getConferences } from '@/services/conferenceService';
import { getJournals } from '@/services/journalService';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.pureresearchinsights.com'; // Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticRoutes = [
    '',
    '/about',
    '/conference',
    '/publications',
    '/ipr-services',
    '/internship',
    '/contact-us',
    '/privacy-policy',
    '/publications/overview',
    '/publications/journal-support',
    '/publications/conference-proceedings',
    '/publications/peer-review',
    '/publications/digital-library',
    '/ipr-services/patent',
    '/ipr-services/trademark',
    '/ipr-services/copyright',
    '/ipr-services/eb1-consultancy',
    '/conference/about-conference',
    '/conference/plan-conference',
    '/conference/awards',
    '/conference/faq',
    '/conference/upcoming-conferences',
    '/conference/past-conferences',
    '/conference/upcoming-webinars',
    '/conference/past-webinars',
    '/conference/scientific-gallery',
    '/conference/conference-videos',

  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic conference pages
  const conferences = await getConferences();
  const conferenceRoutes = conferences.map((conference) => ({
    url: `${BASE_URL}/conference/${conference.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...conferenceRoutes];
}
