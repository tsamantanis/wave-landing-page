import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './navigation';

import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
