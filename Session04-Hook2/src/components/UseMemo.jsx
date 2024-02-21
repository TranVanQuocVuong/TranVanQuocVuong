import React, { useMemo, useState } from 'react'

export default function UseMemo() {
  const [count, setCount] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [cart, setPay] = useState([])

  const addToCart = () => {
    setPay([...cart, {
      name: name,
      price: +price,
      quantity: +quantity
    }])
  }
  console.log("cart", cart);

  let result = useMemo(() => {
    console.log("giá phải trả");
    let pay = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity
    }, 0)
    return pay
  },[cart])

  // funtion tăng count
  const increase = () => {
    setCount(count+1)
  }
  return (
    <>
      UseMemo
      {/* 
        Cho 3 ô input người dùng sẽ nhập giá trị tên, giá, số lượng
        sau đó in ra tổng hóa đơn người dùng mua.
      */}
      <label htmlFor="">Tên sản phẩm</label>
      <input type="text"
        onChange={(event) => setName(event.target.value)}
      /> <br />
      <label htmlFor="">Giá sản phẩm</label>
      <input type="text"
        onChange={(event) => setPrice(event.target.value)}
      /> <br />
      <label htmlFor="">Số lượng sản phẩm</label>
      <input type="text"
        onChange={(event) => setQuantity(event.target.value)}
      /> <br />
      <button onClick={addToCart}>Mua</button>
      {/* 
        Các bước làm:
          B1: dùng onChange lấy ra các giá trị
          B2: lưu vào state là 1 cái mảng để chứa object
          B3: dùng hàm để tính 
          B4: hiển thị kết quả
      */}

      <button onClick={increase}>tăng Count</button>
      <button>Giá phải trả: {result}</button>
    </>
  )
}
