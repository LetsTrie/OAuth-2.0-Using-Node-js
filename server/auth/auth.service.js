const jwt = require('jsonwebtoken');
const { envVars } = require('../../config');

/**
 * Generates a JSON Web Token (JWT)
 * @param {object} payload - Data to be encoded into the token
 * @returns {string} Generated JWT
 */
const generateAccessToken = (payload) => {
  return jwt.sign(payload, envVars.accessTokenSecret, {
    expiresIn: '15m',
  });
};

module.exports = {
  generateAccessToken,
};
