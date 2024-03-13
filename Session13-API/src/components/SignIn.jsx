import React, { useEffect, useState } from 'react'

export default function SignIn() {
    const [dataUser, setDataUser] = useState([])
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then(respone => respone.json())
        .then(data=>{
            setDataUser(data)
        })
    },[])

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value})
    }

    const signInUser = (event) =>{
        let isValidate = checkValidate()
        event.preventDefault();
        if (isValidate) {
            fetch(`http://localhost:8080/users?email=${user.email}&password=${user.password}`)
                .then(respone => respone.json())
                .then(data => {
                    if (data.length > 0) {
                        alert("Đăng nhập thành công")
                    }
                    else{
                        alert("Tài khoản hoặc mật khẩu không đúng")
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

        return isCheck;
    }

    const isEmail = (email) =>{
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    return (
        <>
            <div className="login-form">
                <form>
                    <h2 className="text-center">Sign in</h2>
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
                                placeholder="Email"
                                required="required"
                                name='email'
                                onChange={()=>handleChange(event)}
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
                                placeholder="Password"
                                required="required"
                                name='password'
                                onChange={()=>handleChange(event)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary login-btn btn-block"
                            onClick={signInUser}>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
