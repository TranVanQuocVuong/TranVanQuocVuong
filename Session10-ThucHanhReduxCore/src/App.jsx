import React from 'react'
import Header from './components/header/Header'
import ListProduct from './components/ListProduct'
import ItemProduct from './components/ItemProduct'
import YourCart from './components/YourCart'
import ItemYourCart from './components/ItemYourCart'
import TotalYourCard from './components/TotalYourCart'
import NotificationYourCart from './components/NotificationYourCart'

import "./App.css"

export default function App() {
  return (
    <div className='shoppingCart'>
      <Header></Header>
      <div className='main'>
        <div className='listProduct'>
          <ListProduct></ListProduct>
          <ItemProduct></ItemProduct>
        </div>
        <div className='yourCart'>
          <YourCart></YourCart>
          <ItemYourCart></ItemYourCart>
          <TotalYourCart></TotalYourCart>
          <NotificationYourCart></NotificationYourCart>
        </div>
      </div>
    </div>
  )
}
