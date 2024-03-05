import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./header.scss"

export default function Header() {
    let data = useSelector((state)=>{
        return state
    })
  return (
    <div className='header'>
        <p>Số lượng công việc hiện tại: {data.jobReducer.length} </p>
    </div>
  )
}
