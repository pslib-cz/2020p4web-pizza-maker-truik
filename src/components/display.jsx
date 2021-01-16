import React from "react";

export default function Display(props){
    return(
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.category}
            </td>
        </tr>
    );
}