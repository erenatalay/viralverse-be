import { registerAs } from '@nestjs/config';
import {
    IsOptional,
    IsInt,
    Min,
    Max,
    IsString,
    ValidateIf,
} from 'class-validator';
import { DatabaseConfig } from './config.type';
import validateConfig from 'src/utils/validate-config';

class EnvironmentVariablesValidator {
    @ValidateIf((envValues) => !envValues.DATABASE_HOST)
    @IsString()
    DB_HOST: string;

    @ValidateIf((envValues) => !envValues.DATABASE_PORT)
    @IsInt()
    @Min(0)
    @Max(65535)
    @IsOptional()
    DB_PORT: number;

    @ValidateIf((envValues) => !envValues.DATABASE_PASSWORD)
    @IsString()
    @IsOptional()
    DB_PASSWORD: string;

    @ValidateIf((envValues) => !envValues.DATABASE_NAME)
    @IsString()
    DB_DATABASE: string;

    @ValidateIf((envValues) => !envValues.DATABASE_USERNAME)
    @IsString()
    DB_USERNAME: string;
}

export default registerAs<DatabaseConfig>('database', () => {
    validateConfig(process.env, EnvironmentVariablesValidator);
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
    };
});