import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../assets/img/logo.inline.svg';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="navbar-light bg-white">
            <div className="container">
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
                    {/*<Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="">Log In</Nav.Link>
                        </Nav.Item>
                    </Nav>*/}
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;
