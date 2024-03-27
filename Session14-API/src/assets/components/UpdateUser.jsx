import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export default function UpdateUser() {
    /* 
        Khi update cần phải biết update user nào
        dựa vào id để update
         1. put: cập nhật các trường muốn cập nhật không giữ cái cũ
         2. patch: cập nhật các trường muốn cập nhật giữ cái cũ

    */
   useEffect(()=>{
    let newUser = {
        name: "Hồng"
    }
        axios.put("http://localhost:8080/user/7", newUser)
   },[])
  return (
    <>UpdateUser
    </>
  )
}
