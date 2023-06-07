const twilio = require('../helpers/twilio.js');
const twitter = require('../helpers/twitter.js');

module.exports = {
  post: (req, res) => {
    twitter.tweet(req.body)
      .then(() => {
        twilio.postPhone(req.body)
          .then(() => {
            res.send('Posted on Twitter and phone');
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
