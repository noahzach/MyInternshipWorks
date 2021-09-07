import React, {useState} from 'react';

function PostSignUp(values) {
    
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [email, setEmail] = useState('');
     //const [password, setPassword] = useState('');
  return (
    <div className="App">
      

         <form>
          <fieldset>
            <h1>WELCOME</h1>
            <br></br>
            <h2>{values.firstName} {values.lastName}</h2>
            <br></br> 
            <p>You have logged in with the email address as</p>
            <br></br>
            <h1>{values.email}</h1>
            <br></br>           
              <button className = "button">Logout</button>

            </fieldset>
        </form> 
         
    </div>
  );
}
  

  



export default PostSignUp;