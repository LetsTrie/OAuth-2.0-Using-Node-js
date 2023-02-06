const Joi = require('joi');

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'test', 'development').default('development'),
  PORT: Joi.number().default(4044),
  ACCESS_TOKEN_SECRET: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PASSWORD: Joi.string().required(),
  REDIS_PORT: Joi.number(),
})
  .unknown()
  .required();

const { value: envVars } = envVarsSchema.validate(process.env);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  accessTokenSecret: envVars.ACCESS_TOKEN_SECRET,
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
    password: envVars.REDIS_PASSWORD,
  },
};
