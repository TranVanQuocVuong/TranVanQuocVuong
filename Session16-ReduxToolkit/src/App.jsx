import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './redux-toolkit/reducer/counter';
import { addJob, deleteJob, editJob } from './redux-toolkit/reducer/todoList';

export default function App() {
  const[job, setJob] = useState({
    id:"", 
    nameJob:""
  })
  const[flag, setFlag] = useState(-1)
  const counter = useSelector((state)=>{
    console.table(state.todoList);
    return state;
  }) 

  const disPactch = useDispatch();
  const increaseCount = () =>{
    disPactch(increase())
  }

  const addToDo = () =>{
    if (flag==-1) {
      disPactch(addJob(job)) 
      setJob({id:"", nameJob:""}) 
    }else{
      disPactch(editJob({
        flag,
        job
      }))
      setJob({id:"", nameJob:""}) 
      setFlag(-1)
    }
  }
  const deleteToDo = (id) => {
    // console.log(id);
    let deleteConfirm = confirm("bạn có muốn xóa")
    if (deleteConfirm) {
      disPactch(deleteJob(id))
    }
  }

  const editToDo = (id) => {
    let index = counter.todoList.findIndex((item)=>{
      return item.id == id;
    })
    setJob({...job, id:id, nameJob: counter.todoList[index].nameJob})
    setFlag(id)
  }
  console.log("flag", flag);
  console.log("job", job);
  const handleChange = (e) =>{  
    setJob({...job, id:Math.floor(Math.random()*10000), nameJob: e.target.value})
  }
  return (
    <div>
      REDUX TOOLKIT <br />
      <p>Giá trị biến count: {counter.counter11.value}</p>
      <button onClick={increaseCount}>Tăng</button><br />
      <p>******************</p><br />
      <input 
        type="text"
        value={job.nameJob}
        onChange={()=>handleChange(event)}
      />
      <button onClick={addToDo}>{flag==-1?"Save":"Edit"}</button>
      <ul>
      {
        counter.todoList.map((item)=>{
          return(
            <li key={item.id}>
              {item.nameJob}
              <button onClick={()=>deleteToDo(item.id)}>delete</button>
              <button onClick={()=>editToDo(item.id)}>edit</button>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
