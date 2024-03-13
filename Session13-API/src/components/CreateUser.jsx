import React, { useEffect } from 'react'

export default function CreateUser() {
    let newUser = {
        name: "Hà Linh"
    }
    // Thêm
    /* useEffect(()=>{
        fetch("http://localhost:8080/users",{
            method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser) 
    }
        )
    },[]) */
    return (
        <div>
            CreateUser
            {/* Muốn đi thêm user */}

        </div>
    )
}
