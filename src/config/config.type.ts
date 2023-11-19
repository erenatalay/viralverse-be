export type DatabaseConfig = {
    username: string;
    password: string;
    database: string;
    port: number;
    host: string;
};

export type AllConfigType = {
    database: DatabaseConfig;
    app: AppConfig;
};


export type AppConfig = {
    nodeEnv: string;
    name: string;
    workingDirectory: string;
    port: number;
    apiPrefix: string;
    fallbackLanguage: string;
    headerLanguage: string;
};

