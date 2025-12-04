import pino from 'pino';
import knex from 'knex';
import Redis from 'ioredis';
import config from '@config';

export const logger = pino({});

export const db = knex({
	client: 'pg',
	connection: config.db.url,
	debug: config.db.logs
});

export const redis = new Redis(config.redis.url);
