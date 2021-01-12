import React from 'react';

export default function HelloWorld(props){
    return(
        <div>
            <h1>Hello world and hello {props.name}</h1>
        </div>
    );
}