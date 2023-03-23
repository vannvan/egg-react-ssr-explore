import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
	const config: PowerPartial<EggAppConfig> = {
		logger: {
			// level: 'NONE',
		},
	};
	return config;
};
