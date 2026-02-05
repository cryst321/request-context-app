const app = require('./app');
const { initCronJobs } = require('./cron/cron.service');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    // Task 2: Cron Job Execution
    initCronJobs();
});