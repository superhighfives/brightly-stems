# Brightly stems

A one-page site where my band, Brightly, shared the stems of our songs for people to remix. The stems were 24-bit, 44.1kHz WAV files hosted on SoundCloud, released under a [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/3.0/) license.

Status: archived. Made in 2012, last updated in 2013, and ran on Heroku. Not maintained, and the SoundCloud links are long gone. Brightly's site now lives at [wewerebrightly.com](https://wewerebrightly.com).

## Running it

```sh
npm install
node app.js     # serves on http://localhost:4567, or PORT if set
```

It uses Express 2.4, so it needs a very old version of Node. A copy of `node_modules` is checked in.

## How it works

- `app.js` is an Express server with one route that renders `views/index.jade`, and compiles the LESS in `public/` on the fly.
- `views/layout.jade` pulls the page together from `views/includes/` and an album section from `views/albums/`. Only Preflight Nerves is included. Sarah and Tokyo are still in the folder.
