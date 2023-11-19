
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'local';
			PORT: string;
			DB_HOST: string;
			DB_USERNAME: string;
			DB_PASSWORD: string;
			DB_DATABASE: string;
            DB_PORT: string;
		}
	}


}

export {};