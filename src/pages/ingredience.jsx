import React, { useContext } from 'react';
import { IngredienceContext } from '../components/ingredienceProvider.jsx';
import Display from '../components/display.jsx';
import Add from '../components/add.jsx';

export default class Ingredience extends React.Component {
    render() {
        return (
            <>
                <h1>Ingredience</h1>
                <IngredienceContext.Consumer>
                    {ing => ing? ing.ingredience.map((e) => (<Display name={e.name} category={e.category} />)) : ""}
                </IngredienceContext.Consumer>
            </>
        );
    }
}