import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { useHistory } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';

const Home = () => {

    const [post,setPost] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data.slice(0,15)))
    });

    let history = useHistory();

    function handleClick(postId){

        history.push(`/post/${postId}`);
    }

    
    return (
        <div>
            <h1 style={{color: 'white',background:'blue',textAlign: 'center'}}>Online-Post-View</h1>
            <Container>
                <Grid container spacing={3}>
            {
                post.map( post =><Grid key={post.id} item md={4}><Post post={post} handleClick={handleClick}></Post></Grid> )
            }

              </Grid>  
           </Container>
        </div>
    );
};

export default Home;