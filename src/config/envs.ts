import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  OPENAI_API_KEY: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    OPENAI_API_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value as EnvVars;

export const envs = {
  port: envVars.PORT,
  openAiApiKey: envVars.OPENAI_API_KEY,
};
