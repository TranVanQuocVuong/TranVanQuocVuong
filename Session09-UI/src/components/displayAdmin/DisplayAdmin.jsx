import React from 'react'
import "./displayAdmin.scss"
export default function DisplayAdmin() {
  return (
    <>
        <div className='adminMain'>
            <div className="adminMenu">
                <div className="logo">
                    <img src="data:image/png;base64,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" alt="" /> 
                    QUẢN TRỊ VIÊN
                </div>
                <div className="overView">
                    <p><i className="fa-solid fa-exclamation"></i> Tổng quan</p>
                </div>
                <div className="accountManager">
                    <p><i className="fa-solid fa-user"></i> Quản lý tài khoản</p>
                </div>
                <div className="classManager">
                    <p><i className="fa-solid fa-landmark"></i> Quản lý lớp</p>
                </div>
                <div className="articleManager">
                    <p><i className="fa-solid fa-newspaper"></i> Quản lý bài viết</p>
                </div>
                <div className="commentManager">
                    <p><i className="fa-solid fa-comment"></i> Quản lý bình luận</p>
                </div>
                <div className="documentManager">
                    <p><i className="fa-solid fa-file"></i> Quản lý tài liệu</p>
                </div>
                <div className="contactManager">
                    <p><i className="fa-solid fa-address-book"></i> Quản lý liên hệ</p>
                </div>
                <div className="eventManager">
                    <p><i className="fa-solid fa-calendar-days"></i> Quản lý sự kiện</p>
                </div>
                <div className="setting">
                    <p><i className="fa-solid fa-gear"></i> Cài đặt</p>
                </div>
                <div className="arrowLeft">
                    <p><i class="fa-solid fa-chevron-left"></i></p>
                </div>
            </div>
            <div className="adminBody">
                <div className='menuBody'>
                    <div className='leftMenu'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className='rightMenu'>
                        <i className="fa-solid fa-moon"></i>
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <i className="fa-regular fa-bell"></i>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIKXP-G_sG_vGWb0cTfrLavmfR6wiUpogrA&usqp=CAU" alt="" />
                        <p>Ngô Văn Quý</p>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                <div className='titleBodyAdmin'>
                    <div className='title'>
                        <p>Quản lý tài khoản</p>
                        <button className='creatAccount'>Thêm mới tài khoản</button>
                    </div>
                    <div className='titleDown'>
                        <p>Thực hiện hàng loạt <i className="fa-solid fa-caret-down"></i></p>
                        <div className='titleSearch'>
                            <input type="text" placeholder='Tìm kiếm theo tên và mã'/><i class="fa-solid fa-magnifying-glass"></i>
                            <i className="fa-solid fa-rotate-right"></i>
                        </div>
                    </div>
                </div>
                <div className='bodyTable'>
                    <table>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>MÃ</th>
                            <th>TÊN</th>
                            <th>GIỚI TÍNH</th>
                            <th>NGÀY SINH</th>
                            <th>TRẠNG THÁI</th>
                            <th>LỚP</th>
                            <th>SỐ ĐIỆN THOẠI</th>
                            <th>NGÀY THAM GIA</th>
                            <th>CHỨC NĂNG</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Nv866</td>
                            <td>Nguyễn Văn A</td>
                            <td>Khác</td>
                            <td>12/09/2023</td>
                            <td>Đang hoạt động</td>
                            <td>D10.48.01</td>
                            <td>0976882773</td>
                            <td>09/09/2023</td>
                            <td>
                                <i className="fa-solid fa-pen-to-square"></i>
                                <i className="fa-solid fa-trash"></i>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={10}>
                                <div className='footerTable' >
                                    <p>Hiển thị <b>10</b> bản ghi</p>
                                    <div className='leftFooterTable'>
                                        <p>10 bản ghi trên 1 trang <i className="fa-solid fa-caret-down"></i></p>
                                        <button>Trước</button>
                                        <p>1</p>
                                        <button>Tiếp</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    
    </>
  )
}

