const router = require('express').Router();
const controllers = require('./controllers');

router.post('/bark', controllers.addDb);
router.post('/bark/gmail', controllers.sendEmail);
router.post('/bark/twitter', controllers.tweet);
router.post('/bark/twilio/text', controllers.sms);
router.post('/bark/twilio/call', controllers.call);
router.get('/sniff', controllers.get);

module.exports = router;
