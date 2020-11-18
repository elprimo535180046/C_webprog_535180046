const express = require('express');
const parser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const app = express();

//Use the layout
app.use(layouts);
app.set('layout','layouts/main.ejs');

//Place layout at head 
app.set("layout extractStyles", true);
//Place layout at end
app.set("layout extractScripts",true);

//Set view engine to EJS
app.set('view engine','ejs');

app.use(parser.urlencoded());

//Use static files
app.use(express.static('public'));

//Enabling session
app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));

//Start routing
const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/',index);
app.use('/auth',auth);



app.listen(3000);
console.log('Running on port 3000');