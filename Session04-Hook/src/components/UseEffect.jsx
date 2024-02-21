import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Ngọc");

    useEffect(()=>{
        console.log("đang gọi hàm useEffect");
        // Thường dùng để callAPI
        // có các tác vụ gọi API xử lý thì thường dùng trong UseEffect
    },[title,count])
    // giống component didMount
    /* 
        Có 3 cách dùng
            1. Demo
            2. Thêm []
            3. Trong [] chưa dependency
    */
  return (
    <>
        {console.log("22222")}
        UseEffect
        <p>count:   {count}</p>
        <button onClick={()=>setCount(count+1)}>click</button>
        <button onClick={()=>setTitle("Lan")}>changeName</button>
    </>
  )
}
