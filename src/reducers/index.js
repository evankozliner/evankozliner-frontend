import { combineReducers } from 'redux'
import example from './example'
import controlInput from './control-input'

const rootReducer = combineReducers({
	example,
	controlInput
})

export default rootReducer
