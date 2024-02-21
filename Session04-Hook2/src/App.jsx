import React from 'react'
import UseRef from './components/UseRef'
import UseReducer from './components/UseReducer'
import UseCallback from './components/UseCallback'
import { useState } from 'react'
import { useCallback } from 'react'
import UseMemo from './components/UseMemo'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick=()=>{
    setCount(count+1)
  }

  const useCallback1=useCallback(()=>{

  },[])
  return (
    <>
      <UseRef></UseRef> <br />
      ------------------- <br />
      <UseReducer></UseReducer> <br />
      ------------------- <br />
      <UseCallback memo={useCallback1}></UseCallback> <br />
      <button onClick={handleClick}>Click</button> <br />
      ------------------- <br />
      <UseMemo></UseMemo>
    </>
  )
}
