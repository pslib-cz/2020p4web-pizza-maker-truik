import React from 'react';
import { Form, Input } from 'reactstrap';
import { IngredienceContext } from './ingredienceProvider.jsx';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.ingre = {name: "", category: ""};
        this.update = this.update.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
    }
    update(e) {
        this.setIngre(ingre => ({
            [e.target.name]: e.target.value
        }));
    }
    addIngredients(e) {
        e.preventDefault();
        this.context(context => ({
            [e.target.name]: e.target.value
        }));
    }
    render() {
        return (
            <>
                <IngredienceContext.Consumer>
                    <Form onSubmit={this.addIngredients}>
                        <Input type="text" name="name" value={this.ingre.name} onChange={this.update} />
                        <Input type="text" name="category" value={this.ingre.category} onChange={this.update} />
                        <Input type="submit" />
                    </Form>
                </IngredienceContext.Consumer>
            </>
        );
    }
}