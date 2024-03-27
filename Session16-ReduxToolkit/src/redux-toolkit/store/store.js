import { configureStore } from '@reduxjs/toolkit'
import counter from "../reducer/counter"
import todoList from '../reducer/todoList'
export const store1 = configureStore({
  reducer: {
    counter11 : counter,
    todoList : todoList,
  },
})