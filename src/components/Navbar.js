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
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Qualifications">{props.qualifications}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Experience">{props.experience}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Projects">{props.projects}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Skills">{props.skills}</Link>
                        </li>
                        <li className="nav-item my-2">
                            <Link className="mx-3 nav-link btn btn-outline-primary" to="/Contacts">{props.contacts}</Link>
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
    qualifications : PropTypes.string,
    projects : PropTypes.string,
    signup : PropTypes.string,
    contacts : PropTypes.string,
    experience : PropTypes.string,
    skills : PropTypes.string
}

Navbar.defaultProps = {
    title : "Moniruzzaman Shanto",
    home : "Home",
    about : "About",
    qualifications : "Qualifications",
    projects : "Projects",
    signup : "Signup",
    contacts : "Contacts",
    experience : "Experience",
    skills : "Skills"
  };