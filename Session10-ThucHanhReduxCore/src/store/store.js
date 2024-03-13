import {combineReducers, createStore} from "redux"
import { addToCart } from "./redurer/reducer"
import { dataProduct } from "./redurer/products"

const reducers = combineReducers({addToCart, dataProduct})
export const store = createStore(reducers)