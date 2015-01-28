var React = require("react");
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;

// Components
var App = require("./components/App.jsx");
var ArticleList = require('./components/ArticleList.jsx');
var Article = require('./components/Article.jsx');

var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="article" path="/article/:id" handler={Article}/>
    <DefaultRoute name="default" handler={ArticleList}/>
  </Route>
);

module.exports = routes;
