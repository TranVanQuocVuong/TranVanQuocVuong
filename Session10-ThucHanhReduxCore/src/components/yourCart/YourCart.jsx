import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function YourCart() {
  const data = useSelector((state) => {
    return state;
  })

   const dispatch = useDispatch()

  var total = data.addToCart.reduce((accumlator, currentValue) => {
    return accumlator + currentValue.price * currentValue.quantity
  }, 0)

  const deleteItem = (payload)=>{
    dispatch({
      type:"DELETE-ITEM",
      payload
    })
    console.log("aaaaaa",payload);
  }
  

  return (
    <div>
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">STT</th>
                <th>Name</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {
                data.addToCart.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <input name="cart-item-quantity-1" type="number" min={0} value={item.quantity} />
                      </td>
                      <td>
                        <a className="btn btn-info update-cart-item" data-product

                        >Update</a>
                        <a className="btn btn-danger delete-cart-item" data-product
                          onClick={()=>deleteItem(item.id)}> Delete</a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot id="my-cart-footer">
              {
                <tr>
                  <td colSpan={4}>
                    There are <b>{data.addToCart.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {total} USD
                  </td>
                </tr>

              }
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
