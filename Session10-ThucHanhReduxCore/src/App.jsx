import React from 'react'
import Header from './components/header/Header'
import ListProduct from './components/listProduct/ListProduct'
import YourCart from './components/yourCart/YourCart'
import NotificationYourCart from './components/notificationYourCart/NotificationYourCart'

export default function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <Header></Header>
        <div className="row">
          {/* List Product */}
          <ListProduct></ListProduct>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              {/* Your Cart */}
              <YourCart></YourCart>
              {/* Notification */}
              <NotificationYourCart></NotificationYourCart>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
