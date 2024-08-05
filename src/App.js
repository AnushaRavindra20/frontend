
import React from "react";
import Login from "./login";
import Signup from "./signup";
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import ExpenseManagement from "./ExpenseManagement";
//import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Expense from "./expense";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      
      {/* <Route path="/" element={<Login/>}/> */}
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/expensemanagement" element={<ExpenseManagement/>}/>
      <Route path="/expense" element={<Expense/>}/>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
