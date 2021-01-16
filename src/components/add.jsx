import React, {useContext, useState } from "react";
import {Form, Input} from "reactstrap";
import {IngredienceContext} from "./ingredienceProvider";


const Add = () => {
    const[name, setName] = useState("");
    const[category, setCategory] = useState("");
    const[context, setContext] = useContext(IngredienceContext);
    const changeName = e => {
        setName(e.target.value);
    }
    const changeCategory = e => {
        setCategory(e.target.value);
    }
    const addIngredient = e => {
        e.preventDefault();
        setContext(prev => [...prev, {name: name, category: category}]);
    }
    return(
        <Form onSubmit={addIngredient}>
            <label>Jméno</label>
            <Input type="text" name="name" value={name} onChange={changeName} />
            <label>Kategorie</label>
            <Input type="text" name="category" value={category} onChange={changeCategory} />
            <Input type="submit" />
        </Form>
    );
}
export default Add;