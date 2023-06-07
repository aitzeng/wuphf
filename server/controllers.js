const twilio = require('../helpers/twilio.js');
const twitter = require('../helpers/twitter.js');
const gmail = require('../helpers/gmail.js');
const models = require('./models.js');

module.exports = {
  sendEmail: (req, res) => {
    gmail.sendMail(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  tweet: (req, res) => {
    twitter.tweet(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Err posting on twitter', err);
        res.sendStatus(500);
      });
  },
  sms: (req, res) => {
    twilio.postPhone(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Err sending text', err);
        res.sendStatus(500);
      });
  },
  addDb: (req, res) => {
    models.addDb(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Err sending to DB', err);
        res.sendStatus(500);
      });
  },
  get: (req, res) => {
    models.get()
      .then((response) => {
        console.log(response);
        res.send(response);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
