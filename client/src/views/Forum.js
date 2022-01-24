import React from 'react';
import CreatePost from '../components/CreatePost';

const Forum = () => {
    return (
        <div>
            <CreatePost path = "/users/forum/create" /> {/*will need to be a protected path; path = "/api/users/forum/create" */ } 
            <DisplayPosts path = "/users/forum/display" />
        </div>
    )
}

export default Forum
