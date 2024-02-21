import React, { useEffect, useState } from 'react'

export default function App() {
  // Lấy dữ liệu từ localStorage
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("dataJob")) || []);
  const [job, setJob] = useState({ id: "", nameJob: "" });
  // Tạo biến để thay đổi nút save thành edit
  const [flag, setFlag] = useState(-1)

  const handChange = (e) => {
    setJob({ ...job, id: Math.floor(Math.random() * 10000), nameJob: e.target.value })
  }

  useEffect(()=>{
    localStorage.setItem("dataJob", JSON.stringify(jobs))
  },[jobs])
  const saveJob = () => {
    if (flag == -1)/* Khi flag = -1 thì thực hiện lưu */ {
      // Lưu job vào mảng jobs
      setJobs([...jobs, job]);
      // sau khi lưu job vào mảng jobs thì đẩy dữ liệu lên localStorage
      console.log("88888888",jobs);
      // cho job về giá trị trắng
      setJob({ id: "", nameJob: "" })
    }else/* Khi flag != -1 thì thực hiện edit */{
      const index = jobs.findIndex((item, index)=>{
        return item.id == flag
      })
      // sửa phần tử
      jobs.splice(index,1,job)
      // sau khi chỉnh sửa xong thì lưu vào mảng
      setJobs([...jobs])
      // đẩy dữ liệu lên localStorage
      localStorage.setItem("dataJob", JSON.stringify(jobs))
      // set lại giá trị flag
      setFlag(-1)
      setJob({ id: "", nameJob: "" });
    }
  }

  const deleteJob = (id) => {
    let deleteConfirm = confirm("Bạn có muốn xóa công việc này không?")
    if (deleteConfirm) {
      const index = jobs.findIndex((item, index) => {
        return item.id == id
      })
      // Xóa phần tử muốn xóa vào lưu mới lại mảng jobs
      jobs.splice(index, 1)
      setJobs([...jobs])
      // sau khi xóa xong đẩy dữ liệu lên lại localStorage
      localStorage.setItem("dataJob", JSON.stringify(jobs))
    }
  }

  const editJob = (id) => {
    const index = jobs.findIndex((item, index) => {
      return item.id == id
    })
    setJob({ ...job, id: id, nameJob: jobs[index].nameJob })
    setFlag(id)
  }
  console.log("555555555");
  return (
    <>
      <div>
        <label htmlFor="">Nhập tên công việc</label>
        <input type="text" value={job.nameJob}
          onChange={() => handChange(event)}
        />
        <button onClick={saveJob}>{flag == -1 ? "Save" : "Edit"}</button>
        <br />

        Danh sách công việc
        <ul>
          {
            jobs.map((item, index) => {
              return <li key={item.id}>{item.nameJob}
                <span className="material-symbols-outlined" onClick={() => deleteJob(item.id)}>
                  delete
                </span>
                <span className="material-symbols-outlined" onClick={() => editJob(item.id)}>
                  edit
                </span>
              </li>
            })
          }
        </ul>
      </div>
    </>
  )
}
