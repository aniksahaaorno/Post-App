import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment'
import Picture from '../Picture/Picture';
import Box from '@material-ui/core/Box';

const PostDetails = () => {

    const {postId} = useParams();

    const [postDetail,setPostDetail] = useState({});

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPostDetail(data))
    },[]);

    const [comments,setComments] = useState([]);

    useEffect(() =>{
         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
         .then(res => res.json())
         .then(data => setComments(data))
    },[]);


    const [picture,setpicture] = useState([]);

    useEffect(() =>{
         fetch('https://jsonplaceholder.typicode.com/photos')
         .then(res => res.json())
         .then(data => setpicture(data.slice(0,5)))
    },[]);


 

    return (
             <div>
                 <div style={{textAlign: 'center',}}>
                                <h1>Id: {postId}</h1>
                                <h4>title: {postDetail.title}</h4>
                                <p>{postDetail.body}</p>
                                <hr/>
                                <h3>Comment</h3>
                                <hr/>
    
                 </div>


                 <div>
                       
                 <Box display="flex" flexDirection="row" p={1} m={1}>
                            <Box p={1}>
                            {
                             picture.map(picture =><Picture picture={picture}></Picture> )
                             }
                            </Box>
                            <Box p={1}>
                            {
                            comments.map(comment =><Comment comment={comment}></Comment> )
                            }
                            </Box>

                </Box>
                           
                        
                         
                   


                 </div>

             </div>
    );
};

export default PostDetails;