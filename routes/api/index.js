const Router = require('express').Router;
const userRoutes = require('./user.route');
const router = Router();

router.use('/users', userRoutes)

module.exports = router;