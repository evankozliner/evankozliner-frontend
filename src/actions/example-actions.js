import { EXAMPLE_ACTION } from '../constants/action-type-constants'
import { delayPromise } from '../promises'

export function exampleAction() {
  return {
    type: EXAMPLE_ACTION
  }
}

export function exampleActionAsync() {
  return (dispatch) => {
    delayPromise(300).then(() => {
      dispatch(exampleAction())
    })
  }
}
