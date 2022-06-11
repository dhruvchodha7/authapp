const express = require('express');
require('dotenv').config();
const app = express();
const {PORT} = process.env;
const hbs = require('hbs')
const { urlencoded } = require('express');

const userRoute = require('./route/user');
const homeRoute = require('./route/home');

//middleware
app.use(urlencoded({extended: false}))
app.use(morgan('tiny'));
//template engine
app.set('view engine', 'hbs');


module.exports = app;