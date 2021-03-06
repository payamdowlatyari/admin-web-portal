const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const profilesRouter = require('./routes/profiles');
const usersRouter = require('./routes/users');
const userTypesRouter = require('./routes/userTypes');
const preferenceRouter = require('./routes/preferences');

app.use('/profiles', profilesRouter);
app.use('/users', usersRouter);
app.use('/userTypes', userTypesRouter);
app.use('/preferences', preferenceRouter);


if (process.env.NODE_ENV == 'production') {
  app.use(express.static('build'));
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
