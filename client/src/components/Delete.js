import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Delete = (props) => {
    const { profileId, afterDelete } = props; 

    const deleteHandler = () => {
        console.log('Delete id: ' + profileId);

        axios.delete("http://localhost:8080/api/profile/" + profileId) 
            .then((res) => {
                console.log("profile deleted: ");
                console.log(res.data);
                
               // useafterDelete(profileId); 
                navigate('/api/profile/viewAll');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <button className="deletebtn" onClick={deleteHandler()}>
            Delete
        </button>
    )

}

export default Delete;
