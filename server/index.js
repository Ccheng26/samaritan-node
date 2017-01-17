'use strict';

const app = require('./app'),
      PORT = process.env.PORT || 9000,
      pgp = require('pg-promise'),
      //db = pgp(process.env.DATABASE_URL || 'postgres://student_03@localhost:5432/samaritan'),
      session = require('express-session'),
      bcrypt = require('bcryptjs'),
      fetch = require('node-fetch'),
      dotenv = require('dotenv'),
      bodyParser = require('body-parser');

dotenv.config({path: 'config.env'});

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({ type: 'text/html' }));

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


var key = process.env.GUIDESTAR + " " + process.env.KEY
console.log(key)
// fetch('https://quickstartdata.guidestar.org/v1/quickstartsearch?q=ein:54-1774039',
//   {
//       headers: {
//       'Authorization': `${key}`
//       }})
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });
app.post('/search', function (req,res) {
  // var search = req.query.search;
    var search = req.body.text
  // var SearchForm = React.renderToString(SearchFormFactory());
  // res.render('index', { Content: SearchForm});
  fetch('http://localhost:9000/search')
  .then(function(response){
    console.log(response)
    console.log(search)
    console.log("wheeeee")
    console.log('search')
    var jsonObj = JSON.parse(response)
    console.log(jsonObj)
    return res.json(response)

  })

});






