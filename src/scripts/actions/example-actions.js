var biff = require('../dispatchers/biff')
,   _ = require('lodash');

var ExampleActions = biff.createActions({
  loadExamples: function(examples) {
    // async calls go here
    this.dispatch({
      actionType: "EXAMPLES_LOADED",
      data: examples
    });
  }
});

module.exports = ExampleActions;