'use strict';

const app = require('./app'),
      PORT = process.env.PORT || 9000,
      pgp = require('pg-promise'),
      //db = pgp(process.env.DATABASE_URL || 'postgres://student_03@localhost:5432/samaritan'),
      session = require('express-session'),
      bcrypt = require('bcryptjs'),
      fetch = require('node-fetch'),
      dotenv = require('dotenv'),
      bodyParser = require('body-parser'),
      express = require('express'),
      router = express.Router();

dotenv.config({path: 'config.env'});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

// searching through propublica
//'https://projects.propublica.org/nonprofits/api/v2/search.json?q=' + searchQuery + 'c_code%5Bid%5D=3'
//
//guidestar
// 'https://quickstartdata.guidestar.org/v1/quickstartsearch?q=keyword:' + Query

// app.get('/search', function (req,res) {
//   var search = req.body.search;
//   // var SearchForm = React.renderToString(SearchFormFactory());
//   // res.render('index', { Content: SearchForm});
//   fetch('localhost:3000')
//   .then(function(response){
//     return response.text()
//     console.log(response)
//     console.log("wheeeee")
//   })
//   res.render('index',data)
// });

var something = [];
// request for search parameter and plug into the api
app.post('/search', function (req,res) {
  // var search = req.query.search;
  var search = req.body.search
  // var SearchForm = React.renderToString(SearchFormFactory());
  // res.render('index', { Content: SearchForm});
  fetch('http://localhost:9000/search')
  .then(function(response){
    var key = process.env.GUIDESTAR + " " + process.env.KEY
    // console.log(key)
    console.log(search)
    fetch('https://quickstartdata.guidestar.org/v1/quickstartsearch?q=' + search,
      {headers: {'Authorization': `${key}`}})
    .then(function(response) { // check if fetch request goes through
      if (response.status !== 200) { // if not successful, error
        console.log('Error Status Code: ' + response.status);
        }
      response.json().then(function(data) {
      // if response is 200, check data
        console.log("*****************")
        var parse = data.hits
        parse.forEach(function(e){
          var name = e.organization_name
          var address= `${e.city} ${e.state} ${e.zip}`
          something.push({name, address})
        })
      })
      console.log('8888888888838838383838838383838383838838383')
      // console.log(data)
      })
    .catch(function(err) { // if error with guidestar fetch request
      console.log('Fetch Error :-S', err); // log the error
      })
    })
  .catch(function(error){ // if error with the search fetch request
    console.log('Fetch Error :-S', error); // log this error
  })
  // res.render('index', search)
  console.log(search)
  console.log("-------------")

});

app.get('/search', function(req,res) {
  res.send(something);
})


module.exports = router;




