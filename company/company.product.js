const adminJS = require('adminjs');
const { Product } = require('../models/Product');

/** @type {adminJS.ResourceOptions} */
const pageNavigation = {
  name: 'مدیریت محصولات',
  icon: 'Product',
};

const options = {
  properties: {
    _id: {
      isVisible: false,
    },
    name: {
      title: true,
    }
  },
  navigation: pageNavigation,
}


module.exports = {
  options,
  resource: Product,
}