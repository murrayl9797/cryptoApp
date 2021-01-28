# Angle Crypto App

Welcome to my repo for a basic React app displaying some Crypto Information!


## Set up

To install all dependencies and modules, make sure you have all of the files pulled down and you're in the root directory. You'll also need to add a `config.js` file in the root directory of the repo with valid `API_URL` and `API_KEY` from https://coinmarketcap.com/.

Ensure you have Node running on your machine (I was using v10.15.3 while developing this). Once you do that, run `npm install`. The `node_modules` and `package-lock.json` should appear after this command finishes executing.


## Open the page

To finally see the webpage, all you need to do is run `npm start` and navigate to `localhost:3000` on your web browser. Currently, the webpack and other modules are set up for development mode. If you were to send this to production, there would need to be a few modifications.


## Start Express Server

This is simply the client side code and will likely only show example data. Run `npm run apiServer` in the root directory (**in another terminal window**)of the repo to start up an express server. This Express server was needed because the Crypto API doesn't like client side Javascript directly request from it.

