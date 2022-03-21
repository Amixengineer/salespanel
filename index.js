const express = require("express");
const req = require("express/lib/request");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const options = require("./admin.options");
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

app.use("/", (req, res) => {
  res.json("welcom to the store");
});

// import our models here

app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Your app is running on port ${server.address().port}`);
});
