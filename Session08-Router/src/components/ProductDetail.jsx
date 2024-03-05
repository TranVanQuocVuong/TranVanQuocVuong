import React from 'react'
import { useParams } from 'react-router-dom'
let products = [
    {
        name: "iphone5",
        decription: "màu hồng",
        id:1
    },
    {
        name: "iphone6",
        decription: "màu trắng",
        id:2
    },
    {
        name: "iphone7",
        decription: "màu đen",
        id:3
    }
]
export default function ProductDetail() {
    let useParam = useParams();
    console.log("111111", useParam);

    let data = products.filter((item)=>{
        return item.id == useParam.productId
    })
    console.log("222222", data);
  return (
    <>ProductDetail chi tiết sản phẩm
        <p>{data[0].name}</p>
        <p>{data[0].decription}</p>
    </>
  )
}
