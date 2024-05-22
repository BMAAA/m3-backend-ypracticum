const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");

const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const gamesRouter = require('./routes/games');
const apiRouter = require("./routes/apiRouter");
const pagesRouter = require("./routes/pagesRouter");

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors, 
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
  usersRouter, 
  gamesRouter, 
  categoriesRouter
);

app.listen(PORT);
