import { FALSIFY_STRETCH, TRUTHIFY_STRETCH } from '../constants/dyn-action-type-constants'

export function falsifyStretch() {
  return {
    type: FALSIFY_STRETCH
  }
}

export function truthifyStretch() {
  return {
    type: TRUTHIFY_STRETCH
  }
}
