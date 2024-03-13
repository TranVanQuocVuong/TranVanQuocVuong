import React, { useEffect, useState } from 'react'
import "./register.css"

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [dataUser, setDataUser] = useState([])
    const [checkEmailUser, setCheckEmailUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(respone => respone.json())
            .then(data => {
                setDataUser(data)
            })

    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    /* const checkEmail = (email)=>{
         fetch(`http://localhost:8080/users?email=${email}`)
         .then(respone =>respone.json())
         .then(data=>{
            setCheckEmailUser[data]
         })
    } */
    const registerUser = (event) => {
        event.preventDefault();
        let isValidate = checkValidate()
        if (isValidate) {
            fetch(`http://localhost:8080/users?email=${user.email}`)
                .then(respone => respone.json())
                .then(data => {
                    if (data.length > 0) {
                        alert("Email trùng")
                    }
                    else{
                        fetch("http://localhost:8080/users",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(user)
                            }
                        )
                        alert("Bạn đã đăng kí thành công")
                    }
                })
        }
    }
    const checkValidate = () => {
        let isCheck = true;

        if (user.email == '') {
            alert("Email không được để trống")
            isCheck = false;
        } else if (!isEmail(user.email)) {
            alert("Email không đúng định dạng")
            isCheck = false;
        }

        if (user.password == '') {
            alert("Password không được để trống")
            isCheck = false;
        }
        if (user.confirmPassword == '') {
            alert("Confirm Password không được để trống")
            isCheck = false;
        }

        return isCheck;
    }

    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    return (
        <>
            <div className="login-form">
                <form>
                    <h2 className="text-center">Sign up</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user" />
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                name='email'
                                placeholder="Email"
                                required="required"
                                onChange={() => handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                placeholder="Password"
                                required="required"
                                onChange={() => handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                name='confirmPassword'
                                placeholder="Confirm password"
                                required="required"
                                onChange={() => handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary login-btn btn-block"
                            onClick={registerUser}>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
