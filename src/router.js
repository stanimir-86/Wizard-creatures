const router = require('express').Router();
const homeControler = require('./controllers/homeController')
const userControler = require('./controllers/userController')


router.use(homeControler);
router.use('/users', userControler);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;