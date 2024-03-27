import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export default function DeleteUser() {
    // xóa user cần phải biết id
    useEffect(()=>{
        let userId = 1
        axios.delete(`http://localhost:8080/user/${userId}`)
    },[]) 
  return (
    <div>DeleteUser</div>
  )
}
