const express = require('express');
const app = express();
require('dotenv').config({ path: 'variables.env' })



app.set('port', process.env.PORT || 5000)
const server = app.listen(app.get('port'), () => {
  console.log(`Your app is running on port ${server.address().port}`);
})