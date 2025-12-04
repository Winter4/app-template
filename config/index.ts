import dotenv from 'dotenv';
import * as z from 'zod';
import * as fs from 'node:fs';
import path from 'node:path';

dotenv.config({path: path.resolve(__dirname, '..', '.env')});

/* - - - - - - - - - - - - - - - - - - */

function getConfig(filename: string, required: boolean = true) {
	if(fs.existsSync(path.resolve(__dirname, filename))) {
		return JSON.parse(
			fs.readFileSync(path.resolve(__dirname, filename)).toString()
		);
	}

	if(required) throw new Error(`config: ${filename} file is absent`);
	else return {};
}

/* - - - - - - - - - - - - - - - - - - */

const schema = z.object({
	projectName: z.string().min(1),
	nodeEnv: z.literal(['development', 'production']),
	http: z.object({
		apiPort: z.int().min(1),
		frontendUrl: z.hostname()
	}),
	redis: z.object({
		url: z.url()
	}),
	db: z.object({
		url: z.url(),
		logs: z.boolean()
	}),
	sessionSecret: z.string().min(5)
});

type Config = z.infer<typeof schema>;

/* - - - - - - - - - - - - - - - - - - */

const defaultConfig = getConfig('default.json');
const localConfig = getConfig('local.json', false);

export default schema.parse({
	...defaultConfig,
	...localConfig,
	projectName: process.env.PROJECT_NAME,
	nodeEnv: process.env.NODE_ENV
});

export type {Config};
