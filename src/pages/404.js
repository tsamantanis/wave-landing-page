import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
    <Layout>
        <section>
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center no-gutters min-vh-100">
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <h1 className="display-3 font-weight-bold">Uh Oh.</h1>
                        <p className="mb-5 text-muted">This page was not found.</p>
                        <Link className="btn btn-primary" to="/">
                            Back to Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
