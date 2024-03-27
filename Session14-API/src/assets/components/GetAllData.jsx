import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function GetAllData() {
    useEffect(()=>{
        axios.get("http://localhost:8080/user")
        .then(response=>{
            console.log("res", response);
        })
    },[])
  return (
    <>
        GetAllData
    </>
  )
}
