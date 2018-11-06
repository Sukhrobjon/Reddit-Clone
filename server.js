const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const expressValidator = require('e')
const port = process.env.PORT || 3000 
// controller
require('./controllers/posts.js')(app);

const bodyParser = require('body-parser');


// Handlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); 

// PORT
app.listen(port, () => {
    console.log('App listening on port 3000!')
})
