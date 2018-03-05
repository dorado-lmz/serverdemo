
var db = require('./db');

function addRules(router) {
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
}


module.exports = {
    apply: (router) => {
        addRules(router);
    }
}