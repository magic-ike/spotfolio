module.exports = {
  async redirects() {
    return [
      {
        source: '/s-d-c',
        destination: 'https://spotify-data-card.herokuapp.com',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
