This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You can test the app in its deployed version here -link to app- , or if you wanna run it locally you can clone the repo and run `npm install` to make sure all dependencies are in order.

NOTE: Keep in mind that if you run the project locally, you'll need to use your own API key to make use of the google maps API.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##### The Idea

I live in a small town with ~10k people and fairly scattered. Knowing which businesses are open when can be challenging, so the main idea behind this app is to be able to check what businesses are open around a certain radius from the user, by combining the Geolocation API provided by browsers with google maps Places API, and asking it to trace a route by foot.
Quite a bit of trial and error went into having a working environment to work on this one... Ended up digging a tunnel with Ngrok so I could have my phone's browser with an HTTPS (instead of http) address, which enables the Geolocation API to ping the browser and ask for permission to locate the device (where as if it's an http connection, the permission is instantly declined since it isn't safe). Also kept my phone connected to the PC to see the console and being able to work over phone stuff directly on the big screen.
Ended up getting a comfortable working environment, and API issue has been resolved!
