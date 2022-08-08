// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/ShippingLine.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingLine.html')
    }
  }
})
