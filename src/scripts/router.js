var React = require('react')
,   Router = require('react-router')
,   App = require('./components/app')
,   Home = require("./components/home")
,   NotFound = require('./components/not-found');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="app" handler={Home} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

module.exports = {
  run: function (el) {
    Router.run(routes, function (Handler, state) {
      var params = state.params;
      React.render(<Handler params={params} />, el);
    });
  }
};