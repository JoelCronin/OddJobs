import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Navigate } from 'react-router-dom'

import Auth from '../utils/auth';


function Login() {
    console.log(Auth.loggedIn)
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);

        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });  
    };

    return (
        (Auth.loggedIn()) ? (
            <Navigate to="/home" />
        ) : (
        <div>
            <div id="loginForm">

            {/* {data ? ( 
                <h1>TEST WORKING</h1>
            ): ( */}
                <form onSubmit={handleFormSubmit}>
                    <div className="formItem">
                        <label>Email</label>
                        <input
                        value={formState.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="formItem">
                        <label>Password</label>
                        <input
                        value={formState.password}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="formItem">
                        <label>Submit</label>
                        <button
                        type="submit" 
                        >Submit</button>
                    </div>
                </form>
                {/* )} */}
                {/* {error && (
                    <div>
                    <p className="error-text">{error.message}</p>
                    </div>
                )} */}
            </div>

        </div>
        )

    );
}

export default Login