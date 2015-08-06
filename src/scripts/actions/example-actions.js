import buff from '../dispatchers/biff';
import _ from 'lodash';

var ExampleActions = biff.createActions({
  loadExamples: function(examples) {
    // async calls go here
    this.dispatch({
      actionType: "EXAMPLES_LOADED",
      data: examples
    });
  }
});

export default ExampleActions;