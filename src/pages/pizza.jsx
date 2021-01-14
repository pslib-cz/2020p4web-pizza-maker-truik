import React, { useContext } from 'react';
import {IngredienceContext} from '../components/ingredienceProvider';
import Display from '../components/display';
import Buy from '../components/Buy.jsx';

export default class Pizza extends React.Component{
    constructor(props){
        super(props);
        this.state = [{name: "", category: ""}];
    }
    add(props){
        this.setState(state => ({
            name: props.name,
            category: props.category
        }));
    }
    render(){
        return(
            <>
                <h1>Pizza</h1>
                <IngredienceContext.Consumer>
                    {ing => ing? ing.ingredience.map((e) => (<Display name={e.name} category={e.category} add/>)) : ""}
                </IngredienceContext.Consumer>
                
            </>
        );
    }
}