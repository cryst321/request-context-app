/**
 * context middleware
 * wraps each HTTP request in a new ALS context
 */
const contextService = require('../context/context.service');

function contextMiddleware(req, res, next) {
    contextService.run(() => {
        next();
    });
}

module.exports = contextMiddleware;