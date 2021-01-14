import React from 'react';
import '../nav.css';
import { Link } from "react-router-dom";

export default function nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/" className="nav-link">
                    <li>Domů</li>
                </Link>
                <Link to="/order/pizza" className="nav-link">
                    <li>Pizza</li>
                </Link>
                <Link to="/order/calzone" className="nav-link">
                    <li>Calzone</li>
                </Link>
                <Link to="/ingredients" className="nav-link">
                    <li>Ingredience</li>
                </Link>
            </ul>
        </nav>
    );
}