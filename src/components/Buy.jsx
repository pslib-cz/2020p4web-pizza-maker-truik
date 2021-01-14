import React from "react";
import {Button} from 'reactstrap';

export default function Buy(props){
    return(
        <>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <Button onClick={e => props.add({name:props.name, category:props.category})}>Objednat</Button>
        </>
    );
}