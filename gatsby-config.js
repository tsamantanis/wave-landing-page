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
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Wave Social Media App`,
                short_name: `Wave App`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#2968F6`,
                display: `browser`,
                // icon: `${__dirname}/src/assets/img/icon.png`
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
