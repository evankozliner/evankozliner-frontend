import React from 'react';
import Router from 'react-router';
import App from './components/app';
import Home from './components/home';
import NotFound from './components/not-found';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="app" handler={Home} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default {
  run: function (el) {
    Router.run(routes, function (Handler, state) {
      var params = state.params;
      React.render(<Handler params={params} />, el);
    });
  }
};