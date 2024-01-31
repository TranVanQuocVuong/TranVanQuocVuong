import React, { Component } from 'react'
import Info from './components/Info';
import Form from './components/Form';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name: "hoa",
      isLogin:false,
    }
  }
  componentDidUpdate(){
    console.log("giai đoạn 3: componentDidUpdate");
  }
  componentWillUpdate(){
    console.log("giai đoạn 3: componentWillUpdate");
  }
  shouldComponentUpdate(){
    console.log("giai đoạn 3: shouldComponentUpdate");
    return true
  }

  componentDidMount(){
    // Quan trọng
    /* 
      đây là thời điểm thích hợp để gọi API
    */
    console.log("componentDidMount");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  checkLogin=()=>{
    // Giả sử đăng nhập đúng
    this.state={
      isLogin:true,
    }
  }
  render() {
    console.log("component re-render");
    return (
      <>
        <div>App</div>
        <p>{this.state.name}</p>
        <button onClick={()=>{this.setState({name:"Huệ"})}}>change</button>
        {this.state.isLogin && <Info></Info>}
        <button onClick={this.checkLogin}>Login</button>
        <Form></Form>
      </>
    )
  }
}
