# Next.js Auth Starter

This template uses [Clerk Authentication](https://www.clerk.com/?utm_source=github&utm_medium=template_repos&utm_campaign=nextjs_template) in a Next.js application.

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for login, signup, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

## Demo

A hosted demo of this example is available at [next-auth-starter.vercel.app](https://next-auth-starter.vercel.app/)

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerkinc%2Fclerk-next-app&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fnextjs%2Fget-started-with-nextjs%23set-environment-keys&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fnextjs%2Fget-started-with-nextjs)

## Running the template

```bash
git clone https://github.com/getamas/next-auth-starter
```

To run the example locally you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=github&utm_medium=template_repos&utm_campaign=nextjs_template).
2. Go to [Clerk's dashboard](https://dashboard.clerk.com?utm_source=github&utm_medium=template_repos&utm_campaign=nextjs_template) and create an application.
3. Set the required Clerk environment variables as shown in [the example env file](./.env.template).
4. `npm install` the required dependencies.
5. `npm run dev` to launch the development server.
