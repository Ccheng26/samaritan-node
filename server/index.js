'use strict';

const app = require('./app'),
      PORT = process.env.PORT || 9000,
      pgp = require('pg-promise'),
      //db = pgp(process.env.DATABASE_URL || 'postgres://student_03@localhost:5432/samaritan'),
      session = require('express-session'),
      bcrypt = require('bcryptjs'),
      fetch = require('node-fetch'),
      dotenv = require('dotenv');

dotenv.config({path: 'config.env'});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

// searching through propublica
//'https://projects.propublica.org/nonprofits/api/v2/search.json?q=' + searchQuery + 'c_code%5Bid%5D=3'
//
//guidestar
// 'https://quickstartdata.guidestar.org/v1/quickstartsearch?q=keyword:' + Query


  // var search = req.body.search;

var key = process.env.GUIDESTAR + " " + process.env.KEY
console.log(key)
fetch('https://quickstartdata.guidestar.org/v1/quickstartsearch?q=ein:54-1774039',
  {
      headers: {
      'Authorization': `${key}`
      }})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });







