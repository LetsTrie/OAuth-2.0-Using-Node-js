const express = require('express');

require('dotenv').config();

const { envVars, redisClient, logger } = require('./config');

const app = express();

app.use(express.json());

app.listen(envVars.port, () => {
  logger.info(`OAuth 2.0 is running on port ${envVars.port}`);
});

process.on('unhandledRejection', async (err, promise) => {
  logger.error(err, {
    dispatcher: 'Index',
    from: 'Event: unhandledRejection',
    promise,
  });
});

process.on('uncaughtException', (error) => {
  logger.error(
    error,
    { dispatcher: 'Index', from: 'Event: uncaughtException' },
    () => process.exit(1),
  );
});

process.on('exit', async (code) => {
  // mongoose.connection.close();
  await redisClient.quit();
  logger.error(`About to exit with code: ${code}`);
});

process.on('SIGINT', () => {
  logger.info('Caught interrupt signal');
  process.exit();
});
