import React from 'react'

export default function ShoppingCart() {
  return (
    <>
        <div className='h-screen w-full bg-gray-300 flex flex-col'>
            <div className='flex justify-between h-[3rem] bg-white'>
                <div className='flex items-center justify-center'>
                    <h1 className='p-3 font-bold text-lg'>Shopping</h1>
                    <p className='ml-1'>Trang chủ</p>
                    <p className='ml-3'>Sản phẩm</p>
                    <i className="fa-solid fa-cart-shopping ml-3"></i>
                </div>
                <div className='flex items-center justify-center'>
                    <p>Giới thiệu</p>
                    <p className='ml-3'>Liên hệ</p>
                    <p className='ml-3'>Đăng kí</p>
                    <p className='ml-3'>Đăng nhập</p>
                    <i className="fa-solid fa-right-to-bracket ml-3 mr-2"></i>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl w-[60rem] mt-7 mb-2'>Shopping Cart</h1>
                <div className='flex items-center justify-around bg-white w-[60rem] h-[7rem] mt-4 rounded-lg'>
                    <img className='w-[8rem] h-[5rem] rounded-md' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463729/item/goods_09_463729.jpg?width=750" alt="" />
                    <p>Đai lưng</p>
                    <div>
                        <button>-</button>
                        <input 
                            type="number" 
                            className='w-[5rem] ml-2 mr-2 border-inherit border-2 rounded'
                        />
                        <button>+</button>
                    </div>
                    <p>50.000VNĐ</p>
                    <i className="fa-solid fa-trash text-red-600"></i>
                </div>
                <div className='flex items-center justify-around bg-white w-[60rem] h-[7rem] mt-4 rounded-lg'>
                    <img className='w-[8rem] h-[5rem] rounded-md' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450322/item/goods_09_450322.jpg?width=750" alt="" />
                    <p>Áo thun</p>
                    <div>
                        <button>-</button>
                        <input 
                            type="number" 
                            className='w-[5rem] ml-2 mr-2 border-inherit border-2 rounded'
                        />
                        <button>+</button>
                    </div>
                    <p>500.000VNĐ</p>
                    <i className="fa-solid fa-trash text-red-600"></i>
                </div>
                <div className='flex items-center justify-start bg-white w-[60rem] h-[4rem] mt-4 rounded-lg'>
                    <p className='ml-4'>Tổng tiền: 550.000VNĐ</p>
                </div>
            </div>
        </div>
    </>
  )
}
