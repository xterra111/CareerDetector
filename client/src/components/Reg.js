import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = (props)=>{


    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    // Using a single state object to hold all the data
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        })

    // Using a single function to update the state object

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register",
            user,
            {
                // this is how wer credentials on the front-end.
                withCredentials: true
            })
            .then((res) => {
                console.log(res.data);
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                setConfirmReg(
                    "Thank you for Registering to Get THIS not THAT, you can now login"
                );
            navigate("/career-detector/welcome");
            setErrors({});
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }


    return (
        <div className="blurred-box-form m-5 text-center">
            <h1>Register</h1>
            {confirmReg ? <h4 style={{ color: "red" }}>{confirmReg}</h4> 
            : null}
            <div className="form mt-3">
                <form className="form-control" onSubmit={register}>
                    <div>
                        <label className="form-label">First Name</label>
                        <br/>
                        {   errors.firstName ? (
                            <span className="error-text">
                                {errors.firstName.message}
                            </span>
                        ) : null}
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            //long hand notation
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label className="form-label">Last Name</label>
                        <br/>
                        {errors.lastName ? (
                            <span className="error-text">
                                {errors.lastName.message}
                            </span>
                        ) : null}
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            //long hand notation
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label className="form-label">Email</label>
                        <br/>
                        {errors.email ? (
                            <span className="error-text">{errors.email.message}</span>
                        ) : null}
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="form-label">Password</label>
                        <br/>
                        {errors.password ? (
                            <span className="error-text">
                                {errors.password.message}
                            </span>
                        ) : null}
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <br/>
                        {errors.confirmPassword ? (
                            <span className="error-text">
                                {errors.confirmPassword.message}
                            </span>
                        ) : null}
                        <input
                            type="password"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button className="btn-link-style-general btn btn-link-style-action mt-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;