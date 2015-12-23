import { EXAMPLE_ACTION } from '../constants/action-type-constants'

export default function example(state = false, action) {
  switch(action.type) {
    case EXAMPLE_ACTION:
      return !state
      break
    default:
      return state
  }
}
