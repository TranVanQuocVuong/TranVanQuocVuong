import React, { useEffect } from 'react'

export default function DeleteUser() {
    
    useEffect(()=>{
        fetch("http://localhost:8080/users/1",{
            method: "DELETE"
        })
    },[])
    return (
        <div>
            {/* Khi xóa user cần phải biết xóa user nào
                bằng cách lấy id của user cần xóa
            */}
        </div>
    )
}
