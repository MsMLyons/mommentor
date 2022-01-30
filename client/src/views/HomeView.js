import React from 'react';
import { Link } from '@reach/router';

const HomeView = () => {
    return (
        <div>
            <header className="header">
            <Link to="/logreg">Login</Link>  | <Link to="/logreg">Register</Link>
            </header>
            <h1>Mom Mentor</h1>
            <hr />
            <h2>Welcome to Mom Mentor</h2>
            <h3>Hi, Moms! Hello, Mentors!</h3>
            <p>Mom mentor is a social network that aims to connect moms who have had to leave the workforce 
                or who are interested in a career change with other women in a position to offer mentorship 
                and support in this endeavor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.</p>
            <p>Sit amet justo donec enim diam vulputate ut pharetra sit. Elit pellentesque habitant morbi 
                tristique senectus et. Nulla facilisi etiam dignissim diam quis enim lobortis.</p>
            <p>Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Urna nunc id cursus 
                metus aliquam eleifend mi. Etiam non quam lacus suspendisse. Turpis tincidunt id aliquet risus 
                feugiat in ante metus. Risus commodo viverra maecenas accumsan lacus vel facilisis. Eu augue 
                ut lectus arcu bibendum at varius. Leo in vitae turpis massa. </p>
            <Link to="/logreg">Sign Up Now!</Link> {/*change to button*/}
            <p></p>
            <Link to="/api/profile/viewAll">All Profiles</Link>    
            <p></p>
            <Link to="/forum">Forum</Link>              
        </div>
    )
}

export default HomeView;
