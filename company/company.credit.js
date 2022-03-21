const adminJS = require('adminjs');
const { Credit } = require('../models/Credit');

/** @type {adminJS.ResourceOptions} */
const pageNavigation = {
  name: 'مدیریت نسیه ها',
  icon: 'credit',
};

const options = {
  properties: {
    _id: {
      isVisible: false,
    },
    fullName: {
      title: true,
    },
  },
  navigation: pageNavigation,
}


module.exports = {
  options,
  resource: Credit,
}