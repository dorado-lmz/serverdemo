var role = require('./mockdata/role.json');

function addRole(router) {
    router.get('/getrole', async (ctx, next) => {
        // ctx.router available
        ctx.response.type = 'json';
        ctx.response.body = role;
    });
}


module.exports = {
    apply: (router) => {
        addRole(router);
    }
}