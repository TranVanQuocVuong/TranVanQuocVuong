import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataProduct } from '../../store/redurer/products'

export default function ListProduct() {
  const [count, setCount] = useState(Array(dataProduct.length).fill(0))
  const data = useSelector((state) => {
    // console.log(state);
    return state;
  })

  let dispatch = useDispatch();
  const inputValue = useRef();
  const handleProduct = (value, index) => {
    const newCount = [...count]
    newCount[index] = value
    setCount(newCount) 
  }
  console.log(count);

  const addCart = (payload, index) => {
    dispatch({
      type: "ADD",
      payload:{
        ...payload, quantity: count[index]        
      }
    })
    const newCount = [...count]
    newCount[index] = 0
    setCount(newCount)
  }
  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {data.dataProduct.map((item, index) => {
                return <div key={item.id}>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object"
                          src={item.img}
                          alt="pizza" /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.name}</h4>
                      <p>
                        {item.description}
                      </p>
                      <input name="quantity-product-1"
                        type="number"
                        min={0} 
                        defaultValue={0}
                        value={count[index]}
                        onChange={() => handleProduct(event.target.value, index)}
                      />
                      <a className="price" onClick={()=>addCart(item, index)}>{item.price} USD</a>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
