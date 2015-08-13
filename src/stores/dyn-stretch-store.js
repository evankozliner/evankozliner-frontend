import { FALSIFY_STRETCH, TRUTHIFY_STRETCH } from '../constants/dyn-action-type-constants'

export default function stretch(state = false, action) {
  switch(action.type) {
    case FALSIFY_STRETCH:
      console.log('falsify')
      return state ? !state : state
      break
    case TRUTHIFY_STRETCH:
      console.log('truthify')
      return state ? state : !state
      break
    default:
      return state
  }
}
