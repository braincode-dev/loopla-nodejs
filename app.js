const express = require('express');
const cors = require("cors");

const homeRouter = require('./routes/homeRoutes');
const rateRouter = require('./routes/rateRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/', homeRouter);
app.use('/api/v1/rates', rateRouter);

module.exports = app;
