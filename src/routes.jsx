var React = require("react");
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var App = require("./app.jsx");
var Item = require('./Item.jsx');
var ArticleList = require('./ArticleList.jsx');
var Article = require('./Article.jsx');

var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="test" handler={Item}/>
    <Route name="article" path="/article/:id" handler={Article}/>
    <DefaultRoute handler={ArticleList}/>
  </Route>
);

module.exports = routes;