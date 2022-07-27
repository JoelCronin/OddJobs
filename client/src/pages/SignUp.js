import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers'

import React from 'react'

function SignUp() {
  //States set up for email, name message and potential error messages
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorCheck, setErrorCheck] = useState('');

  //Monitors which field is being typed in and updates relevant variable through the Set functions
  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setUsername(inputValue);
    } else {
      setPassword(inputValue);
    }
  }

// On pressing submit button this function check for valid email and that a name and message is provided
  const handleContactSubmit = (event) => {
    event.preventDefault();

    if(!validateEmail(email)) {
      setErrorCheck('Email is in Invalid Format');
      return;
    } 

    if( !username || !password ) {
      setErrorCheck('Name and Password must be filled out');
      return
    }
    setEmail('')
    setUsername('')
    setPassword('')
    setErrorCheck('')
  }

  return (
<div className='signup-container' >
    <div className='signup-header' > 
        <h2 >Sign-Up</h2>
    </div>
    <div className='form'>
        <form name="signup" method="POST" string="placeholder">
            <div className="form-group">
                <label className="label" htmlFor="inputName">Name</label>
                <input type="text" name="name" value={username} onChange ={handleInputChange}className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label  className="label" htmlFor="inputEmail">Email</label>
                <input type="email" name="email" value={email} onChange ={handleInputChange} className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="inputPassword">Message</label>
                <input type="password" name="password" value={password} onChange ={handleInputChange} className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="inputImage">Image</label>
                <input type="image" name="Image" className="form-control" placeholder="Image Upload"/>
            </div>
                <button type="submit" onClick={handleContactSubmit} className="signup-button" id='send'>Submit</button>
        </form>
        {errorCheck && (
                <div>
                <p className="error-text">{errorCheck}</p>
                </div>
            )}
    </div>

</div>

  );
}

export default SignUp

