const Koa = require('koa');
const koaBody = require('koa-body');

var rules = require('./rules');

const app = new Koa();

app.use(koaBody({
  jsonLimit: '1kb'
}));


rules.addRules(app);


module.exports = app;