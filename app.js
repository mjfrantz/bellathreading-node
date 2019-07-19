const express = require('express');
const morgan = require('morgan');
const appointmentRouter = require('./routes/appointmentRoutes');

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    console.log('Hello from middleware');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//Mounting the Router
app.use('/api/v1/appointments', appointmentRouter);

module.exports = app;