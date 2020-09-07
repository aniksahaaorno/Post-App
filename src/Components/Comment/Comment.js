import React, { useState, useEffect } from 'react';


const Comment = (props) => {


    const {name,email,body} = props.comment;


    return (
        <div style={{height:'200px'}}>
           
            <h3>{name}</h3>
            <h5>{email}</h5>
            <p>{body}</p>
            
        </div>
    );
};

export default Comment;