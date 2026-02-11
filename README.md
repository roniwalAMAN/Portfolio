# Aman Roniwal – Portfolio

Modern, production-ready portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and MDX blogging. Focused on real-time systems, backend performance, and scalable architecture.

## Quickstart

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

## Environment variables

Create `.env.local`:

```
RESEND_API_KEY=your-resend-key          # optional, for contact form delivery
CONTACT_TARGET_EMAIL=you@example.com    # where contact form sends
```

If `RESEND_API_KEY` or `CONTACT_TARGET_EMAIL` are missing, the contact API logs the payload instead of sending.

## Project structure

- `app/` – App Router pages, API route for contact form
- `components/` – Reusable UI, layout, theme toggle, sections
- `data/profile.ts` – Content for bio, projects, experience, skills
- `content/blog/` – MDX posts (rendered via `next-mdx-remote`)
- `public/Aman-Roniwal-Resume.pdf` – Replace with your full CV

## MDX blog

- Add posts in `content/blog/*.mdx` with frontmatter: `title`, `summary`, `date`, `tags`, `readingTime`.
- Posts render at `/blog/[slug]` and preview on the homepage.

## Contact API

- `POST /api/contact` validates payload with Zod.
- Sends email via Resend when keys are configured; otherwise logs payload for local dev.

## Deploy

Deploy on Vercel:

```bash
pnpm install
pnpm build
```

Set the environment variables in Vercel project settings. The site is fully static except for the contact API route.

## Lighthouse targets

- Mobile-first, responsive layout
- Optimized metadata/OpenGraph
- Motion via Framer Motion
- Prefers-reduced-motion respected by browser defaults

## License

MIT
