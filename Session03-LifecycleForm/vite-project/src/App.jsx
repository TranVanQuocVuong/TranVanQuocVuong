import React, { Component } from 'react'
import Products from './components/Products'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [{
        name:"iphone15",
        id:1
      },
      {
        name:"iphone16",
        id:2
      },
    ],
      isActive: false,
      title: "học lập trình",
    }
  }

  render() {
    const handleClick=()=>{
      this.setState({
        title:"học lập trình javascript"
      })
    }
    const name1 = "hoa";
    const age1 = 20;
    const students = ["trang", "hoa", "an", "ánh", "minh"];
    let obj = {
      name: "minh thu",
    }
    const getDataAddress=(address)=>{
      console.log("Địa chỉ product gửi đến app", address);
    }
    return (
      <>
        <h1> App</h1>
        <p>Tên của bạn là :{name1}</p>
        <p>năm nay {age1} tuổi</p>
        <p>{students}</p>
        <p>{JSON.stringify(obj)}</p>
        <ul>
          {students.map((item, index) => {
            return <li key={index}> {item}</li>
          })}
        </ul>

        <p>title: {this.state.title}</p>
        <button onClick={handleClick}>chageName</button>
        {/* Đưa danh sách sản phẩm vào */}
        <Products address={getDataAddress} products={this.state.products}></Products>
      </>
    )

  }
}