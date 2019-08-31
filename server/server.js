const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
require('./routes/accRoute.js')(app,path);

app.use(express.static(__dirname+'/www'));

let server = http.listen(3000, function () {
     let host = server.address().address;
     let port = server.address().port;
     console.log("My First Nodejs Server!");
     console.log("Server listening on: " + host + " port: " + port);
});

// http.createServer(accRoute.handleRequest).listen(3000)
