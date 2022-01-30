import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const RegisterUser = props => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    // use a single state object to hold all data 
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // use a single function to update the state object
    // use input's name attribute as the key to the object
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const register = e => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register", 
        user, {
            withCredentials: true,
        })
            .then(res => {
                console.log(res.data);
                
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })

                setConfirmReg("Thank you for Registering. You can now log in!");
                setErrs({}); // remember to reset errors state if registration successful
            })
            .catch((err) => {
                console.log(err);
                setErrs(err.response.data.errors);
            });
    };

    return (
        <div>
            <h2>Register</h2>
            {
                confirmReg ?
                    <h4 style={{color: "green"}}>{confirmReg}</h4>
                    : null
            }
            <form onSubmit={register}>
                <div>
                    <label>First Name </label>
                    {
                        errs.firstName ?
                        <span className="error-text">{ errs.firstName.message }</span>
                        : null
                    }
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <p></p>
                <div>
                    <label>Last Name </label>
                    {
                        errs.lastName ?
                        <span className="error-text">{ errs.lastName.message }</span>
                        : null
                    }
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <p></p>
                <div>
                    <label>Email </label>
                    {
                        errs.email ?
                        <span className="error-text">{errs.email.message}</span>
                        : null
                    }
                    <input 
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={ handleChange }                    
                    />
                </div>
                <p></p>
                <div>
                    <label>Password </label>
                    {
                        errs.password ?
                            <span className="error-text">{ errs.password.message }</span>
                            : null
                    }
                    <input 
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={ handleChange }                    
                    />
                </div>
                <p></p>
                <div>
                    <label>Confirm Password </label>
                    {
                        errs.password ?
                            <span className="error-text">{ errs.confirmPassword.message }</span>
                            : null
                    }
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={ handleChange }                    
                    />
                </div>
                <p></p>
                <div className = "center">
                    <button type="submit" className="btn">Register</button>
                </div>
            </form>
        </div>
    )
};

export default RegisterUser;