import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Expense(){
const [exp,setExp]=useState([])
useEffect(() =>{
axios.get('http://localhost:8081/')
.then(res => setExp(res.data))
.catch(err => console.log(err));


},[]
)


    return(
        <div className="d-flex justify-content-center align-items-center bg-warning vh-100">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/ExpenseManagement" className="btn btn-success">Add</Link>
                <table className="table">
                    <thead>
                    <tr>
                        <th>date</th>
                        <th>amount</th>
                        <th>category</th>
                        <th>description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                <tbody>
                         {
                            exp.map((data, i) => (
                                 <tr key={i}>
                                    <td>{data.date}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.category}</td>
                                    <td>{data.description}</td>
                                    <td>
                                        <button className="btn btn-primary ">Update</button>
                                        <button className="btn btn-danger  ms-2">delete</button>

                                    </td>

                                 </tr>

                            )
                            
                            )
                         }
                </tbody>
                
                
                




            
            
            
                    </table>
            </div>
         






         
         
         
         </div>        



    )



}
export default Expense;