import React from 'react'
import "./shoppingCart.scss"
export default function ShoppingCart() {
  return (
    <>
        <div className='cartHeader'>
            <div className='cartMenu'>
                <div className='leftMenu'>
                    <li className='title'>Shopping</li>
                    <li>Trang chủ</li>
                    <li>Sản phẩm</li>
                    <li> <i className="fa-solid fa-cart-plus"></i></li>
                </div>
                <div className='rightMenu'>
                    <li>Giới thiệu</li>
                    <li>Liên hệ</li>
                    <li>Đăng ký</li>
                    <li>Đăng nhập</li>
                    <li><i className="fa-solid fa-circle-info"></i></li>
                </div>
            </div>
            <div className='cartBody'>
                <div className='nameShop'><p>Shopping Cart</p></div>
                <div className='cartItem'>
                    <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463729/item/goods_09_463729.jpg?width=750" alt="" />
                    <p>Đai lưng</p>
                    <div>
                        <button>-</button>
                        <input type="text" />
                        <button>+</button>
                    </div>
                    <p>50.000 VNĐ</p>
                    <p><i class="fa-solid fa-trash"></i></p>
                </div>
                <div className='cartItem'>
                    <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450322/item/goods_09_450322.jpg?width=750" alt="" />
                    <p>Áo thun</p>
                    <div>
                        <button>-</button>
                        <input type="text" />
                        <button>+</button>
                    </div>
                    <p>500.000VNĐ</p>
                    <p><i class="fa-solid fa-trash"></i></p>
                </div>
                <div className='cartTotal'>
                    <p>Tổng tiền: 650.000VNĐ</p>                   
                </div>
            </div>
        </div>
    </>
  )
}
