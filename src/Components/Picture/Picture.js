import React from 'react';

const Picture = (props) => {
    const {url} = props.picture;
    return (
        <div> 
            <img style={{width:'200px',height:'200px',}} src={url} alt=""/>
        </div>
    );
};

export default Picture;