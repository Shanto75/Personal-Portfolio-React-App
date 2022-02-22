import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Home">{props.home}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/About">{props.about}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Home">{props.education}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Home">{props.projects}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Signup">{props.signup}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string,
    home : PropTypes.string,
    about : PropTypes.string,
    education : PropTypes.string,
    projects : PropTypes.string,
    signup : PropTypes.string
}

Navbar.defaultProps = {
    title : "Title",
    home : "Home",
    about : "About",
    education : "Education",
    projects : "Projects",
    signup : "Signup"
  };