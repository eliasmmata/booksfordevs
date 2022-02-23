const path = require('path')

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com','lh3.googleusercontent.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
}
