import React,{useState} from "react";
import { Link } from "react-router-dom";
import validation from "./LoginValidation";
import axios from 'axios';

 

function Signup() {

    const [values, setvalues] = useState({
        name:'',
        email:'',
        password:''
    }
    )

    const [errors,setErrors]=useState({})

    function handleInput(event){
        setvalues(prev => ({...prev,[event.target.name]: [event.target.value]}))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
         console.log(values);
        if(values.name !== ""  && values.email !== "" && values.password !== ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }

return (
    <div className="d-flex justify-content-center align-items-center bg-black vh-100">
    <div className="bg-white p-3 rounded w-25">
        <h1>SignUp</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder="enter your name" name="name" 
                onChange={handleInput} className="form-control rounded-0"/>
                {errors.name && <span className="text-danger"> {errors.name}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="email"><strong>Mail</strong></label>
                <input type="text" placeholder="enter your Mail" name="email" 
                 onChange={handleInput} className="form-control rounded-0"/>
                 {errors.email && <span className="text-danger"> {errors.email}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="enter password" name="password" 
                 onChange={handleInput} className="form-control rounded-0"/>
                 {/* {errors.password && <span className="text-danger"> {errors.password}</span>} */}
            </div>
            <button type="submit" className='btn btn-success w-100'>Signup</button>
            <p></p>
            <Link to="/login" className='btn btn-default border w-100'>Login Here</Link>
            <p></p>
            <Link to="/expensemanagement" className='btn btn-success border w-100 '>Click to add expense</Link>
        </form>
    </div>
</div>
  );
}

export default Signup;
