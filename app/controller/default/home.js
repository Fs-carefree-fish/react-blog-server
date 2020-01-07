'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    // const res = await this.app.mysql.get('blog_content', {});

    // console.log(res);


    this.ctx.body = 'api接口';

  }

  // 获取文章列表
  async getArticleList() {

    // eslint-disable-next-line prefer-const
    let sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%H:%i:%s') as addTime," +
      'article.view_count as view_count ,' +
      '.type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id';

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
    };
  }

  // 根据id获取文章详情
  async getArticleById() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.params.id;

    console.log(id);

    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE article.id=' + id;

    const results = await this.app.mysql.query(sql);

    this.ctx.body = { data: results };

  }

  // 得到类别名称和编号
  async getTypeInfo() {
    const results = await this.app.mysql.select('type');
    this.ctx.body = { data: results };

  }

  // 根据类别id获得文章列表
  async getListById() {
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'WHERE type_id=' + id;

    const results = await this.app.mysql.query(sql);

    this.ctx.body = { data: results };
  }

}

module.exports = HomeController;
