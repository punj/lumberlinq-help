# LumberLinq Help Center

Official documentation portal for [LumberLinq](https://lumberlinq.com) — the Timber Management System for timber exporters, importers, traders, and logistics teams.

Live site: **[help.lumberlinq.com](https://help.lumberlinq.com)**

---

## What's Inside

| Section | Content |
|---------|---------|
| Getting Started | Orientation, key concepts, first steps |
| Tally Sheets | Round and square log measurement guides |
| Shipments | Export, import, and domestic shipment management |
| Business Partners | Buyers, sellers, and trade party management |
| Products & Loading Sites | Product catalog and site management |
| Reports, Users & Permissions | Analytics, user invitations, and RBAC |

---

## Tech Stack

- **[Astro 5](https://astro.build)** — static site generator
- **[Starlight](https://starlight.astro.build)** — documentation framework
- **Pagefind** — built-in full-text search (auto-generated at build)

---

## Local Development

**Requirements:** Node.js 20+

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

For the custom domain `help.lumberlinq.com`, add a CNAME record in your DNS:

```
CNAME  help  punj.github.io
```

To deploy manually to a VPS:

```bash
npm run build
rsync -av dist/ user@your-server:/var/www/lumberlinq-help/
```

---

## Adding Documentation

1. Add a new `.md` or `.mdx` file under `src/content/docs/<section>/`
2. Add required frontmatter:
   ```md
   ---
   title: "Page Title"
   description: "One-line description for SEO."
   ---
   ```
3. Update the sidebar in `astro.config.mjs` if adding a new section
4. Push to `main` — CI builds and deploys automatically

Screenshots go in `public/screenshots/<section>/` and are referenced as `/screenshots/section/filename.png`.

---

## Disclaimer

The documentation in this repository describes the LumberLinq application as it exists at the time of writing. Features, UI, and workflows may change. Screenshots are captured from the live application and are for illustrative purposes only.

LumberLinq is a product of Rikexim. This help portal is maintained alongside the main application.

---

## License

[MIT](LICENSE) — documentation content and site source code.

Application screenshots are copyright © Rikexim. They are included solely for user assistance purposes.
