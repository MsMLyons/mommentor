import React, { useState, useEffect } from 'react';
import '../App.css'; 
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from '../components/Delete';

const AllProfiles = (props) => {
    const [ allProfiles, setAllProfiles ] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/profile/viewAll")
            .then((res) => {
                console.log(res);
                setAllProfiles(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updateAfterDelete = (deletedProfileId) => {
        let filteredProfileArray = allProfiles.filter((profileObj) => {
            return profileObj._id !==deletedProfileId;
        });

        setAllProfiles(filteredProfileArray);
    }

    return (
        <div className="ProfileView">
            <div>
                <header className="header">
                    <Link to="/">Home</Link>
                </header>
            </div>
            <h1>All Profiles</h1>
            <table className="">
                <thead>
                    <th>Member</th>
                    <th>Account Type</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        allProfiles.map((profile, index) => {
                            console.log(profile.firstName + " " + profile.lastName);

                            return (
                            <tr key={index} className="">
                                <td>
                                    <Link to={"/api/profile/" + profile._id}>{profile.firstName} {profile.lastName}</Link>
                                </td>
                                <td>{profile.accountType}</td>
                                <td>
                                    {/*add an edit button here*/}
                                    <Delete profileId={profile._id} afterDelete={updateAfterDelete} />
                                </td>
                            </tr>
                        )}
                        )
                    }
                </tbody>
            </table>    
            <hr></hr>   
            <Link to="/api/profile/new">Create Profile</Link>    
        </div>
    )
}

export default AllProfiles;