import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true, credentials:"include",
                },
            )
            .then((res) => {
                console.log(res, "res");
                console.log(res.data, "is res data!");
                navigate("/career-detector/dashboard");
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <div className="display">
            <h1>Login</h1>
            <p className="error-text">{errorMessage ? errorMessage : ""}</p>
            <div className="form">
            <form  className= "form-control" onSubmit={login}>
                <div>
                    <label className="form-label">Email</label>
                    <br/>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label  className="form-label">Password</label>
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <button variant="primary" className="btn-link-style-general btn btn-link-style-action mt-3">Sign In</button>
                </div>
            </form>
            </div>
        </div>
    );
};


export default Login