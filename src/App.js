import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href = "../index.html">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="../order/pizza.html">
              Pizza
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="../order/carzone.html">
              Calzone
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="../ingredients.html">
              Ingredience
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
