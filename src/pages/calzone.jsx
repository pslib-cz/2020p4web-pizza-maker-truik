import React, { useContext } from 'react';
import { IngredienceContext } from '../components/ingredienceProvider';
import Display from '../components/display';
import Buy from '../components/Buy.jsx';

export default class Calzone extends React.Component {
    constructor(props) {
        super(props);
        this.state = [{ name: "", category: "" }];
    }
    Add(props) {
        this.setState(state => ({
            name: props.name,
            category: props.category
        }));
    }
    render() {
        return (
            <>
                <h1>Calzone</h1>
                <IngredienceContext.Consumer>
                    {ing => ing ? ing.ingredience.map((e) => (<Display name={e.name} category={e.category} />)) : ""}
                </IngredienceContext.Consumer>
            </>
        );
    }
}