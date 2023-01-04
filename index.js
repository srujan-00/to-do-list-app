const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('./config/mongoose');
const task = require('./models/task');
console.log(task);
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Oops! error: ${err}  occured while trying to run the server`);
        return;
    }
    console.log(`The server is succesfully running on port: ${port}`);
    return;
})