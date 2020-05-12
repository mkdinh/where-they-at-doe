const Router = require('express').Router;
const container = require( '../../infrastructures/ioc');
const userController = container.get('userController');

const router = Router();
router.get('/', userController.getUsers.bind(userController))
router.get('/:id', userController.getUser.bind(userController));

module.exports = router;

