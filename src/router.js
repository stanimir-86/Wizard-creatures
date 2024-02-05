const router = require('express').Router();
const homeControler = require('./controllers/homeController.js')

//TODO add endpoints with controllers her...

router.use(homeControler)

module.exports = router;