module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? 'vue-portfolio/docs'
      : '/',
  outputDir: 'docs',
}
