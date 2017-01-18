// require('node-jsx').install({extension: '.jsx'});

const express = require('express'),
      app = express(),
      // for http request logging
      morgan = require('morgan'),
      path = require('path'),
      React = require('react');
// var SearchFormFactory = React.createFactory(require('../src/contact-form.jsx'))

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));



app.get('*', (req, res) => {
  console.log("check")
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  // res.render('index')
});
//add execption
console.log('app.js')


module.exports = app;





