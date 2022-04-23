// import React, {useState, useEffect} from 'react';
import Login from "../components/Login";
import Reg from "../components/Reg";

const LogReg = (props) => {



    return (
        <div className="text-mont">
            <header className="text-center blurred-box-form text-center">
                <h1> Career Detector </h1>
            </header>

            <div>
                <div className="d-flex justify-content-center align-items-start">
                    <Reg />
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LogReg;
