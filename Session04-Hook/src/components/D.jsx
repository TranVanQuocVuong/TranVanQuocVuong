import React, { useContext } from 'react'
import { createContex } from '../App';

export default function D(props) {
    const data = useContext(createContex)
    console.log("data", data);
  return (
    <>
        <div>D: {data}</div>
    </>
  )
}
