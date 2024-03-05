import React from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom"
import Contact from './components/Contact'
import Home from './components/Home'
import Intro from './components/Intro'
import NotFount from './components/NotFount'
import Store from './components/Store'
import Employee from './components/Employee'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
export default function App() {
  return (
    <>
      App
      <ul>
        <li>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to="/intro">Giới thiệu</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Liên hệ</NavLink>
        </li>
        <li>
          <NavLink to="/products">Sản phẩm</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/intro' element={<Intro></Intro>}>
              <Route path='store' element={<Store></Store>}></Route>
              <Route path='employee' element={<Employee></Employee>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route> 
        <Route path='/products' element={<Products></Products>}>
        </Route>
        <Route path='/products/:productId' element={<ProductDetail></ProductDetail>}>
        </Route>
        <Route path='*' element={<NotFount/>}></Route>
      </Routes>
    </>
  )
}
