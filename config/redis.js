const Redis = require('ioredis');
const bluebird = require('bluebird');

bluebird.promisifyAll(Redis);

const config = require('./envVars');
const logger = require('./winston');

const client = new Redis({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
  connectTimeout: 10000,
  enableReadyCheck: true,
  retryStrategy(times) {
    return Math.min(times * 10, 3000);
  },
});

client.on('connect', () => {
  logger.info('Successfully connected to Redis');
});

module.exports = client;
