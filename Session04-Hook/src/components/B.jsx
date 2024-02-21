import React from 'react'
import C from './C'

export default function B(props) {
    const {nameB} =props
  return (
    <>
        <div>B: {nameB}</div>
        <C nameC={nameB}></C>
    </>
  )
}
