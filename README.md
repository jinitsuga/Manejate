

## Getting Started

You can test the app in its deployed version here https://find-open.vercel.app/, (better if you test it on a cellphone as it needs geolocation to work properly) or if you wanna run it locally you can clone the repo and run `npm install` to make sure all dependencies are in order.

NOTE: Keep in mind that if you run the project locally, you'll need to use your own API key to make use of the google maps API.



Then, run the development server which will probably use Port 3000:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

-- The App is in Spanish, so the further notes will be in Spanish. If you'd like me to make it in English as well, let me know and I'll see if I can make it happen :)

![findOpenGif](https://github.com/jinitsuga/find-open/assets/73081185/3cd1accf-bd5e-45ce-8520-17a717f342d4)

- Permite que la app te ubique
- Selecciona un radio que no te moleste recorrer 😂 (hasta 5km)
- Inspecciona los lugares, separados por categorías posiblemente importantes para viajeros
- Al clickar "Cómo ir" se te mostrará un mapa que te lleva de donde estés al lugar que elegiste

Estuve pensando distintas maneras de hacer algún tipo de caching, para que la gente que hace requests muy cerca de otra pueda utilizar su misma data, tal vez guardando la data de las reqs en una DB? Pero luego tendría que comparar cada request a las demás requests de las DB, y no sé cuánta ventaja o performance realmente estoy ganando con eso.
Seguramente haya alguna manera de optimizar algún con algún tipo de cache, y si se me viene o la aprendo en el futuro, seguramente la implemente.

Enjoy!
