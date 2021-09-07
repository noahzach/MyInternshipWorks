// import './app.css';
import React, {useState} from 'react';
import PostSignUp from './postSignUp'

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, toggleShow] = useState(true);
    const [errorObj, setErrorObj] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const submitData = () => {
        if (firstName && email && password && lastName) {
            toggleShow(!show);
        } 
    }

  return (
    <div className="App">
      {/* onSubmit = {handleSubmit(onSubmit)} */}
    {show ? (
        <form>
          <fieldset>
            <h1>LOGIN FORM</h1>
        
              <label htmlFor="fName" className = "labelPadding"> First Name </label> 
              <br></br>
              <input type = "text" className = "labelSize" value = {firstName} 
              onChange={(e) => {
                setFirstName(e.target.value) 
                if (e.target.value.trim()) {
                    setFirstNameError("")
                } else {
                    setFirstNameError("First Name is Required")
                }
                }}/>  
              <br></br>
              <small>{firstNameError}</small>            
              <br></br> <br></br>

              <label htmlFor="lName" className = "labelPadding2"> Last Name </label> <br></br> 
              <input type = "text" className = "labelSize" value = {lastName} 
                onChange={(e) => {
                  setLastName(e.target.value)
                  if (e.target.value.trim()) {
                    setLastNameError("")
                } else {
                    setLastNameError("Last Name is Required")
                }
                }}></input> 
                <br></br>
                <small>{lastNameError}</small>
              <br></br> <br></br>
          
              <label htmlFor="email" className = "labelPadding"> Email </label> <br></br> 
              <input type = "email" className = "labelSize" value = {email}
               onChange={(e) => {
                setEmail(e.target.value.trim())
                if (e.target.value.trim()) {
                  setEmailError("")

              } else {
                  setEmailError("Email is Required")
              }
              }}></input> 
              <br></br>
              <small>{emailError}</small>
              <br></br> <br></br>

              <label htmlFor="password" className = "labelPadding2"> Password </label> <br></br> 
              <input type = "password" className = "labelSize" value = {password} 
              onChange={(e) => {
                  setPassword(e.target.value)
                  if (e.target.value.trim()) {
                    setPasswordError("")
                } else {
                    setPasswordError("Password is Required")
                }
                }}></input> 
                <br></br>
                <small>{passwordError}</small>
              <br></br> <br></br>
              
              <button className = "button" onClick = {() => { submitData() }} > Sign Up  </button>  

            </fieldset>
        </form> 
    ): (
    <PostSignUp clickValue = {show} firstName = {firstName} lastName = {lastName} email = {email} password = {password}/>
    )}    
    </div>
  );
}
  
export default SignUp;