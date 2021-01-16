import React from "react";
import { Link } from "react-router-dom";
import "../nav.css";

const Nav = () => {
    return (
        <nav>
            <ul className="navL">
                <Link to="/" className="nav-link">
                    <li>Domů</li>
                </Link>
                <Link to="/order/calzone" className="nav-link">
                    <li>Calzone</li>
                </Link>
                <Link to="/order/pizza" className="nav-link" >
                    <li>Pizza</li>
                </Link>
                <Link to="/ingredients" className="nav-link">
                    <li>Ingredience</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;