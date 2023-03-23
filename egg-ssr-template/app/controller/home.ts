import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const { url, path } = ctx;
    const page = ctx.query.page;
    // const result = await service.news.list(page);
    // await ctx.render('layout');
    ctx.info = {
      injectScript: '',
    };

    // await ctx.renderSSR({
    // 	url,
    // 	path,
    // });
    ctx.body = 'ss';
    // await ctx.render('layout');
  }
}
