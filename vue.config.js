module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/myportfolio/'
      : '/',
  outputDir: 'docs',
}
