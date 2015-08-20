import { EXAMPLE_INPUT_CHANGE } from '../constants/action-type-constants'

export default function exampleInputValue(state = '', action) {
  switch(action.type) {
    case EXAMPLE_INPUT_CHANGE:
      state = action.payload
      return state
      break
    default:
      return state
      break
  }
}
