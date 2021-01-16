import React, { useContext } from "react";
import { IngredienceContext } from "../components/ingredienceProvider";
import Display from "../components/display";
import Add from "../components/add";
import {Container, Table} from "reactstrap";

const Ingredients = () => {
    const [ingredients, SetIngredients] = useContext(IngredienceContext);
    return (
        <Container>
            <Table dark hover striped>
                <thead>
                    <tr>
                        <td colSpan={2}>Ingredience</td>
                    </tr>
                    <tr>
                        <td>Jméno</td>
                        <td>Kategorie</td>
                    </tr>
                </thead>
                <tbody>
                {ingredients.map(m => (<Display name={m.name} category={m.category}></Display>))}
                </tbody>
            </Table>
            <Add />
        </Container>
    );
}
export default Ingredients;