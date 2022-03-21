// const buildAuthenticatedRouter = require('@adminjs/express');
const mongoose = require('mongoose');
const adminjsExpress = require('@adminjs/express');
const MongoStore = require('connect-mongo');
require('dotenv').config({ path: 'variables.env' });
const {
  authenticationClosure,
} = require('./node_modules/admin-bro-users-permissions/src/authentication');
const userResource = require('./node_modules/admin-bro-users-permissions/src/resources/user');
const roleResource = require('./node_modules/admin-bro-users-permissions/src/resources/role');

/**
 * @param {AdminJS} admin
 * @return {express.Router} router
 */

const buildAdminRouter = (admin) => {
  // user is our admin just to not mix up with Admin in upper scope (adminSchema)
  const router = adminjsExpress.buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: 'supercomplicatedpass',
      cookieName: 'admin-bro',
      authenticate: authenticationClosure({
        userModel: userResource.getModel(mongoose),
        roleModel: roleResource.getModel(mongoose),
      }),
    },
    null,
    {
      resave: true,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DATABASE,
        dbName: 'store',
        stringify: false,
      }),
    }
  );

  return router;
};

module.exports = buildAdminRouter;
