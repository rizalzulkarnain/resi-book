require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const slowDown = require('express-slow-down');
const cookieParser = require('cookie-parser');

function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    return res.status(204).end();
  }
  return next();
}

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(helmet());
app.use(xss());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10min
  max: 1000,
  message: 'Oops..You sent too many requests, please try again in 1 minutes',
});
app.use(limiter);
app.use(hpp());
app.use(
  slowDown({
    windowMs: 60 * 1000 * 1,
    delayAfter: 15,
    delayMs: 1500,
  })
);

const route = require('./routes');
app.use('/api', route);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Resi_Book-Api!' });
});

app.use(ignoreFavicon);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);