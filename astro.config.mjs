import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://help.lumberlinq.com',
  integrations: [
    starlight({
      title: 'LumberLinq Help',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'LumberLinq',
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          link: '/getting-started/',
        },
        {
          label: 'Tally Sheets',
          items: [
            { label: 'User Manual', link: '/tally-sheets/user-manual/' },
            { label: 'FAQ', link: '/tally-sheets/faq/' },
          ],
        },
        {
          label: 'Shipments',
          items: [
            { label: 'User Manual', link: '/shipments/user-manual/' },
            { label: 'FAQ', link: '/shipments/faq/' },
          ],
        },
        {
          label: 'Business Partners',
          items: [
            { label: 'User Manual', link: '/business-partners/user-manual/' },
            { label: 'FAQ', link: '/business-partners/faq/' },
          ],
        },
        {
          label: 'Products & Loading Sites',
          items: [
            { label: 'User Manual', link: '/products/user-manual/' },
            { label: 'FAQ', link: '/products/faq/' },
          ],
        },
        {
          label: 'Reports, Users & Permissions',
          items: [
            { label: 'User Manual', link: '/reports/user-manual/' },
            { label: 'FAQ', link: '/reports/faq/' },
          ],
        },
      ],
    }),
  ],
});
