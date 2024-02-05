const router = require('express').Router();
const homeControler = require('./controllers/homeController')
const userControler = require('./controllers/userController')
//TODO add endpoints with controllers her...

router.use(homeControler);
router.use('/users', userControler);

module.exports = router;