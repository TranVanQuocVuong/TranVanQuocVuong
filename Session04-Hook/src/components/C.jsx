import React from 'react'
import D from './D'

export default function C(props) {
    const {nameC} = props
  return (
    <>
        <div>C: {nameC}</div>
        <D nameD = {nameC}></D>
    </>
  )
}
