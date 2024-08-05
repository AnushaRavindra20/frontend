import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./LoginValidation";


function Login(){
    const [values,setvalues]=useState({
        email:'',
        password:''
    }
    )

    const [errors,setErrors]=useState({})

    function handleInput(event){
        setvalues(prev => ({...prev,[event.target.name]: [event.target.value]}))

    }

    function handleSubmit(event){
        event.preventDefault();
         setErrors(validation(values));
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-info vh-100">
            <div className="bg-white p-3 rounded w-25 border border-primary ">
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="enter your email" name="email"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="enter password" name="password"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Login</button>
                    <p></p>
                    <Link to="/signup" className='btn btn-default border w-100'>Create account</Link>
                </form>
            </div>
        </div>
    )
}
export default Login;