import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Footer from './Footer';

import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
