function validation(values){

let error={}
const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

if(values.email===""){
    error.email="email should not be empty"
}
else if(!email_pattern.test(values.email)){
    error.email="wrong email"
}
else{
    error.email=""
}

if(values.password===""){
    error.password="password should not be empty"
}
else if(!password_pattern.test(values.password)){
    error.password='wrong password'
}
else{
    error.password=''
}




}



export default validation;