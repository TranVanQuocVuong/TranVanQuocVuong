import React from 'react'

export default function UIAdmin() {
    return (
        <>
            <div className='flex h-full w-full'>
                <div className='w-[14rem] bg-slate-800 text-gray-100 flex flex-col justify-between'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <img className='w-[3rem] h-[3rem]' src="https://w0.peakpx.com/wallpaper/1013/916/HD-wallpaper-black-clover-asta-black-bull-black-clover-logo.jpg" alt="" />
                            <p>QUẢN TRỊ VIÊN</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-house"></i>
                            <p className='ml-2'>Tổng quan</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-user"></i>
                            <p className='ml-2'>Quản lý tài khoản</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-landmark"></i>
                            <p className='ml-2'>Quản lý lớp</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-book"></i>
                            <p className='ml-2'>Quản lý bài viết</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-comment"></i>
                            <p className='ml-2'>Quản lý bình luận</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-file"></i>
                            <p className='ml-2'>Quản lý tài liệu</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-address-book"></i>
                            <p className='ml-2'>Quản lý liên hệ</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-calendar-days"></i>
                            <p className='ml-2'>Quản lý sự kiện</p>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <i className="fa-solid fa-gear"></i>
                            <p className='ml-2'>Cài đặt</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-3 border-t-2'>
                        <i className="fa-solid fa-chevron-left text-gray-100 text-sm"></i>
                    </div>
                </div>
                <div className='h-full w-full bg-gray-200'>
                    <div className='bg-white flex justify-between'>
                        <div>
                            <i className="fa-solid fa-bars p-5 text-xl text-gray-500"></i>
                        </div>
                        <div className='text-xl text-gray-500 flex items-center justify-center mr-9'>
                            <i className="fa-solid fa-moon mr-5"></i>
                            <i className="fa-brands fa-facebook-messenger mr-5"></i>
                            <i className="fa-regular fa-bell mr-5"></i>
                            <img className='w-[3rem] rounded-full mr-2' src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
                            <p className='text-sm text-black mr-2'>Ngô Văn Quý</p>
                            <i className="fa-solid fa-caret-down text-xs text-black font-extrabold"></i>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center justify-between ml-5 mr-5'>
                            <p className='text-lg font-semibold'>Quản lý tài khoản</p>
                            <button className='bg-blue-500 rounded-md p-1 text-white'>Thêm mới tài khoản</button>
                        </div>
                        <div className='flex items-center justify-between ml-5 mr-5 mt-3 mb-3'>
                            <p className='border-black border-[0.1rem] rounded-2xl p-2 text-sm'>Thực hiện hàng loạt <i className="fa-solid fa-caret-down ml-1"></i></p>
                            <div>
                                <input
                                    type="text"
                                    className='border-gray-400 border-[0.13rem] p-[0.1rem] rounded-sm mr-2'
                                    placeholder='Tìm kiếm theo tên và mã'
                                />
                                <i className="fa-solid fa-rotate-right text-gray-400 text-xl"></i>
                            </div>

                        </div>
                        <div className='flex items-center justify-center p-2'>
                            <table className='w-[71rem] border-collapse border border-slate-400'>
                                <tr className='text-left'>
                                    <th className='border border-slate-300 p-1'><input type="checkbox" /></th>
                                    <th className='border border-slate-300 p-1'>MÃ</th>
                                    <th className='border border-slate-300 p-1'>TÊN</th>
                                    <th className='border border-slate-300 p-1'>GIỚI TÍNH</th>
                                    <th className='border border-slate-300 p-1'>NGÀY SINH</th>
                                    <th className='border border-slate-300 p-1'>TRẠNG THÁI</th>
                                    <th className='border border-slate-300 p-1'>LỚP</th>
                                    <th className='border border-slate-300 p-1'>SỐ ĐIỆN THOẠI</th>
                                    <th className='border border-slate-300 p-1'>NGÀY THAM GIA</th>
                                    <th className='border border-slate-300 p-1'>CHỨC NĂNG</th>
                                </tr>
                                <tr className='bg-white text-center'>
                                    <td className='border border-slate-300 p-2'><input type="checkbox" /></td>
                                    <td className='border border-slate-300 p-2'>Nv866</td>
                                    <td className='border border-slate-300 p-2'>Nguyễn Văn A</td>
                                    <td className='border border-slate-300 p-2'>Khác</td>
                                    <td className='border border-slate-300 p-2'>12/09/2023</td>
                                    <td className='border border-slate-300 p-2'>Đang hoạt động</td>
                                    <td className='border border-slate-300 p-2'>D10.48.01</td>
                                    <td className='border border-slate-300 p-2'>0976882773</td>
                                    <td className='border border-slate-300 p-2'>09/09/2023</td>
                                    <td className='border border-slate-300 p-2'>
                                        <i className="fa-solid fa-pen-to-square text-orange-600 p-2"></i>
                                        <i className="fa-solid fa-trash text-red-600 p-2"></i>
                                    </td>
                                </tr>
                                <tr className='bg-white'>
                                    <td className='border border-slate-300 p-3' colSpan={10}>
                                        <div className='flex items-center justify-between'>
                                            <p>Hiển thị <b>10</b> bản ghi</p>
                                            <div className='flex items-center justify-center'>
                                                <p className='border border-slate-300 p-[0.4rem] rounded-sm'>10 bản ghi trên 1 trang <i className="fa-solid fa-caret-down ml-1"></i></p>
                                                <button className='p-2 text-gray-400'>Trước</button>
                                                <p className='border border-slate-300 p-1'>1</p>
                                                <button className='p-2 text-gray-400'>Tiếp</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
