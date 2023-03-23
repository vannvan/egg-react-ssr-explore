import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.static = {
    prefix: '/assets/',
    // eslint-disable-next-line array-bracket-spacing
    dir: [path.join(appInfo.baseDir, 'app/public/csr')],
  };

  config.view = {
    // eslint-disable-next-line array-bracket-spacing
    // root: [path.join(appInfo.baseDir, 'app/view'), path.join(appInfo.baseDir, 'app/public/ssr')].join(','),
    // mapping: {
    //   '.html': 'nunjucks',
    //   '.js': 'reactLoadable',
    // },
  };

  config.reactLoadable = {
    // nodeStatsFile: path.join(appInfo.baseDir, 'app/public/ssr/loadable-stats.json'),
    // webStatsFile: path.join(appInfo.baseDir, 'app/public/csr/loadable-stats.json'),
    template: {
      renderSSR: {
        renderSSRTemplate: path.join(appInfo.baseDir, 'app/view/layout.html'),
        viewEngine: 'nunjucks',
      },
    },
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1679455608756_1345';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
