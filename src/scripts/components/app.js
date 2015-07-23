var React = require("react")
,   Router = require("react-router")

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <RouteHandler {...this.props} />
    );
  }
});

module.exports = App;