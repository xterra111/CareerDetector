import React, {useState} from 'react';
import axios from 'axios';


const Register = (props)=>{


    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});


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
        .then((res)=>{
            console.log(res.data);
            setUser({
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                confirmPassword:"",
            });
            setConfirmReg(
                "Thank you for Registering to Get THIS not THAT, you can now login",
            );
            setErrors({});
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }


    return (
        <div className="display">
            <h1>Register</h1>
            {confirmReg ? <h4 style={{ color: "red" }}>{confirmReg}</h4> 
            : null}
            <div className="form">
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
                    <div className="center">
                        <button>Register Me</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;