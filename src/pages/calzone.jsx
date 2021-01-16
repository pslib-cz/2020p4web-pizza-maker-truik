import React, { useContext, useState } from "react";
import Display from "../components/display";
import {IngredienceContext} from "../components/ingredienceProvider";
import Buy from "../components/buy";
import {Container, Table} from "reactstrap";

const Calzone = () => {
    const[ingredients, SetIngredients] = useContext(IngredienceContext);
    const [calzone, setCalzone] = useState([]);
    const add = props => {
        if(calzone.length < 4){
            setCalzone(calzone => [...calzone, {name: props.name , category: props.category}]);
        }
    }
    return(
        <Container>
            <Table dark hover striped>
                <thead>
                    <tr>
                        <td colSpan={3}>Calzone</td>
                    </tr>
                    <tr>
                        <td>Jméno</td>
                        <td>Kategorie</td>
                        <td>Objednat</td>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(e => (<Buy name={e.name} category={e.category} add={add}></Buy>))}
                </tbody>
            </Table>
            <Table dark hover striped>
                <thead>
                    <tr>
                        <td colSpan={2}>Objednáno</td>
                    </tr>
                    <tr>
                        <td>Jméno</td>
                        <td>Kategorie</td>
                    </tr>
                </thead>
                <tbody>
                {calzone.map(e => (<Display name={e.name} category={e.category}></Display>))}
                </tbody>
            </Table>
            
        </Container>
    );
}

export default Calzone;