const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

//api routes
const users = require('./routes/api/users');


const app = express();

//Body parser middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json ());


//DB config
const db = require('./config/keys').mongoURI;
//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))