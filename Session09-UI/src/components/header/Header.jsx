import React from 'react'
// import "./header.scss"
// import "./header.css"
export default function Header() {
    // let header ={
    //     backgroundColor: "red",
    //     color: "white"
    // }
  return (
    <div className='main'>
        <div className="logo">
          logo
        </div>
        <div className="items">
          <ul className='contact'>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="auth">
          auth
        </div>
        {/* <img src="../../../public/images/animal.jpg" alt="" /> */}
    </div>
  )
}
