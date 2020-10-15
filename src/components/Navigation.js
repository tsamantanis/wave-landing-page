import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../assets/img/logo.inline.svg';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="navbar-light">
            <div className="container-fluid NavPadding">
                <Navbar.Brand>
                    <Link to="/">
                        <Logo className="navbar-brand-img" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse">
                    <Navbar.Toggle aria-controls="navbarCollapse">
                        <i className="fe fe-x" />
                    </Navbar.Toggle>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <button className="NavCTA">Get Early Access</button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;
