const Router = require('koa-router');
const { getLastNews } = require('../../db/news.js');

const router = new Router();

router.get('/news/last', async (ctx) => {
    ctx.response.body = getLastNews();
    ctx.response.status = 200;
});

module.exports = router;