import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    INDICADORES_MICROSERVICE_HOST: string;
    INDICADORES_MICROSERVICE_PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    INDICADORES_MICROSERVICE_HOST: joi.string().required(),
    INDICADORES_MICROSERVICE_PORT: joi.number().required()
})
.unknown(true);

const {error, value } = envsSchema.validate(process.env);

if(error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    indicadoresMicroserviceHost: envVars.INDICADORES_MICROSERVICE_HOST,
    indicadoresMicroservicePort: envVars.INDICADORES_MICROSERVICE_PORT,
}