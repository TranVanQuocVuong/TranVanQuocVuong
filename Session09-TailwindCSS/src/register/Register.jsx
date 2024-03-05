import React from 'react'

export default function Register() {
    return (
        <>
            <div className='w-[30rem] rounded-md bg-white p-16 flex flex-col justify-center p-7'>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-[20rem] h-[7rem] p-[0rem]' src="data:image/png;base64,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" alt="" />
                    <h1 className='text-[1.5rem] font-bold mb-[1rem]'>Đăng nhập tài khoản</h1>
                </div>
                <div className='flex flex-col'>
                    <div className='p-2 flex flex-col'>
                        <label htmlFor="" className='font-semibold'>Email</label>
                        <input
                            type="text"
                            className='border-inherit rounded-md border-2 mt-1'
                            placeholder='Nhập địa chỉ mail'
                        />
                    </div>

                    <div className='p-2 flex flex-col'>
                        <label htmlFor="" className='font-semibold'>Mật khẩu</label>
                        <div className='relative flex items-center'>
                            <input
                                type="text"
                                className=' border-inherit rounded-md border-2 mt-1 pl-10'
                                placeholder='Nhập mật khẩu'
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="absolute w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        </div>

                    </div>
                    <div className='text-end mr-2 text-blue-500'>
                        <a href="">Quên mật khẩu</a>
                    </div>
                    <div className='rounded-md mt-3 text-center  bg-blue-500'>
                        <button className='h-[2rem] text-white bg-blue-500'>Đăng nhập</button>
                    </div>
                    <div className='mt-5 text-center'>
                        Hoặc
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='border-gray-400 rounded-md border-2 h-[2rem] flex items-center   '>
                            <i className="fa-brands fa-google text-lg p-1 text-red-800" ></i> <p className='mr-2'>Đăng nhập với Google</p>
                        </button>
                        <button className='border-gray-400 rounded-md border-2 h-[2rem] flex items-center   '>
                            <i className="fa-brands fa-facebook text-lg p-1 text-blue-800" ></i> <p className='mr-2'>Đăng nhập với Facebook</p>
                        </button>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <p className='mr-2'>Bạn đã có tài khoản?</p>
                        <a href="" className='text-blue-500'>Đăng ký</a>
                    </div>
                </div>
            </div>
        </>
    )
}
