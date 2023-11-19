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
    mail: MailConfig;
    auth: AuthConfig;
};


export type AppConfig = {
    nodeEnv: string;
    name: string;
    workingDirectory: string;
    port: number;
    apiPrefix: string;
    fallbackLanguage: string;
    headerLanguage: string;
    frontendDomain: string;
    
};

export type MailConfig = {
    port: number;
    host?: string;
    user?: string;
    password?: string;
    defaultEmail?: string;
    defaultName?: string;
    ignoreTLS: boolean;
    secure: boolean;
    requireTLS: boolean;
  };
  
  export type AuthConfig = {
    secret: string;
    expires: string;
    refreshSecret?: string;
    refreshExpires?: string;
    forgotSecret?: string;
    forgotExpires?: string;
    confirmEmailSecret?: string;
    confirmEmailExpires?: string;
  };

