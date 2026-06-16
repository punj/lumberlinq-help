import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://help.lumberlinq.com',
  integrations: [
    starlight({
      title: 'LumberLinq Help',
      logo: {
        src: './src/assets/logo.png',
        alt: 'LumberLinq',
        replacesTitle: true,
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
          label: 'Dashboard',
          link: '/dashboard/',
        },
        {
          label: 'Tally Sheets',
          items: [
            { label: 'User Manual', link: '/tally-sheets/user-manual/' },
            { label: 'FAQ', link: '/tally-sheets/faq/' },
            { label: 'Transport Units', link: '/tally-sheets/transport-units/' },
          ],
        },
        {
          label: 'Inventory',
          link: '/inventory/',
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
        {
          label: 'Utilities',
          link: '/utilities/',
        },
        {
          label: 'Account & Settings',
          items: [
            { label: 'Company Profile & Branding', link: '/account-settings/company-profile/' },
            { label: 'User Profile', link: '/account-settings/user-profile/' },
            { label: 'Subscriptions & Plans', link: '/account-settings/subscriptions/' },
            { label: 'Storage', link: '/account-settings/storage/' },
            { label: 'Support Tickets', link: '/account-settings/support-tickets/' },
          ],
        },
      ],
    }),
  ],
});
