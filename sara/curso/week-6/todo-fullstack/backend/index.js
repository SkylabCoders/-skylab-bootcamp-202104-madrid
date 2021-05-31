const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const morgan = require('morgan');
const taskRouter = require('./routes/taskRouter');
require('dotenv').config();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan('dev'));

app.use('/api/task', taskRouter);

const port = 4000;

app.listen(
  port,
  () => debug(`app is running on ${chalk.blue(`http://localhost:${port}`)}`),
);
