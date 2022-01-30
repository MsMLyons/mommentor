import React from 'react';
import Login from '../components/Login';
import RegisterUser from '../components/RegisterUser';
import '../App.css';
import { Link } from '@reach/router';

// view component used to group multiple components for same route
const LogReg = () => {
    return (
        <div className="container-flex">
            <div>
                <header className="header">
                    <Link to="/">Home</Link>
                </header>
            </div>
            <h1>Welcome! Please log in or register for an account</h1>
            <Login />
            <hr />
            <RegisterUser />
            <div>
                <footer>
                    <h6>Disclaimer: Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. 
                        Vitae tortor condimentum lacinia quis vel eros donec. Dui vivamus arcu 
                        felis bibendum ut tristique et egestas quis. Sit amet nisl suscipit 
                        adipiscing bibendum est ultricies integer. Felis imperdiet fermentum leo 
                        vel porta non pulvinar. 
                    </h6>
                </footer>
            </div>
        </div>
    );
};

export default LogReg;