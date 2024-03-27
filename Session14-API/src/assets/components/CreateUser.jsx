import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function CreateUser() {
    // Thêm mới user
    useEffect(()=>{
        let newUser = {
            name: "Vân Anh"
        }
        axios.post("http://localhost:8080/user", newUser)
    },[])
  return (
    <div>CreateUser</div>
  )
}
