const adminJS = require('adminjs');
const { Customer } = require('../models/Customer');

/** @type {adminJS.ResourceOptions} */
const pageNavigation = {
  name: 'مدیریت فروش ها',
  icon: 'sales',
};

const options = {
  properties: {
    _id: {
      isVisible: false,
    },
    product: {
      title: true,
    }
  },
  navigation: pageNavigation,
}


module.exports = {
  options,
  resource: Customer,
}