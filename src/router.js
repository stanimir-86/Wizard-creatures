const router = require('express').Router();
const homeControler = require('./controllers/homeController.js')
const userControler = require('./controllers/userController.js')
//TODO add endpoints with controllers her...

router.use(homeControler);
router.use('user', userControler);

module.exports = router;