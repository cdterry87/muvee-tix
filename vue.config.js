module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Muvee Tix - A FAN-tastic place to get your movie tickets!'
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/muvee-tix/" : "/",
}