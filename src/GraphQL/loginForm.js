import React, {useState} from 'react';
import { gql, useMutation } from '@apollo/client';



const LOGIN_WITH_EMAIL_PASSWORD = gql`
  mutation login($email: String! , $password: String!) {
    login(email: $email, password:$password) {
        token
    }
  }
`;

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginWithEmail,results] = useMutation(LOGIN_WITH_EMAIL_PASSWORD,{
      onCompleted:(res) =>{
          console.log('res-->',res)
          localStorage.setItem('accessToken', res.login.token)
      }
  });

    const submitData = (e) => {
        console.log('Email-->', email);
        console.log('Password-->', password)
        loginWithEmail({ variables: { email:email, password:password} });   
    }
    console.log('results-->',results)

  return (
    <div className="App">
 
            <h1>LOGIN FORM</h1>
              <label htmlFor="email" className = "labelPadding"> Email </label> <br></br> 
              <input type = "email" className = "labelSize" value = {email}
               onChange={(e) => {
                setEmail(e.target.value)
              }}></input> 
              <br></br> <br></br> <br></br>

              <label htmlFor="password" className = "labelPadding2"> Password </label> <br></br> 
              <input type = "password" className = "labelSize" value = {password} 
              onChange={(e) => {
                  setPassword(e.target.value)
                }}></input> 
                <br></br> <br></br> <br></br>
              
              <button className = "button" onClick = {() => { submitData() }}> Sign Up  </button> 
            
         
<br></br><br></br>
{/* <input type="email" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
             <input  type ="password" placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)} />
             <button onClick={() =>submitData()}>Login</button> */}

             <a href = "/listlocation"> List Location </a>
             <br></br>
             <a href = "/listagencytable"> List Agency Table</a>             

    </div>
  );
} 
  
export default LoginForm;