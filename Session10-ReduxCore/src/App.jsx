import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import "./App.css"
export default function App() {
  return (
    /* 
      Redux là một thư viện (bên khác không phải của ReactJs) 
      giúp cho việc quản lý state tập trung được chứa trong store hay còn gọi là kho
        - Trong store chứa reducer(Bản chất nó sẽ đi tính toán cập nhật lại)
        - Dùng với ReactJs cũng được mà dùng Js cũng được
        - Khi truyền dữ liệu trong ReactJs thì bắt buộc phải truyền theo kiểu cha con
        - 
    
    */
    <>
      <div className='main'>
        <Header></Header>
        <TodoList></TodoList>
      </div>
      
    </>
  )
}
