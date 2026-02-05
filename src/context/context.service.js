/**
 * context service
 * global context module that uses ALS to manage
 * per-request or per-execution context
 */
const { AsyncLocalStorage } = require('async_hooks');
const crypto = require('crypto');

// ALS to manage per-request context
const asyncLocalStorage = new AsyncLocalStorage();

// global context module to store request-related information
const contextService = {


    run(callback) {
        const context = {
            // generating the request ID using UUID v4
            executionId: crypto.randomUUID(),
        };
        return asyncLocalStorage.run(context, callback);
    },

    getContext() {
        return asyncLocalStorage.getStore();
    },

    /**
     * get executionId from current context
     * @returns {string|undefined} UUID v4 identifier
     */
    getExecutionId() {
        const context = this.getContext();
        return context ? context.executionId : undefined;
    },
};

module.exports = contextService;