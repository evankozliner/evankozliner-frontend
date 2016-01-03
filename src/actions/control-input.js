import { INPUT_ACTION } from '../constants/ActionTypes'
export function inputAction(value) {
	return {
		type: INPUT_ACTION,
		value: value
	}
}
