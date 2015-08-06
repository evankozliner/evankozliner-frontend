import biff from '../dispatchers/biff';
import _ from 'lodash';

var _examples = [];

var ExampleStore = biff.createStore({
  loadExamples: function(examples) {
    _examples = examples;
  }
}, function(payload) {
  switch(payload.actionType) {
    case "EXAMPLES_LOADED":
      ExampleStore.loadExamples(payload.data);
      ExampleStore.emitChange();
      break;
  }
});

export default ExampleStore;
