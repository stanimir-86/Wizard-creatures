const router = require('express').Router();
const homeControler = require('./controllers/homeController')
const userControler = require('./controllers/userController')
const allPostsController = require('./controllers/postCotntroller.js');

router.use(homeControler);
router.use('/users', userControler);
router.use('/posts', allPostsController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;