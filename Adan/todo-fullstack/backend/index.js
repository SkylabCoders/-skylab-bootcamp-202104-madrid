const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const { connect } = require('mongoose');
const morgan = require('morgan');
const taskRoutes = require('./routers/taskRoutes');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`)
);
