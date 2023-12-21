const combineRouters = require('koa-combine-routers');

const news = require('./news');

const router = combineRouters(
    news,
  );
  
  module.exports = router;