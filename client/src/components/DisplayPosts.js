import React from 'react'

const DisplayPosts = () => {
    return (
        <div>
            <h1>All Forum Posts</h1>
            <h2>A beautiful table to display posts will go here</h2>  
            <h4>The one below obviously needs some styling</h4>          
            <p></p>
            <table >
                <thead>
                    <tr>
                        <th>Member </th>
                        <th>Topic </th>
                        <th>Title </th>
                        <th>Post </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mocha Frappe </td>
                        <td>Advice </td>
                        <td>Need Help! </td>
                        <td>Hi! How should I...</td>
                    </tr>
                </tbody>
            </table>
            <p></p>
            <ul>
            <li>The table will display the member/creators's name, the post content 
                (topic, title, body), and have delete & edit buttons.
            </li>
            <li>There will also be a field to add comments, as well as a like button.</li>
            </ul>            
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu 
                cursus vitae. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Tellus 
                in metus vulputate eu scelerisque.Nec ultrices dui sapien eget. Tincidunt 
                id aliquet risus.
            </h6>
        </div>
    )
}

export default DisplayPosts;
