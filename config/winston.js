const winston = require('winston');
const chalk = require('chalk');

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  levels: winston.config.npm.levels,
  defaultMeta: { service: 'user-service' },
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.metadata(),
    winston.format.json(),
    winston.format.timestamp(),
    winston.format.prettyPrint(),
    winston.format.printf((log) => {
      const message = `${log.level}: ${process.pid} ${log.message} ${log.timestamp} `;
      if (log.level === 'error') return chalk.redBright(message);
      if (log.level === 'info') return chalk.blueBright(message);
      return message;
    }),
  ),
  transports: [
    new winston.transports.Console({ colorize: true }),
    new winston.transports.File({
      colorize: true,
      json: false,
      filename: 'auth.log',
    }),
    new winston.transports.File({
      colorize: true,
      json: false,
      filename: 'auth.error.log',
      level: 'error',
    }),
    new winston.transports.File({
      colorize: true,
      json: false,
      filename: 'auth.info.log',
      level: 'info',
    }),
  ],
});

module.exports = logger;
