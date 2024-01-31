import React, { Component } from 'react'
import Product from './Product'

export default class 
 extends Component {
    constructor(){
        super()
        this.state={
            address:""
        }
    }
  render() {
    // Hứng dữ liệu về
    let {products,address}=this.props;
    // console.log("11111", products);

    const getAddress=(name)=>{
        console.log("giá trị nhận về",name);
        this.setState({
            address:name
        })
    }


    address(this.state.address)
    return (
      <>
       <br /> List Product <br />
        {/* <Product data={products}></Product> */}

        {
            products.map((item,index)=>{
                return <Product address={getAddress} key={index} data={item}></Product>
            })
        }
      </>
    )
  }
}
