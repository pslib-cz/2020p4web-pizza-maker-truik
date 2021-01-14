import React from 'react';
import Add from './add.jsx';

export const IngredienceContext = React.createContext();

export default class Ingredience extends React.Component{
    constructor(props){
        super(props);
        this.state = {ingredience:[
            {id: 1, name: "Šunka", category: "maso"},
            {id: 1,name: "Eidam", category: "sýr"},
            {id: 1,name: "Kuřecí", category: "maso"}
        ]};
    }
    render(){
        return(
            <>
                <IngredienceContext.Provider value={this.state}>
                    {this.props.children}
                </IngredienceContext.Provider>
                <Add />
            </>
        );
    }
}
