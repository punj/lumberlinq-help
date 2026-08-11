import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://help.lumberlinq.com',
  integrations: [
    starlight({
      title: 'LumberLinq Help',
      logo: {
        src: './src/assets/logo-icon.png',
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
          label: 'Account, Login & Sign Up',
          items: [
            { label: 'User Manual', link: '/account/user-manual/' },
            { label: 'FAQ', link: '/account/faq/' },
          ],
        },
        {
          label: 'Dashboard, Utility, Storage & Support',
          items: [
            { label: 'User Manual', link: '/platform-basics/user-manual/' },
            { label: 'FAQ', link: '/platform-basics/faq/' },
          ],
        },
        {
          label: 'Tally Sheets',
          items: [
            { label: 'User Manual', link: '/tally-sheets/user-manual/' },
            { label: 'FAQ', link: '/tally-sheets/faq/' },
          ],
        },
        {
          label: 'Sharing & Exporting Tally Sheets',
          items: [
            { label: 'User Manual', link: '/tally-share-export/user-manual/' },
            { label: 'FAQ', link: '/tally-share-export/faq/' },
          ],
        },
        {
          label: 'Consignments',
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
          label: 'Products & Locations',
          items: [
            { label: 'User Manual', link: '/products/user-manual/' },
            { label: 'FAQ', link: '/products/faq/' },
          ],
        },
        {
          label: 'Inventory',
          items: [
            { label: 'User Manual', link: '/inventory/user-manual/' },
            { label: 'FAQ', link: '/inventory/faq/' },
          ],
        },
        {
          label: 'Mill Operators & Custom-Made',
          items: [
            { label: 'User Manual', link: '/operators/user-manual/' },
            { label: 'FAQ', link: '/operators/faq/' },
          ],
        },
        {
          label: 'Reports',
          items: [
            { label: 'User Manual', link: '/reports/user-manual/' },
            { label: 'FAQ', link: '/reports/faq/' },
          ],
        },
        {
          label: 'Inviting Team Members',
          items: [
            { label: 'User Manual', link: '/invite-user/user-manual/' },
            { label: 'FAQ', link: '/invite-user/faq/' },
          ],
        },
        {
          label: 'User Management',
          items: [
            { label: 'User Manual', link: '/user-management/user-manual/' },
            { label: 'FAQ', link: '/user-management/faq/' },
          ],
        },
        {
          label: 'RBAC & Access Roles',
          items: [
            { label: 'User Manual', link: '/rbac/user-manual/' },
            { label: 'FAQ', link: '/rbac/faq/' },
          ],
        },
        {
          label: 'Session Security',
          items: [
            { label: 'User Manual', link: '/session-security/user-manual/' },
            { label: 'FAQ', link: '/session-security/faq/' },
          ],
        },
        {
          label: 'Company Settings',
          items: [
            { label: 'User Manual', link: '/company/user-manual/' },
            { label: 'FAQ', link: '/company/faq/' },
          ],
        },
        {
          label: 'Subscriptions & Billing',
          items: [
            { label: 'User Manual', link: '/subscriptions/user-manual/' },
            { label: 'FAQ', link: '/subscriptions/faq/' },
          ],
        },
      ],
    }),
  ],
});
