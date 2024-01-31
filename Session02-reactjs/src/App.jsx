import React, { Component } from 'react'
import Parent from './components/Parent'

/* 
    State: Quản lí trạng thái dữ liệu của ứng dụng
      để viết code js trong html thì bọc trong dấu {}
      Khi state thay đổi thì component re-render(render lại)
      Khi nào state thay đổi (khi đi setState)
    Prop: property thuộc tính
      dùng để truyền dữ liệu từ component cha xuống dưới component con.
      muốn truyền dữ liệu từ con lên cha phải truyền hướng truyền sự kiện
    event: hành động tương tác
*/
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count:0,
      titel: "Rikkei Academy",
      name: "minh huyền",
    }
  }
  increaseCount=()=>{
    this.setState({
      count:this.state.count+1
    })
    this.setState({
      titel:"rikkei"
    })
  }
  render() {
    console.log("function re-render");
    return (
      <>
        <div>aaaa</div>
        <p>count: {this.state.count}</p>
        <p>company: {this.state.titel}</p>
        <button onClick={this.increaseCount }>increase_count</button>
        <Parent name={this.state.name}></Parent>
      </>
    )
  }
}

