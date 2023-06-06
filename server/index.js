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

const port = process.env.PORT || 3000;

// app.post('/wuphf/bark', (req, res) => {
//   client.messages
//     .create({ from: '+18449360246', body: req.body, to: req.phoneNumber })
//     .then((message) => {
//       res.send(message.sid);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

app.use('/wuphf', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
