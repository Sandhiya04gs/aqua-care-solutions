# Aqua Care Solutions website (React + Vite)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Product photos
Put images in `public/images/products/` and set `image: "/images/products/name.jpg"` in `src/data/products.js`.
Without a photo (or if it fails to load) a built-in illustration is shown.

## Future backend
`src/services/api.js` is the place to connect Django REST Framework + MySQL later.
Enquiries currently open WhatsApp (+91 72000 10271); nothing is stored.

## Deploy (free)
    npm run build
Upload the `dist` folder to Netlify (drag and drop) or connect the repo to Vercel.
`public/_redirects` and `vercel.json` make page links like /products/smart-ro work after refresh.
