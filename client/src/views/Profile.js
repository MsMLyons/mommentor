import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Profile = (props) => {
    const { id } = props;
    const [ profile, setProfile ] = useState({});
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/profile/" + id)
            .then((res) => {
                console.log(res);
                setProfile(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    return (
        <div className="ProfileView">
            <div>
                <header className="header">
                    <Link to="/api/profile/viewAll">All Profiles</Link>
                </header>
            </div>
            <div>
                {profile.avatar}
                <h5>Your Avatar     </h5>
            </div>
            <h1>Welcome to Your Profile, {profile.firstName} {profile.lastName}</h1>
            <table className="">
                <tbody>
                    <tr>
                        <td>Email: </td>
                        <td>{profile.email}</td>
                    </tr>
                    <tr>
                        <td>Birthdate: </td>
                        <td>{profile.birthdate}</td>
                    </tr>
                    <tr>
                        <td>Location: </td>
                        <td>{profile.location}</td>
                    </tr>
                    <tr>
                        <td>Account Type: </td>
                        <td>{profile.accountType}</td>
                    </tr>
                    
                </tbody>
            </table>
            <hr></hr>            
            <button onClick={(e) => navigate(`/api/profile/edit/${id}`)} className="btn">Update Profile</button>
        </div>
    )
}

export default Profile;
