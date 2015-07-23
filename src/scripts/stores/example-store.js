var biff = require('../dispatchers/biff')
,   _ = require('lodash');

var _examples = [];

var ExampleStore = biff.createStore({
  loadExamples: function(examples) {
    _examples = examples;
  }
}, function(payload) {
  switch(payload.actionType) {
    case "EXAMPLES_LOADED":
      ExampleStore.loadReplies(payload.data);
      ExampleStore.emitChange();
      break;
  }
});

module.exports = ExampleStore;
