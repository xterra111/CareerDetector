//axios, useEffect, useState, Link

import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";






const NewGrocery = (props) => {
    // This code here is prior to refractoring
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [boxArt, setBoxArt] = useState("");
    const [quantity, setQuantity] = useState("");


    const [errors, setErrors] = useState({});

    

    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/groceries",
        //request's body that the back-end is asking for (see our controller)... create(req.body) THIS IS THAT!
        {
            name,
            type, //the getter MUST MATCH the field name in schema to write it this way
            boxArt,
            quantity,
        },
        {withCredentials:true, credentials:'include'}
        )
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/home");
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }





    return (
        <div>
            <header style={{ borderBottom: "5px double lightgray", padding: "10px", margin: "10px" }}>
                <h1 style={{ fontSize: "30px", marginLeft: "450px", marginRight: "450px", color: "#FF8C00", fontFamily:"monospace", backgroundColor: "#FFDEAD"}}>Add an Item</h1>
                <Link to={"/home"}>Return Home</Link>
            </header>
            <div className="form" style={{marginLeft:"100px", marginRight:"100px", marginTop:"20px"}}>
                <form className= "form-control" onSubmit={submitHandler}>
                    <div>
                        <label className="form-label">Name</label>
                        <input className = "form-control" value={name} onChange={(e) => setName(e.target.value)} type="text"  />
                        <br />
                        {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                        }
                    </div>
                    <div>
                        <label className="form-label">Type</label>
                        <select className="form-control, mx-auto, text-center, my-3, border border-3" value={type} name="type" onChange={(e) => setType(e.target.value)} >
                            <option defaultValue hidden>Select a Type</option>
                            <option value="Produce">Produce</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Baking/Spices">Baking/Spices</option>
                            <option value="Household Goods">Household Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Baby Food">Baby Food</option>
                            <option value="Paper/Plastic">Paper/Plastic</option>
                            <option value="Bread/Grains">Bread/Grains</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Condiments">Condiments</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Meat/Protein">Meat/Protein</option>
                            <option value="Toiletries">Toiletries</option>
                            <option value="Pet Care">Pet Care</option>
                        </select>
                        <br />
                        {
                            errors.type ?
                                <span>{errors.type.message}</span>
                                : null
                        }
                    </div>
    
                    <div>
                        <label className="form-label">boxArt</label>
                        <input className = "form-control" value={boxArt} onChange={(e) => setBoxArt(e.target.value)} type="text" />
                        <br />
                        {
                            errors.boxArt ?
                                <span>{errors.boxArt.message}</span>
                                : null
                        }
                    </div>
                    <div>
                        <label className="form-label">Quantity</label>
                        <input className = "form-control"value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" />
                        <br />
                        {
                            errors.quantity ?
                                <span>{errors.quantity.message}</span>
                                : null
                        }    
                    </div>
                    <button className="btn btn-primary m-1">Add Item</button>
            </form>
        </div>
    </div>
    )


}





export default NewGrocery;