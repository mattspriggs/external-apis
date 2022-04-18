# External APIs - Choose your own adventure!

To get started: 

* Clone this repo

```sh
cd consuming-external-apis
npm install
npm run dev
```

Choose an API to work with, and let's get building! Some possibilities are listed below, or find one of your own!

If you're not sure where to start, we recommend:
  * First use one from lists A or B (these can be consumed from your client-side code)
  * Then use one from lists C or D, or find another API for yourself, to practice using a server-side proxy

There is a basic API route set up for you - you may wish to use this as a template.

#### Things to remember
* Create the functions that make your API calls in `client/apiClient.js`, and call those functions within your React components.
* If you choose an API that enforces CORS or requires an API key, you'll need to consume that API from your server-side, and consume your own API from the client-side (i.e. using your server as a proxy).

#### A. No CORS restrictions, no API key required, simple data structure
* https://www.boredapi.com: suggest a random activity<br>
* https://meowfacts.herokuapp.com: cat facts<br>
* https://dog.ceo/api: dog pictures<br>
* https://thecatapi.com: cat pictures<br>
* https://randomfox.ca/floof: random fox pictures

#### B. No CORS restrictions, no API key required, more complex data structure
* https://pokeapi.co/docs/v2: Pokémon
* https://swapi.dev: Star Wars
* https://disneyapi.dev/docs: Disney characters
* https://open-meteo.com/: weather
* https://api.nasa.gov/api.html: a library of APIs from NASA (picture of the day, natural event tracker, etc.)
* https://wheretheiss.at/w/developer: get the latitude and longitude of the International Space Station

#### C. CORS restrictions
* https://www.affirmations.dev: positive affirmations/quotes
* https://github.com/reedwade/metlink-api-maybe: unofficial api for Metlink in Wellington
* https://openlibrary.org/developers/api: books

#### D. Require an API key
* https://www.omdbapi.com: movies
* https://developer.marvel.com: Marvel comics
* https://the-one-api.dev: Lord of the Rings
* https://data.rijksmuseum.nl/object-metadata/api: Rijksmuseum (art)
* https://docs.opencollective.com/help/contributing/development/api: GraphQL

If any of the examples in this list are out of date, please tell one of your facilitators or raise a Pull Request on this repo!
