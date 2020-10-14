module.exports = {
    siteMetadata: {
        title: `Wave Social App`,
        description: `Wave is a social media app built to help people connect: without ads, bots, like buttons, or distractions.`,
        author: `Philippos Tsamantanis`,
        siteUrl: `https://netlify.wave.app`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/assets/img`
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        },
    ]
}
