import React from 'react'
import GetUser from './components/GetUser'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import UpdateUser from './components/UpdateUser'
import Register from './components/Register'
import SignIn from './components/SignIn'

export default function App() {
  return (
    <div className='main'>
      {/* 
        Khi lưu dữ liệu trên json-server thì phải thực hiện được CRUD
        (Thêm mới thông tin(Creat), lấy thông tin(Read), cập nhật thông tin(Update), xóa thông tin(Delete))
        Để làm việc với json-server có 2 cách
          1. Dùng phương thức fecth( có sẵn trong javaScript)
          2. Dùng thư viện axios để tương tác CRUD


      */}
      {/* <GetUser></GetUser>
      <CreateUser></CreateUser>
      <DeleteUser></DeleteUser>
      <UpdateUser></UpdateUser> */}
      <Register></Register>
      <SignIn></SignIn>
    </div>
  )
}
