// Reactjs and jsx utils
require('node-jsx').install({extension: '.jsx'});
var React = require('react');
var Router = require('react-router');

// React App components and api
var routes = require('./routes.jsx');
var Api = require('./api/ServerApi');

// Express
var express = require('express')
var app = express();

// Some const
var BASEDIR = process.env.PWD

// Express App setup
app.set("views", BASEDIR + '/public');
app.set('view engine', 'jade');

app.use("/public", express.static(BASEDIR + "/public"));



// Express ROUTES

// Static routes
app.get('/', function (req, res) {
  Router.run(routes, '/', function (Handler) {
    var content = React.renderToString(React.createElement(Handler));
    var injected = { list: Api.getArticles()};
    res.render('index', {
      content: content,
      injectedScript: JSON.stringify(injected)
    });
  });
})

app.get('/article/:id', function (req, res, next) {
  var aid = req.params.id;
  Router.run(routes, '/article/' + aid , function (Handler) {
    var content = React.renderToString(React.createElement(Handler));
    var injected = { list: [Api.getArticle(aid)]};
    res.render('index', {
      content: content,
      injectedScript: JSON.stringify(injected)
    });
  });
});

// API routes
app.get('/api/article/:id', function (req, res, next) {
  var aid = req.params.id;
  var article = Api.getArticle(aid);
  res.send(JSON.stringify(article));
});

app.get('/api/articles', function (req, res, next) {
  var articles = Api.getArticles();
  res.send(JSON.stringify(articles));
});


module.exports = app;
