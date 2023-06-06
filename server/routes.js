const router = require('express').Router();
const controllers = require('./controllers');

router.post('/bark', controllers.post);

module.exports = router;
