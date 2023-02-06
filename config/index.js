const envVars = require('./envVars');
const redisClient = require('./redis');
const logger = require('./winston');

module.exports = {
  envVars,
  redisClient,
  logger,
};
