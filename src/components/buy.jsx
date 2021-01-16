import { Button, Table } from "reactstrap";
import React from "react";

export default function Buy(props) {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.category}
            </td>
            <td>
                <Button onClick={e => props.add({ name: props.name, category: props.category })}>Objednat</Button>
            </td>
        </tr>
    );
}