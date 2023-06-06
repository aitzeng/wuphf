const twilio = require('../helpers/twilio.js');

module.exports = {
  post: (req, res) => {
    twilio.postPhone(req.body)
      .then((message) => {
        res.status(200).send(message);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  },
};
