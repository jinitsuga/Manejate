This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##### The Idea

-- Project potentially paused since Google Places API asks for a CREDIT CARD in order to be used, to confirm "you're not a bot" --
I live in a small town with ~10k people and fairly scattered. Knowing which businesses are open when can be challenging, so the main idea behind this app is to be able to check what businesses are open around a certain radius from the user, by combining the Geolocation API provided by browsers with google maps Places API.
Quite a bit of trial and error went into having a working environment to work on this one... Ended up digging a tunnel with Ngrok so I could have my phone's browser with an HTTPS (instead of http) address, which enables the Geolocation API to ping the browser and ask for permission to locate the device (where as if it's an http connection, the permission is instantly declined since it isn't safe). Also kept my phone connected to the PC to see the console and being able to work over phone stuff directly on the big screen.
Ended up getting a comfortable working environment, so hopefully I can resolve the Google Places API issue soon...
