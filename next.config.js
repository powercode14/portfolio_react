const withSass = require('@zeit/next-sass')
module.exports = withSass({
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://powercode14.github.io/portfolio_react' : ''
});