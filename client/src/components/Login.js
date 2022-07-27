import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "Email") {
            setEmail(inputValue)
        } else if (inputType === "Password") {
            setPassword(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Please enter a login email')
        } else if (!password) {
            setErrorMessage('Please enter a password')
        }

        setEmail();
        setPassword();
}

    return (
        <div id="loginForm">
            <form>
                <div className="formItem">
                    <label>Email</label>
                    <input
                    value={email}
                    type="text"
                    name="Email"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="formItem">
                    <label>Password</label>
                    <input
                    value={password}
                    type="password"
                    name="Password"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="formItem">
                    <label>Submit</label>
                    <input
                    type="submit" 
                    value="Send" 
                    onClick={handleFormSubmit}
                    />
                </div>
            </form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Login