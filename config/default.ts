export default {
	nodeEnv: process.env.NODE_ENV,
	projectName: 'project',
	deploy: {
		expressPort: 5001,
		frontendUrl: 'localhost',
		dbUrl: 'postgresql://dev:localpass@localhost:5400/dbname',
		dbLogs: false,
		redisUrl: 'redis://:localpass@localhost:6300/0'
	},
	sessionSecret: 'use uuid lol'
};
