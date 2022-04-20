// import React, {useState, useEffect} from 'react';
import Login from "../components/Login";
import Reg from "../components/Reg";

const LogReg = (props) => {



    return (
        <div >
            <header className="display">
                <h1>
                Career Detector
                </h1>
            </header>
            <div>
            <div className="display">
                    <Reg />
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LogReg;
