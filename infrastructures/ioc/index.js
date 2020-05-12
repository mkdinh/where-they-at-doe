const Container = require('./container')
const bootstrap = require('./boostraper');

const container = new Container();
module.exports = bootstrap(container);
