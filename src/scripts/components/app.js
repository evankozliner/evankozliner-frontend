var React = require("react")
,   Router = require("react-router")

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div id="wrapper">
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = App;