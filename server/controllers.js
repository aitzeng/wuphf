const twilio = require('../helpers/twilio.js');
const twitter = require('../helpers/twitter.js');

module.exports = {
  post: (req, res) => {
    twitter.tweet(req.body)
      .then((message) => {
        res.status(200).send(message);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
    // twilio.postPhone(req.body)
    //   .then((message) => {
    //     res.status(200).send(message);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(500);
    //   });
  },
};
