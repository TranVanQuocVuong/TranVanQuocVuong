import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            userName:"",
            password:""
        }
    }
    // Khi làm việc với form ngăn chặn việc submit form
  render() {
    const login=(e)=>{
        e.preventDefault();
        console.log("chạy vào hàm login");
        
        console.log("userName", this.state.userName);
        console.log("pass", this.state.pass);
    }
    const changeName=(event)=>{
        let userName=e.taget.value;
        this.setState({
            userName:userName,
        })
    }
    const changePass=(event)=>{
        let pass=e.taget.value;
        this.setState({
            password:pass,
        })
    }
    return (
      <div>
        <form action="">
            <label htmlFor="">userName</label>
            <input type="text" onChange={changeName} /> <br />
            <label htmlFor="">password</label>
            <input type="text" onChange={changePass}/> <br />
            <button onClick={()=>login(event)}>Đăng nhập</button>
        </form>
      </div>
    )
  }
}
