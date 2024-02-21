import React from 'react'
import { useReducer } from 'react';

export default function UseReducer() {
  const reducer = (state, action) => {
    switch (action) {
      case "increase":
        state = state + 1
        return state;
      case "reduce":
        state = state -1
        return state;
      default:
        return state;
    }
  }
  const [count, ditPatch] = useReducer(reducer, 0)

  const handleIncrease = () => {
    console.log("++++++");
    ditPatch("increase")
  }

  const handleReduce = () => {
    console.log("------");
    ditPatch("reduce")
  }
  return (
    <>
      UseReducer
      {/* quản lý những state phức tạp
        Bản chất cũng giống như useState nhưng dùng để quản lý các state phức tạp và công dụng sau này redux.
      */}

      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleReduce}>Giảm</button>
    </>
  )
}
