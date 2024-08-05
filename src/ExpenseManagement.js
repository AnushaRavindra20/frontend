import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useNavigate} from "react-router-dom";


function ExpenseManagement(){
    const [date, setDate]=useState('');
    const [amount, setAmount]=useState('');
    const [category, setCategory]=useState('');
    const [description, setDescription]=useState('');
    const navigate=useNavigate('');

    
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/expense', {date, amount , category, description})
        .then(res => {
            console.log(res);
            navigate('/');
          }).catch(err => console.log(err));

    }
    
    
    return(
        <div className="d-flex justify-content-center align-items-center bg-black vh-100">
            <div className="bg-white p-3 rounded w-25">
            {/* <Link to="/expensemanagement" className="btn btn-success">Add</Link> */}
                <h1>Expense Page</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="date"><strong>Date</strong></label>
                        <input type="date" placeholder="enter the date" name="date" 
                        onChange={e=>setDate(e.target.value)}  className="form-control rounded-0 "/>
                        </div>


                    <div className="mb-3">
                        <label htmlFor="number"><strong>Amount</strong></label>
                        <input type="number" placeholder="enter the amount" name="password" className="form-control rounded-0"
                        onChange={e=>setAmount(e.target.value)} />
                        </div>
                        
                        <div className="mb-3">
                        <label htmlFor="category"><strong>category</strong></label>
                        <input type="text" placeholder="enter the category" name="password" className="form-control rounded-0"
                        onChange={e=>setCategory(e.target.value)} />
                        </div>
                        
                        <div className="mb-3">
                        <label htmlFor="description"><strong>Description</strong></label>
                        <textarea  name="description" rows="4" cols="38" onChange={e=>setDescription(e.target.value)}></textarea>
                        </div>

                        

                    <button type='submit' className='btn btn-success w-100'>Add expense</button>
                    
                    <p></p>
                    <Link to="/expense" className='btn btn-success border w-100 '>expense list</Link>
                </form>
            </div>
        </div>

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    )
}
export default ExpenseManagement;