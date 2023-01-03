const express = require('express');
const app = express();
const port = 8000;




app.listen(port, function (err) {
    if (err) {
        console.log(`Oops! error: ${err} occured while trying to run the server`);
        return;
    }
    console.log(`The server is succesfully running on port: ${port}`);
    return;
})