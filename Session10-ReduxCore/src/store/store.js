import {combineReducers, createStore} from "redux"
import { countReducer } from "./reducer/countReducer";
import { jobReducer } from "./reducer/jobReducer";


const store = combineReducers({jobReducer, countReducer})
export const storeJob = createStore(store)
