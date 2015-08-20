import { EXAMPLE_ACTION, EXAMPLE_INPUT_CHANGE } from '../constants/action-type-constants'
import { delayPromise } from '../promises'

export function exampleAction() {
  return {
    type: EXAMPLE_ACTION
  }
}

export function exampleInputChange(value) {
  return {
    type: EXAMPLE_INPUT_CHANGE,
    payload: value
  }
}

export function exampleActionAsync() {
  return (dispatch) => {
    delayPromise(300).then(() => {
      dispatch(exampleAction())
    })
  }
}
