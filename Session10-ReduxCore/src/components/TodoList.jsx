import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./toDoList.scss"

export default function TodoList() {
    const [job, setJob] = useState("");
    const refHook = useRef();

    let data = useSelector((state) => {
        console.log("aaaaaa", state);
        return state
    })

    let dispatch = useDispatch()
    const add = () => {
        dispatch({
            type: "add",
            payload: {
                id: Math.floor(Math.random() * 10000),
                nameJob: job,
                status: false
            }
        })
        setJob('');
        refHook.current.focus();
    }
    useEffect(()=>{
        refHook.current.focus();
    },[])
    const handChange = (e) => {
        setJob(e.target.value)
    }
    
    const handleCheckbox = (payload)=>{
        
        dispatch({
            type: "checkJob",
            payload
        })
    }

    const deleteJob = (payload) => {
        dispatch({
            type: "deleteJob",
            payload
        })
    }
    let check = data.jobReducer.length
    return (
        <>
            <div className='mainToDoList'>
                <div className='inputJob'>
                    <input
                        type="text" 
                        value={job}
                        ref={refHook}
                        placeholder='Nhập tên công việc'
                        onChange={() => handChange(event)}
                    />
                    <button onClick={add}>Add</button>
                </div>
                <ul className='displayJob'>
                    {data.jobReducer.map((item) => {
                        return <li key={item.id}>
                            <div className='nameJob'>
                                <input
                                    type="checkbox" /* ref={refHook} */
                                    checked={item.status}
                                    onChange={() => handleCheckbox(item.id)}
                                />
                                <p style={item.status == true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                                    {item.nameJob}
                                </p>
                            </div>
                            <button onClick={() =>deleteJob(item.id)}>Delete</button>
                        </li>
                    })}
                </ul>
                {check == 0?<p>Không có công việc</p>:""}
            </div>
        </>
    )
}
