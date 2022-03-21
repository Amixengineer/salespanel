const passwordFeature = require('@adminjs/passwords');
const argon2 = require('argon2');
// const { Customer } = require('../../models/Customer');

/**
 * @type {AdminBro.ResourceOptions}
 */

const options = {
  properties: {
    _id: {
      isVisible: false,
    },
  },
};

module.exports = {
  // resource: Customer,
  options,
  encryptedPassword: {
    isVisible: false,
  },
  features: [
    passwordFeature({
      properties: {
        password: 'password',
        // we save hashed pass into encryptedPassword and invisible it from the user I mean admin :)
        encryptedPassword: 'password',
      },
      hash: argon2.hash,
    }),
  ],
};