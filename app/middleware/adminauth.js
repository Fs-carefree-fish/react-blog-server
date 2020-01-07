module.exports = options => {

  return async function adminauthor(ctx, next) {
    console.log(ctx.session.openId)
    if (ctx.session.openId) {
      await next()//中间件
    } else {
      ctx.body = { data: '没有登录' }
    }
  }

}