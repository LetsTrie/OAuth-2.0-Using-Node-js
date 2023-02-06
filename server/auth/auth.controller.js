// const jwt = require('jsonwebtoken');
// const { envVars, redisClient, logger } = require('../../config');

// const validateToken = async (req, res, next) => {
//   try {
//     const authHeader = req.header.Authorization;
//     if (!authHeader) {
//       return res.status(401).json({ error: 'Access token required' });
//     }

//     const [bearer, accessToken] = authHeader.split(' ');
//     if (bearer !== 'Bearer') {
//       return res.status(401).json({ error: 'Invalid authorization header' });
//     }

//     const decoded = jwt.verify(accessToken, envVars.accessTokenSecret);
//     const { clientId, username } = decoded;

//     const clientKey = `client:${clientId}`;
//     const clientCredentials = await redisClient.get(clientKey);
//     if (!clientCredentials) {
//       return res.status(401).json({ message: 'Invalid client credentials' });
//     }

//     return res.status(200).json({ user: decoded });
//   } catch (err) {
//     logger.error(`Token validation: ${err.stack}`);
//     return next(err);
//   }
// };

// module.exports = {
//   validateToken,
// };

// TODO
// store accessId and accessSecret in redis
// other account informations in mongoDB
// jwt { accessId, username }
// validate/revoke token
// Introspection
