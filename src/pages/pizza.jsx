import React, { useContext, useState } from "react";
import Display from "../components/display";
import {IngredienceContext} from "../components/ingredienceProvider";
import Buy from "../components/buy";
import {Container, Table} from "reactstrap";

const Pizza = () => {
    const[ingredients, SetIngredients] = useContext(IngredienceContext);
    const [pizza, setPizza] = useState([]);
    const add = props => {
        if(pizza.length < 4){
            setPizza(pizza => [...pizza, {name: props.name , category: props.category}]);
        }
    }
    return(
        <Container>
            <Table dark hover striped>
                <thead>
                    <tr>
                        <td colSpan={3}>Pizza</td>
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
                {pizza.map(e => (<Display name={e.name} category={e.category}></Display>))}
                </tbody>
            </Table>
            
        </Container>
    );
}

export default Pizza;