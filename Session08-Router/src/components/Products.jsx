import React from 'react'
import { useNavigate } from 'react-router-dom';
/* 
    Tạo danh sách sản phẩm
*/
let products = [
    {
        name: "iphone5",
        id:1
    },
    {
        name: "iphone6",
        id:2
    },
    {
        name: "iphone7",
        id:3
    }
]
export default function Products() {
    let useNavi = useNavigate();
    const handleClick = (id)=>{
        console.log("111111");
        useNavi(`/products/${id}`)
    }
  return (
    <>
        Danh sách sản phẩm
        <ul>
            {products.map((item, index)=>{
                return <li>{item.name} <button onClick={()=>handleClick(item.id)}>Click</button></li>
            })}
        </ul>
    </>
  )
}
