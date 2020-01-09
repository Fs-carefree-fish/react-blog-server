// eslint-disable-next-line strict
module.exports = app => {
  const { router, controller } = app;
  // router.get('/default/index', controller.default.home.index);
  // router.get('/default/getArticleList', controller.default.home.getArticleList);
  // router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  // router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  // router.get('/default/getListById/:id', controller.default.home.getListById);
  router.get('/blog/default/index', controller.default.home.index);
  router.get('/blog/default/getArticleList', controller.default.home.getArticleList);
  router.get('/blog/default/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/blog/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/blog/default/getListById/:id', controller.default.home.getListById);
};
