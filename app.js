const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'hello, docker';
});

app.listen(3010, () => {
    console.log('3010端口已启动');
});

