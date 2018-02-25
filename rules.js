var Router = require('koa-router');
var router = new Router();


var db = require('./db');

router.get('/rules', async (ctx, next) => {
    // ctx.router available
    ctx.response.type = 'json';
    ctx.response.body = await db.getAllRules();
});

router.get('/rule/:name', async (ctx, next) => {
    // ctx.router available
    ctx.response.type = 'json';
    ctx.response.body = await db.getRule(ctx.params.name);
});

router.post('/rule/:name', async (ctx, next) => {
    // ctx.router available
    ctx.response.type = 'json';
    ctx.response.body = await db.updateRule(ctx.params.name,ctx.request.body.data);
});

module.exports = {
    addRules: (app) => {
        app.use(router.routes());
    }
}