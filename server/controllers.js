const twilio = require('../helpers/twilio.js');
const twitter = require('../helpers/twitter.js');
const gmail = require('../helpers/gmail.js');

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
      .then((response) => {
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
};
