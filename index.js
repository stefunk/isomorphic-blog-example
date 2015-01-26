require('node-jsx').install({extension: '.jsx'});
var React = require('react');

var Router = require('react-router');
var routes = require('./src/routes.jsx');

var Api = require('./src/api/ServerApi');

// App
var express = require('express')
var app = express();

app.set("views", __dirname + '/public');
app.set('view engine', 'jade');

app.use("/public", express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  Router.run(routes, '/', function (Handler) {
    var content = React.renderToString(React.createElement(Handler));
    var injected = { list: Api.getArticles()};
    res.render('index', {
      content: content,
      injectedScript: JSON.stringify(injected)
    });
    res.end();
  });
})

app.get('/test', function (req, res, next) {
  Router.run(routes, '/test', function (Handler) {
    var content = React.renderToString(React.createElement(Handler));
    res.render('index', {content: content});
    res.end();
  });
});

app.get('/article/:id', function (req, res, next) {
  var aid = req.params.id;
  Router.run(routes, '/article/' + aid , function (Handler) {
    var content = React.renderToString(React.createElement(Handler));
    var injected = {};
    injected[aid] = Api.getArticle(aid);
    res.render('index', {
      content: content,
      injectedScript: JSON.stringify(injected)
    });
    res.end();
  });
});

// Start server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})