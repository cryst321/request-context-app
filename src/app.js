const express = require('express');
const contextMiddleware = require('./middleware/context.middleware');
const contextService = require('./context/context.service');

const app = express();

app.use(contextMiddleware);

//  Task 1: Request Entry Point
app.get('/', (req, res) => {
    // ID is retrieved from the context
    const executionId = contextService.getExecutionId();
    // returning the ID in the response object
    res.json({ executionId });
});

module.exports = app;