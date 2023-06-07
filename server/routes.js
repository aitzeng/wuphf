const router = require('express').Router();
const controllers = require('./controllers');

router.post('/bark', controllers.addDb);
router.post('/bark/gmail', controllers.sendEmail);
router.post('/bark/twitter', controllers.tweet);
router.post('/bark/twilio', controllers.sms);
router.get('/sniff', controllers.get);

module.exports = router;
