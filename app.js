const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const express = require("express");
const options = require("./admin.options");
// const bu = require("./admin.router");
const app = express();
const path = require("path");

const admin = new AdminJS(options);

const router = AdminJSExpress.buildRouter(admin);

app.use(admin.options.rootPath, router);

// our static files and assets
app.use(express.static(path.resolve(__dirname, "assets")));

// takes the raw request and change into properties in the body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get the cookies coming from request
// app.use(cookieParser());

module.exports = app;
