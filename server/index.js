require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
