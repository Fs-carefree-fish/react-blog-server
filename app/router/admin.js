// eslint-disable-next-line strict
module.exports = app => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth()
  // router.get('/admin/index', controller.admin.main.index);
  // router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  // router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
  // router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
  // router.post('/admin/updateArticle', adminauth, controller.admin.main.updateArticle);
  // router.get('/admin/getArticleList', adminauth, controller.admin.main.getArticleList);
  // router.get('/admin/delArticle/:id', adminauth, controller.admin.main.delArticle);
  // router.get('/admin/getArticleById/:id', adminauth, controller.admin.main.getArticleById);
  router.get('/blog/admin/index', controller.admin.main.index);
  router.post('/blog/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/blog/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
  router.post('/blog/admin/addArticle', adminauth, controller.admin.main.addArticle);
  router.post('/blog/admin/updateArticle', adminauth, controller.admin.main.updateArticle);
  router.get('/blog/admin/getArticleList', adminauth, controller.admin.main.getArticleList);
  router.get('/blog/admin/delArticle/:id', adminauth, controller.admin.main.delArticle);
  router.get('/blog/admin/getArticleById/:id', adminauth, controller.admin.main.getArticleById);
};
