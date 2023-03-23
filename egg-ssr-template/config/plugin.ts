import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
	tegg: {
		enable: true,
		package: '@eggjs/tegg-plugin',
	},
	nunjucks: {
		enable: true,
		package: 'egg-view-nunjucks',
	},
	reactLoadable: {
		enable: true,
		package: 'egg-view-react-loadable',
	},
	teggConfig: {
		enable: true,
		package: '@eggjs/tegg-config',
	},
	teggController: {
		enable: true,
		package: '@eggjs/tegg-controller-plugin',
	},
	teggSchedule: {
		enable: true,
		package: '@eggjs/tegg-schedule-plugin',
	},
	eventbusModule: {
		enable: true,
		package: '@eggjs/tegg-eventbus-plugin',
	},
	aopModule: {
		enable: true,
		package: '@eggjs/tegg-aop-plugin',
	},
	tracer: {
		enable: true,
		package: 'egg-tracer',
	},
};

export default plugin;
