var React = require("react");
var Router = require('react-router');
var routes = require('./routes.jsx');
var RoutesAction = require('./RoutesAction');

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.body);
  var activeRoute = RoutesAction.findActiveRoute(state.routes);
  RoutesAction.triggerRouteChange(activeRoute, state.params);
});
