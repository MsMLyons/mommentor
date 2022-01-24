import React from 'react';
import { Link } from '@reach/router';

const HomeView = () => {
    return (
        <div>
            <header>
            <Link to="/api/users/login">Login</Link>  | <Link to="/api/users/register">Register</Link>
            </header>
            <h1>Mom Mentor</h1>
            <hr />
            <h2>Welcome to Mom Mentor</h2>
            <h3>Hi, Moms! Hello, Mentors!</h3>
            <p>Mom mentor is a social network that aims to connect moms who have had to leave the workforce or who are interested in a career change with other women in a position to offer mentorship and support in this endeavor.</p>
            <Link to="/api/users/register">Sign Up Now!</Link> {/*change to button*/}
        </div>
    )
}

export default HomeView;
