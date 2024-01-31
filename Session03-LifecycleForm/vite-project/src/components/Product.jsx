import React, { Component } from 'react'
import Products from './Products'

export default class 
 extends Component {
    constructor(){
        super()
        this.state={
            address:"Hà Nội"
        }
    }
  render() {
    let {data,address} = this.props
    return (
      <>
        <div>
            {data.name}
            <button onClick={()=>address(this.state.address)}>gửi dữ liệu</button>
        </div>
      </>
    )
  }
}
