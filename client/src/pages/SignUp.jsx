import React, {useState} from 'react';
// import {validateEmail} from '../utils/helpers'

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import { Navigate } from 'react-router-dom';

import Auth from '../utils/auth';
import helpers from '../utils/helpers';
// import jwtDecode from 'jwt-decode';

function SignUp() {

    const [formState, setFormState] = useState({
      name: '',
      email: '',
      password: '',
      image: helpers.getrandomicon(1,21),
    });

    const [addUser] = useMutation(CREATE_USER);

    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);

      try {
        const { data } = await addUser({
          variables: {
            input:{
              ...formState
            }
          },
        });
        Auth.login(data.createUser.token);
      } catch (e) {
        console.error(e);
      }
    };

  return (
    (Auth.loggedIn()) ? (
      <Navigate to="/home" />
    ) : (
      <div>
        <form onSubmit={handleFormSubmit}>
                  <input
                    placeholder="Your username"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <input
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
      </div>
    )
  );
}

export default SignUp

  //States set up for email, name message and potential error messages
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')
//   const [errorCheck, setErrorCheck] = useState('');

//   //Monitors which field is being typed in and updates relevant variable through the Set functions
//   const handleInputChange = (event) => {
//     const { target } = event;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setUsername(inputValue);
//     } else {
//       setPassword(inputValue);
//     }
//   }

// // On pressing submit button this function check for valid email and that a name and message is provided
//   const handleContactSubmit = (event) => {
//     event.preventDefault();

//     if(!validateEmail(email)) {
//       setErrorCheck('Email is in Invalid Format');
//       return;
//     } 

//     if( !username || !password ) {
//       setErrorCheck('Name and Password must be filled out');
//       return
//     }
//     setEmail('')
//     setUsername('')
//     setPassword('')
//     setErrorCheck('')
//   }


/* <div className='signup-container' >
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

</div> */
