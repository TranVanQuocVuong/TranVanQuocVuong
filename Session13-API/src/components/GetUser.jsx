import React, { useEffect, useState } from 'react'

export default function GetUser() {
    const [users, setUsers] = useState([])
    /* 
      Thông thường các tác vụ call API thì nên call trong useEffect
    */
    useEffect(() => {
        // Bắt đầu đi lấy data
        fetch("http://localhost:8080/users")
            .then(respone => respone.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    users.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
