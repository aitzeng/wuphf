const router = require('express').Router();
const controllers = require('./controllers');

router.post('/bark/gmail', controllers.sendEmail);
router.post('/bark/twitter', controllers.tweet);
router.post('/bark/twilio', controllers.sms);

module.exports = router;
