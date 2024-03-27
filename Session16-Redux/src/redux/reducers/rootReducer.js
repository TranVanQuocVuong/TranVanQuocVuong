import { counter } from "./counter"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter1:counter
})

export default rootReducer