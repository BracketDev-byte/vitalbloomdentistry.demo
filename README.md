This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Strapi Integration (Typed)

This project includes a typed Strapi v4 client and actions for blogs and categories.

### Required environment variables

Add the following to your `.env.local`:

```
BACKEND_PUBLIC_BASE_URL=https://your-strapi-domain
# Optional if you are querying protected content:
BACKEND_API_TOKEN=your_strapi_token
```

Notes:
- `BACKEND_PUBLIC_BASE_URL` should include the protocol and domain. Example: `https://cms.example.com`.
- If Strapi returns relative media URLs, the client will make them absolute using `BACKEND_PUBLIC_BASE_URL`.

### Where to call Strapi

- List page: `src/app/blogs/page.tsx` uses `getBlogPosts()` and `getCategories()` from `src/actions/query-actions.ts`.
- Detail page: `src/app/blogs/[slug]/page.tsx` uses `getBlogPostBySlug(slug)`.

### Available typed actions

```ts
import { getBlogPosts, getCategories, getBlogPostBySlug } from '@/actions/query-actions';

const posts = await getBlogPosts(); // { data: BlogListItem[] }
const categories = await getCategories(); // { data: CategoryItem[] }
const post = await getBlogPostBySlug('my-slug'); // BlogDetail | null
```

These actions return UI-friendly data (no `any`). See `src/actions/query-actions.ts` for the exact types.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
