import React from 'react';

export default function ShowIngredients(props){
    console.log(props);
    return(
        <>
            <h4>{props.name}</h4>
            <p>{props.category}</p>
        </>
    );
}