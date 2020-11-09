import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, title, author, image }) {
    const { site, file } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const metaAuthor = author || site.siteMetadata.author;
    // const metaImage = image || file.childImageSharp.fixed.src;

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en'
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    name: `author`,
                    content: metaAuthor
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                // {
                //     property: `og:image`,
                //     content: metaImage
                // },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:locale`,
                    content: `en_US`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: metaAuthor
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    meta: [],
    description: ``,
    author: ``
};

SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    author: PropTypes.string
};

export default SEO;
