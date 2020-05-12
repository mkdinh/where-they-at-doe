const Router = require('express').Router;
function createRoutes() {
    const apiRoutes = require('./api');

    const router = Router();
    router.use('/api', apiRoutes)
    return router;
}

module.exports = createRoutes;