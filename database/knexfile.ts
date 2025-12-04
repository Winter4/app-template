import type {Knex} from 'knex';
import config from '@config';

const knexConfig: { [key: string]: Knex.Config } = {
	development: {
		client: 'pg',
		connection: config.db.url
	},
};

module.exports = knexConfig;
