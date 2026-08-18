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

I've opted not to use too many libraries, that's why some of my code may seem a bit verbose, it would look a lot better had I used libs such as [https://tanstack.com](tanstack).
NextJS was choosen for this project because of it's built in "Route Handlers", which is a cool way to mock a real API request. If you'd like to check all of the use cases of the mocked API e.g. missing file, please check the [https://github.com/brenoprata10/tuta-web-project/blob/main/app/api/check-url/route.ts](check-url)
