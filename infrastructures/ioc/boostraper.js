const { UserController } = require('../../controllers');
const { UserService } = require('../../services/');
const { UserRepository } = require('../../domains/user');
const Context = require('../context');

module.exports = function(container) {
    
    container.register('context', Context, []);
    container.register('userRepository', UserRepository, ['context']);
    container.register('userService', UserService, ['userRepository']);
    container.register('userController', UserController, ['userService']);

    return container;
}