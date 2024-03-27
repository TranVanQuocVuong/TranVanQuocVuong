import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("dataJobs"))||[]

export const toDoList = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("dataJobs", JSON.stringify(state));
    },
    deleteJob: (state, action) => {
      let index = state.findIndex((item)=>{
        return item.id == action.payload;
      })
      state.splice(index, 1);
      localStorage.setItem("dataJobs", JSON.stringify(state));
    },
    checkCompleteJob: (state, action) => {
        let index = state.findIndex((item)=>{
            return item.id == action.payload.id;
          })
          console.log("index",index);
          if (index != -1) {
            state[index].status =! state[index].status
          }
      localStorage.setItem("dataJobs", JSON.stringify(state));
    },
    moveJob: (state, action) =>{
      console.log("1111111",state);
        /* if (action.payload) {
          let dataTrue = state.filter((item) => {
            return item.status == true
        })
        for (let i = 0; i < state.length; i++) {
            if (state[i].status == false) {
                dataTrue.unshift(state[i])
            }
        }
        console.log(state);
        } */
    },
    editJob: (state, action) =>{
      let index = state.findIndex((item)=>{
        return item.id == action.payload.flag
      })
      state.splice(index,1,action.payload.job)
      localStorage.setItem("dataJobs", JSON.stringify(state));
    }
  },
})

export const { addJob, deleteJob, checkCompleteJob, moveJob, editJob } = toDoList.actions

export default toDoList.reducer