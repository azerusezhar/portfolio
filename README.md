# Portfolio Website

My personal portfolio website built with Next.js and Tailwind CSS.

## Environment Variables

The following environment variables are required to run this application:

```
RESEND_API_KEY=your_resend_api_key_here
```

You must add your Resend API key to the environment variables on your hosting platform (e.g., Vercel) for the contact form to work properly.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file with the required environment variables
4. Run the development server: `npm run dev`

## Build

To build the application for production:

```bash
npm run build
```

## Technology Stack

- Next.js 15
- Tailwind CSS
- TypeScript

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
