var Router = require('koa-router');
var router = new Router();
var rules = require('./rules');
var role = require('./role');

role.apply(router);
rules.apply(router);

module.exports = {
    addRules: (app) => {
        app.use(router.routes());
    },
    router
}