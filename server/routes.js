const router = require('express').Router();
const controllers = require('./controllers');

router.post('/bark', controllers.send);

module.exports = router;