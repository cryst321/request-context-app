/**
 * cron service
 * implements scheduled job that runs every 30 minutes and
 * logs a unique execution identifier
 */
const cronService = require('node-cron');
const contextService = require('../context/context.service');

/**
 * universal context decorator to store information for the duration of the cron execution
 * @param fn function to wrap in context
 */
function withContext(fn) {
    return function (...args) {
        return contextService.run(() => {
            return fn.apply(this, args);
        });
    };
}
/**
 * schedules job to run every 30 minutes and log executionId
 */
function initCronJobs() {

    cronService.schedule('*/30 * * * *', withContext(() => {
        // generating and retrieving the execution ID from the context
        const executionId = contextService.getExecutionId();
        // logging the ID to console
        console.log(`[CRON] Execution ID: ${executionId}`);
    }));

    console.log('Cron job that runs every 30 minutes initialized');
}

module.exports = {
    initCronJobs,
    withContext,
};