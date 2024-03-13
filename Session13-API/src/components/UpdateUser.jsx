import React, { useEffect } from 'react'

export default function UpdateUser() {
    let newUser = {
        name: "Lan Anh"
    }
    useEffect(()=>{
        fetch("http://localhost:8080/users/3",{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
    },[])
  return (
    <div>
        UpdateUser
        {/* Cập nhật user: phải biết được user cần cập nhật
            - Để cập nhật có 2 method:
                1. PUT: cập nhật hoàn toàn (tức là cập nhật hết các trường)
                2. PATH: không cập nhật hết, chỉ cập nhật những trường cần cập nhật
        */}    
    </div>
  )
}
