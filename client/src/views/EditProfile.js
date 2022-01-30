import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Delete from '../components/Delete';

const EditProfile = (props) => {
    const { id } = props;

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ accountType, setAccountType ] = useState("");
    const [ avatar, setAvatar ] = useState("");
    const [ errors, setErrors ] = useState({});

    const allAccountTypes = [ "Mom", "Mentor" ]

    useEffect(() => {
        axios.get("http://localhost:8000/api/profile/" + id)
            .then((res) => {
                console.log(res.data._id);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setBirthdate(res.data.birthdate);
                setLocation(res.data.location);
                setAccountType(res.data.accountType);
                setAvatar(res.data.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const redirectAfterDelete = () => {
        navigate('/api/profile/viewAll');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempProfile = {
            // user,
            firstName,
            lastName,
            email,
            birthdate,
            location,
            accountType,
            avatar,
        };

        // this is the address that the slash makes a difference at the end
        axios.put("http://localhost:8000/api/profile/edit/" + id, tempProfile)
            .then((res) => {
                console.log(res);
                navigate("/api/profile/" + res.data._id);
            })
            .catch((err) => {
                console.log(err);
                // to display errors & validations
                if(err.response.data.errors) {
                    setErrors(err.response.data.errors)
                }
            })
    };

    return (
        <div className="ProfileView">
            <div>
                <header className="header">
                    <Link to="/">Home</Link>
                </header>
            </div>
            <h1>Update Your Profile</h1>
            <form className="form">
                {/* how to handle user info pulled in from log/reg? */}
                <div>
                    <label>First Name </label>                    
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}                    
                    />
                    { 
                        errors.firstName ?
                            <span className="error-text">{errors.firstName.message}</span>
                            : null
                    }
                </div>
                <p></p>
                <div>
                    <label>Last Name </label>                    
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    { 
                    errors.lastName ?
                        <span className="error-text">{errors.lastName.message}</span>
                        : null
                    }
                </div>
                <p></p>
                <div>
                    <label>Email </label>                    
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    { 
                    errors.email ?
                        <span className="error-text">{errors.email.message}</span>
                        : null
                    }
                </div>
                <p></p>
                <div>
                    <label>Birthdate </label>                    
                    <input
                        type="date"
                        name="birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                    { 
                    errors.birthdate ?
                        <span className="error-text">{errors.birthdate.message}</span>
                        : null
                    }
                </div>
                <p></p>
                <div>
                    <label>Location </label>                    
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />  
                    { 
                    errors.location ?
                        <span className="error-text">{errors.location.message}</span>
                        : null
                    }       
                </div>
                <p></p>
                <div>
                    <label>Account Type </label>                        
                    <select
                        name="accountType"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value=""></option>
                            {
                                allAccountTypes.map((accountType, index) => (
                                    <option value={accountType} key={index}>{accountType}</option>
                                ))
                            }
                    </select>
                    { errors.accountType ?
                            <span className="error-text">{errors.accountType.message}</span>
                            : null
                    }
                </div>
                <p></p>
                <div>
                    <label>Avatar </label>
                    { 
                    errors.avatar ?
                        <span className="error-text">{errors.avatar.message}</span>
                        : null
                    }
                    <input
                        type= "text"
                        name="avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </div>
                <p></p>
                <div>
                    <button onClick={handleSubmit} type="submit" className="btn">Update Profile</button>
                    
                    <Delete profileId={id}  />
                </div>
            </form>            
        </div>
        
    )
}

export default EditProfile;
