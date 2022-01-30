import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreatePost = (props) => {
    const [ forumTopic, setForumTopic ] = useState("");
    const [ forumPostTitle, setForumPostTitle ] = useState("");
    const [ forumPost, setForumPost ] = useState("");
    const [ errors, setErrors ] = useState({});
    // is this where likes would go?

    const allForumTopics = [ 
        "Advice",
        "Work from Home",
        "Freelance",
        "Resume Help",
        "Networking",
        "Childcare",
        "Career Change",
        "Other"
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const newForumPost = {
            forumPostTitle,
            forumPost,
            forumTopic,
        };    

        axios.post("http://localhost:8000/api/users/forum/", newForumPost)
            .then((res) => {
                console.log(res);
                navigate("/forum/" + res.data._id);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                if(err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            })
    };

    return (
        <div>
            <h1>Create Forum Post</h1>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>Topics </label>
                    {
                        errors.forumTopic ?
                        <span className="error-text">{errors.forumTopic.message}</span>
                            : null
                    }
                    <select
                        name="forumTopic"
                        value={forumTopic}
                        onChange={(e) => setForumTopic(e.target.value)}
                    >
                        <option value=""></option>
                        {
                            allForumTopics.map((forumTopic, index) => (
                                <option value={forumTopic} key={index}>{forumTopic}</option>
                            ))
                        }
                    </select>
                </div>
                <p></p>
                <div>
                    <label>Post Title: </label>
                    {
                        errors.forumPostTitle ?
                            <span className="error-text">{errors.forumPostTitle.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="forumPostTitle"
                        value={forumPostTitle}
                        onChange={(e) => setForumPostTitle(e.target.value)}
                    />
                </div>
                <p></p>
                <div>
                    <label>Post: </label>
                    {
                        errors.forumPost ?
                            <span className="error-text">{errors.forumPost.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="forumPost"
                        value={forumPost}
                        onChange={(e) => setForumPost(e.target.value)}
                    />
                </div>
                <p></p>
                <div>
                    <button type="submit" className="btn">Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;
