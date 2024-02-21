import React, { useState } from 'react'

export default function App() {
  const[jobs, setJobs] = useState([]);
  const[job, setJob] = useState({id: "", nameJob:""});
  const[flag, setFlag] = useState(-1);
  const handChange =(e)=>{ 
    setJob({...job,id:Math.floor(Math.random()*10000), nameJob:e.target.value}) 
  }

  const saveJob =()=>{
    
    if (flag==-1) {
      // flag = -1 thì người dùng đang muốn thêm vào
      setJobs([...jobs, job]);
      setJob({id:"", nameJob:""});
    }else{
      // flag != -1 thì người dùng muốn chỉnh sửa
      const index = jobs.findIndex((item, index)=>{
        return item.id == flag;
      }) 
      jobs.splice(index,1,job)
      setJobs([...jobs])
      setFlag(-1)
      setJob({id:"", nameJob:""});
    }
  }
  
  const deleteJob=(id)=>{
    let confirmDelete = confirm("Bạn có muốn xóa công việc?")
    if (confirmDelete) {
      const index = jobs.findIndex((item, index)=>{
        return item.id == id
      })
      jobs.splice(index,1);
      setJobs([...jobs]);
    }
  }

  const editJob=(id)=>{
    console.log("11111",id);
    const index = jobs.findIndex((item, index)=>{
      return item.id == id
    })
    setJob({...job, id:id, nameJob: jobs[index].nameJob})
    setFlag(id)
  }
  return (
    <>
      <div>
        {/* Làm bài tập todo List
              Thêm, sửa, xóa công việc

            Các bước làm
              Bước 1: Tạo mảng lưu giá trị
              Bước 2: Tạo và lấy giá trị của ô input
              Bước 3: Đưa giá trị của ô input vào mảng
              Bước 4: Dùng map để render giá trị của mảng chứa danh sách công việc
              Bước 5: Thêm các button sửa xóa của giá trị
        */}
        <label htmlFor="">Tên công việc</label>
        <input type="text" value={job.nameJob}
          onChange={()=>handChange(event)}
        />
        <button onClick={saveJob}>{flag==-1?"Save":"Edit"}</button>
        <br />
        Danh sách công việc
        <ul>
          {jobs.map((item, index)=>{
            return <li key={item.id}>{item.nameJob} 
              <span className="material-symbols-outlined" onClick={()=>deleteJob(item.id)}>
                delete
              </span>
              <span className="material-symbols-outlined" onClick={()=>editJob(item.id)}>
                edit
              </span>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}
