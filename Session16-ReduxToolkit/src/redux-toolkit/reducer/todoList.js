import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload)
    },
    deleteJob: (state, action) => {
      let index = state.findIndex((item) =>{
        return item.id == action.payload;
      })
      state.splice(index,1)
    },
    editJob: (state, action) => {
      let index = state.findIndex((item) =>{
        return item.id == action.payload.flag;
      })
      state.splice(index,1,action.payload.job)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addJob, deleteJob, editJob } = todoList.actions

export default todoList.reducer