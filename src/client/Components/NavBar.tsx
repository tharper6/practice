import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="row justify-content-around border border-dark">
        <Link className="btn btn-primary my-2" to="/">Home</Link>
        <Link className="btn btn-primary my-2" to="/add">Add</Link>
        <Link className="btn btn-primary my-2" to="/login">Login</Link>
        <Link className="btn btn-primary my-2" to="/register">Register</Link>
        </div>
    )
}

export default NavBar;