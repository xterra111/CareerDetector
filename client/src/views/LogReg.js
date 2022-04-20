import React, {useState, useEffect} from 'react';
import Login from "../components/Login";
import Reg from "../components/Reg";

const LogReg = (props) => {



    return (
        <div >
            <header style={{fontSize: "150px", borderBottom: "5px double lightgray",
                    color:"blue",fontFamily:"monospace"}}>
                <h1>
                Career Detector
                </h1>
            </header>
            <div>
            <div style={{display:"inline-flex", margin:"40px", fontFamily:"monospace"}}>
                    <Reg />
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LogReg;
