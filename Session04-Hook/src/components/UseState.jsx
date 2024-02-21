import React, { useState } from 'react'
/* 
    rfc: react functional component
    rcc: react class component
*/
export default function UseState() {
    const [count, setCount] = useState(1);
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState([]);
    /* 
        useState sẽ trả về cho mình 1 mảng có 2 phần tử
            phần tử 1: giá trị khởi tạo
            phần tử 2 là 1 hàm xử lí

        Khi mà setCount(): thì component tự động re-render (tức là render lại)
        => Cho nên về phía UI(Giao diện) tự động cập nhật giá trị
    */
    //Nắm kĩ destructoring  

    const increase = () => {
        console.log("111111");
        setCount(count + 1)
    }


    const handleChange = (event) => {
        let inputValue = event.target.value;
        setJob(inputValue);
    }
    const save = () => {
        setJobs([...jobs, job]);
        setJob("");
    }
    console.log("Jobs", jobs);
    return (
        <>
            <div>UseState</div>
            <p>{count}</p>
            <button onClick={increase}>Click</button>

            {/* Tạo ô input nhập công việc nhấn nút lưu sẽ hiển thị dưới giao diện 
                1. Lấy giá trị ô input
                2. Lưu danh sách công việc ở đâu -> []
        */}

            <ul>
                <label htmlFor="">Nhập tên công việc</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={job}
                />
                <button onClick={save}>Save</button>
                <div>
                {jobs.map((item, index)=>{return <li key={index}>{item}</li>})}
                </div>
            </ul>
        </>
    )
}

