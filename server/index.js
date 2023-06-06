require('dotenv').config();
const express = require('express');
const router = require('./routes.js');
const path = require('path');

// const { accountSid } = process.env;
// const { authToken } = process.env;
// const client = require('twilio')(accountSid, authToken);

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

app.use('/wuphf', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
