const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./config/db');

var logger = require('morgan')
const API = require('./routes/tasks')
const PORT = 3000;


// Connect Database

connectDB();

/*---------Intialize Middleware-----*/

app.use(logger('dev'));
app.use(express.json({extended : false}));


/*------------Setup Of APIs-------------*/

app.use("/api/v1/tasks" ,API)


/*-----------Define Port---------------*/

app.listen(PORT ,()=>{
    console.log(` Server is Listening on port ${PORT}`)
})




