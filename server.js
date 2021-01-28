/*
* Simple Express server that is used because the API will not let
* you make a request from client-side code.
*/

// Pull in dependencies
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 4444;

// Pull sensitive info from config file
const { API_KEY, API_URL } = require('./config.js');

// Cors Middleware
app.use(cors());

// Main (Single Route)
app.get('/apikey', (req, res) => {

  // When client tries to hit server, request external API
  axios({
    method: 'get',
    url: API_URL,
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY,
      'Accept': 'application/json',
      'Accept-Encoding': 'deflate, gzip'
    }
  })
  .then(resp => {
    // API Success
    console.log(`Successful Request! Send to Client`);
    res.status(200).send(resp.data);
  })
  .catch(err => {
    // API Failure
    console.log(`Error in hitting API! Send 404`);
    res.sendStatus(404);
  })
})


// Kick up server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})