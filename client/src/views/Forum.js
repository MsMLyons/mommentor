import React from 'react';
import CreatePost from '../components/CreatePost';
import DisplayPosts from '../components/DisplayPosts';
import { Link } from '@reach/router';

const Forum = () => {
    return (
        <div>
            <div>
                <header className="header">
                    <Link to="/">Home</Link>
                </header>
            </div>
            <CreatePost path = "/users/forum/create" /> {/*will need to be a protected path; path = "/api/users/forum/create" */ } 
            <DisplayPosts path = "/users/forum/display" />
        </div>
    )
}

export default Forum
