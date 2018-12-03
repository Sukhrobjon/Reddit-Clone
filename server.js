const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const expressValidator = require('express-validator')

const port = process.env.PORT || 3000 
const bodyParser = require('body-parser');
// controllers
const posts = require('./controllers/posts.js')
// Set db
const database = require('./data/reddit-db');

//mongodb
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reddit-clone", {useNewUrlParser: true});

// Handlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); 

// linking the files

// PORT
app.listen(port, () => {
    console.log('App listening on port 3000!')
})

posts(app)
module.exports = app;