import React, {Component} from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">BoilerPlate</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clicker">Clicker</Link>
                    </li>
                    </ul>
                </div>
            </nav>
    )
}
export default Header;