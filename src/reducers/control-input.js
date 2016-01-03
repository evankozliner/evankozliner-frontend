import { INPUT_ACTION } from '../constants/ActionTypes'
export default function controlInput(state = '', action) {
	switch(action.type) {
		case INPUT_ACTION:
			return action.value
		default:
				return state
	}
}

