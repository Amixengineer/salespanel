const express = require('express');
const req = require('express/lib/request');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' })


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
})


// import our models here


app.set('port', process.env.PORT || 5000)
const server = app.listen(app.get('port'), () => {
  console.log(`Your app is running on port ${server.address().port}`);
})