import React, { createContext, useState } from "react";

export const IngredienceContext = createContext();

const Ingredients = props => {
    const [ingredients, setIngredients] = useState([
        { id: 1, name: "Eidam", category: "Sýry" },
        { id: 2, name: "Niva", category: "Sýry" },
        { id: 3, name: "Kuřecí", category: "Maso" },
        { id: 4, name: "Vepřové", category: "Maso" }
    ]);
    return (
        <IngredienceContext.Provider value={[ingredients, setIngredients]}>
            {props.children}
        </IngredienceContext.Provider>
    );
}
export default Ingredients;