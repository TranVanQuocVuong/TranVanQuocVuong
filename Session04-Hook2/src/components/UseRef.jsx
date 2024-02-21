import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function UseRef() {
    const [count, setCount] = useState(0);
    const refHook1 = useRef(0);
    const refHook = useRef(0);
    // trả về object trong object có 1 thuộc tính mặt định là current

    const obj={
        count:0,
    }

    const handleIncrease=()=>{
        obj.count = obj.count+1;
        console.log("count sau khi click ",count);
        refHook1.current = refHook1.current+1
        setCount(count+1)
    }

    useEffect(()=>{
        refHook.current.focus()
    },[])

  return (
    <>
        UseRef
        <p>count: {refHook1.current}</p>
        <button onClick={handleIncrease}>Click</button>

        <br />
        <label htmlFor="">userName</label>
        <input type="text" ref={refHook} />
    </>
  )
}
